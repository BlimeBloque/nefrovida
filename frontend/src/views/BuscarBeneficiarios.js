import React, { Component } from 'react'
import BeneficiariosDataService from '../services/beneficiarios.service';
import TablaBeneficiarios from './TablaBeneficiarios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default class BuscarBeneficiarios extends Component
{
    constructor(props)
    {
        super(props);
        this.retrieveBeneficiarios = this.retrieveBeneficiarios.bind(this);

        this.state = {
        beneficiarios: [],
        filtrarPorSexo:'',
        filtrarPorSeguimiento:null,
        filtrarPorActivo:1,
        filtrarPorEdad:'', 
        filtrarPorNombre:'',
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

    handleSeguimientoChange = (event) => {
        this.setState({filtrarPorSeguimiento: event.target.value});
    };

    handleActivoChange = (event) => {
        this.setState({filtrarPorActivo: event.target.value});
    };

    handleEdadChange = (event) => {
        this.setState({filtrarPorEdad: event.target.value});
    };

    handleNombreChange = (event) => {
        this.setState({filtrarPorNombre: event.target.value});
    };



    render()
    {
        const {
            beneficiarios,
            filtrarPorSexo,
            filtrarPorSeguimiento,
            filtrarPorActivo,
            filtrarPorEdad,
            filtrarPorNombre,
        } = this.state;
        return (
            <div>
                <div>
                    <FormControl style={{minWidth: 200}}>
                        <InputLabel id="busca-por-activo-label">Buscar activos/inactivos</InputLabel>
                        <Select
                            labelId="busca-por-activo-label"
                            id="busca-por-activo"
                            value={this.state.filtrarPorActivo}
                            onChange={this.handleActivoChange}
                        >
                            <MenuItem value={1}>Activos</MenuItem>
                            <MenuItem value={0}>Inactivos</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly"
                }}>
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

                    <FormControl style={{minWidth: 200}}>
                        <InputLabel id="busca-por-seguimiento-label">Buscar por seguimiento</InputLabel>
                        <Select
                            labelId="busca-por-seguimiento-label"
                            id="busca-por-seguimiento"
                            value={this.state.filtrarPorSeguimiento}
                            onChange={this.handleSeguimientoChange}
                        >
                            <MenuItem value={null}>Todos</MenuItem>
                            <MenuItem value={1}>Si</MenuItem>
                            <MenuItem value={0}>No</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl style={{width: 150}}>
                        <TextField 
                            label="Buscar por edad"
                            type="number"
                            value={this.state.filtrarPorEdad}
                            onChange={this.handleEdadChange}
                        />
                    </FormControl>
                </div>
                
                <div style={{
                    display:"flex",
                    justifyContent:"space-evenly"
                }}>
                    <FormControl style={{minWidth: 200}}>
                        <TextField 
                            label="Buscar por nombre"
                            value={this.state.filtrarPorNombre}
                            onChange={this.handleNombreChange}
                        />
                    </FormControl>
                </div>
                <TablaBeneficiarios 
                    activo={filtrarPorActivo}
                    sexo={filtrarPorSexo} 
                    seguimiento={filtrarPorSeguimiento} 
                    edad={filtrarPorEdad} 
                    nombre={filtrarPorNombre}
                    data={beneficiarios}
                    page={0}
                />
            </div>
        );

    }
}