import React, { Component } from 'react';
import axios from "axios";
import { API } from "../config";
import { Grid, Typography } from '@material-ui/core';

export default class JornadaDetalleEspecifico extends Component {

    constructor(props) {
        super(props);
    
        this.getDetallesJornada = this.getDetallesJornada.bind(this);
    
        this.state = {
          detalles: [],
        };
      }


    componentDidMount() {
        this.getDetallesJornada();
      }
    
      getDetallesJornada() {
        axios
          .get(API + "/jornadas/" + this.props.idJornada)
          .then((detalles) => {
            this.setState({ detalles: detalles.data });
          })
          .catch((e) => {
            console.log(e);
          });
      }

     
    render() {
        console.log(this.state.detalles)
        if(this.state.detalles.length === 0){
            return(
                <Typography variant="h4" gutterBottom align="center">
                    ERROR 404 | Jornada no encontrada
                </Typography>
            )
        } else {
        return (
            <div>
                { this.state.detalles.map ((detalle) => (
                    <div key = 'detalle.idJornada'>
                        <Grid container spacing='3' justify="space-between">
                            <Grid item xs={6}> 
                            <Typography variant="h3" gutterBottom>
                                {detalle.nombre}
                            </Typography>
                            </Grid>
                            <Grid item xs={1}>
                            <Typography variant="h3" gutterBottom>
                                {detalle.idJornada}
                            </Typography>
                            </Grid>
                        </Grid>
                        <br></br><br></br>
                        <Grid container spacing='1'> 
                            <Grid item xs={12}> 
                            <Typography variant="h5" gutterBottom>
                                Estado: {detalle.nombreEstado}  ({detalle.siglas})
                            </Typography>
                            </Grid>
                            <Grid item xs={12}> 
                            <Typography variant="h5" gutterBottom>
                                Municipio: {detalle.municipio}
                            </Typography>
                            </Grid>
                            <Grid item xs={12}> 
                            <Typography variant="h5" gutterBottom>
                                Localidad: {detalle.localidad}
                            </Typography>
                            </Grid>
                            <Grid item xs={12}> 
                            <Typography variant="h5" gutterBottom>
                                Fecha: {detalle.fecha}
                            </Typography>
                            </Grid>
                        </Grid>
                    </div>                
                ))}  
            </div>
        )
    }
}
}
