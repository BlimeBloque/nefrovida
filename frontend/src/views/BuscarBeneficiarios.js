import React, { Component } from 'react'
import BeneficiariosDataService from '../services/beneficiarios.service';
import TablaBeneficiarios from './TablaBeneficiarios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default class BuscarBeneficiarios extends Component
{
    constructor(props)
    {
        super(props);
        this.retrieveBeneficiarios = this.retrieveBeneficiarios.bind(this);

        this.state = {
        beneficiarios: [],
        filtrarPorSexo:'',
        };
    }

    componentDidMount()
    {
        this.retrieveBeneficiarios();
    }


    retrieveBeneficiarios()
    {
        BeneficiariosDataService.getAll()
            .then(beneficiarios => {
                this.setState({beneficiarios: beneficiarios.data.data});
            })
            .catch((e) => {
                console.log(e);
            })
    }

    handleSexoChange = (event) => {
        this.setState({filtrarPorSexo: event.target.value});
    };



    render()
    {
        const {
            beneficiarios,
            filtrarPorSexo,
        } = this.state;
        return (
            <div>
                <FormControl style={{minWidth: 150}}>
                    <InputLabel id="busca-por-sexo-label">Buscar por sexo</InputLabel>
                    <Select
                        labelId="busca-por-sexo-label"
                        id="busca-por-sexo"
                        value={this.state.filtrarPorSexo}
                        onChange={this.handleSexoChange}
                    >
                        <MenuItem value="">Todos</MenuItem>
                        <MenuItem value="H">Hombre</MenuItem>
                        <MenuItem value="M">Mujer</MenuItem>
                    </Select>
                </FormControl>
                <TablaBeneficiarios sexo={filtrarPorSexo} data={beneficiarios}/>
            </div>
        );

    }
}