import React, { Component } from 'react'
import BeneficiariosDataService from '../services/beneficiarios.service';
import TablaBeneficiarios from './TablaBeneficiarios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import Cookies from 'js-cookie'
 
export default class BuscarBeneficiarios extends Component
{
    constructor(props)
    {
        super(props);
        this.retrieveBeneficiarios = this.retrieveBeneficiarios.bind(this);
        this.setPage = this.setPage.bind(this)
        this.sinFiltro = this.sinFiltro.bind(this);
        
        this.state = {
        beneficiarios: [],
        filtrarPorSexo:'',
        filtrarPorSeguimiento:null,
        filtrarPorActivo:1,
        filtrarPorEdad:'', 
        filtrarPorNombre:'',
        page: 0,
        history: props.history,
        retrieve: -1,
        };
        
    }

    

    componentDidMount()
    {
        if(!Cookies.get('cargado'))
        {
            Cookies.set('cargado', true)
            window.location.reload();
        }
        this.retrieveBeneficiarios();
    }


    retrieveBeneficiarios()
    {
        BeneficiariosDataService.getAll()
            .then(beneficiarios => {
                this.setState({beneficiarios: beneficiarios.data.data});
                this.setState({retrieve: 0});
            })
            .catch((e) => {
                console.log(e);
            })
        }

    setPage(newPage)
    {
        this.setState({page: newPage});
    }

    handleSexoChange = (event) => {
        this.setState({filtrarPorSexo: event.target.value});
        this.setPage(0);
    };

    handleSeguimientoChange = (event) => {
        this.setState({filtrarPorSeguimiento: event.target.value});
        this.setPage(0);
    };

    handleActivoChange = (event) => {
        this.setState({filtrarPorActivo: event.target.value});
        this.setPage(0);
    };

    handleEdadChange = (event) => {
        this.setState({filtrarPorEdad: event.target.value});
        this.setPage(0);
    };

    handleNombreChange = (event) => {
        this.setState({filtrarPorNombre: event.target.value});
        this.setPage(0);
    };

    sinFiltro()
    {
        this.setState({filtrarPorSexo: ''});
        this.setState({filtrarPorSeguimiento: null});
        this.setState({filtrarPorActivo: 1});
        this.setState({filtrarPorEdad: ''});
        this.setState({filtrarPorNombre: ''});
        this.setPage(0);
    }

    render()
    {
        const {
            beneficiarios,
            filtrarPorSexo,
            filtrarPorSeguimiento,
            filtrarPorActivo,
            filtrarPorEdad,
            filtrarPorNombre,
            page,
            history,
        } = this.state;
        return (
            <div>
                <div style={{
                    display:"flex",
                    justifyContent:"space-between",
                    margin: " 0px 40px 0px 40px"
                }}>
                    {Cookies.get("roles").includes("Administrador") ? 
                        <FormControl style={{minWidth: "20%"}}>
                            <InputLabel id="busca-por-activo-label">Buscar activos/inactivos</InputLabel>
                            <Select
                                labelId="busca-por-activo-label"
                                id="busca-por-activo"
                                value={this.state.filtrarPorActivo}
                                onChange={this.handleActivoChange}
                            >
                                <MenuItem value={1}>Activos</MenuItem>
                                <MenuItem value={0}>Inactivos</MenuItem>
                                <MenuItem value={null}>Todos</MenuItem>
                            </Select>
                        </FormControl> :
                        <></>
                    }
                    <FormControl style={{minWidth: "15%"}}>
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

                    <FormControl style={{minWidth: "20%"}}>
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

                    <FormControl style={{width: "15%"}}>
                        <TextField 
                            label="Buscar por edad"
                            type="number"
                            value={this.state.filtrarPorEdad}
                            onChange={this.handleEdadChange}
                        />
                    </FormControl>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: " 40px 40px 20px 40px",
                }}>
                    <FormControl style={{width: "85%"}}>
                        
                        <TextField 
                            label="Buscar por nombre"
                            value={this.state.filtrarPorNombre}
                            onChange={this.handleNombreChange}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                ),
                            }}
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
                        setPage={this.setPage}
                        page={page}
                        url={history}
                        sinFiltro={this.sinFiltro}
                        retrieve={this.state.retrieve}
                    /> 
            </div>
        );

    }
}