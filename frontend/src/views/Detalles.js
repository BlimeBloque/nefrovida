import React, { Component, useState } from "react";
import { Container, Tooltip } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Table } from "semantic-ui-react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { Grid, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {getAge} from '../components/utils';


import { API } from "../config";
import TarjetaEvaluaciones from "../components/Beneficiarios/Evaluaciones/TarjetaEvaluaciones";

function IsActive(props) {
  const activeState = props.activeState;
  if (activeState === 1) {
    return <Alert severity="success">Este usuario está activo</Alert>;
  }
  return <Alert severity="error">Este usuario está inactivo</Alert>;
}

function EscolaridadNombre(props) {
  const escolaridadNom = props.escolaridadNom;
  if (escolaridadNom === 1) {
    return <td>Escolaridad: Primaria</td>;
  } else if (escolaridadNom === 2) {
    return <td>Escolaridad: Medio Superior</td>;
  } else if (escolaridadNom === 3) {
    return <td>Escolaridad: Secundaria</td>;
  } else if (escolaridadNom === 4) {
    return <td>Escolaridad: Universidad</td>;
  } else if (escolaridadNom === 5) {
    return <td>Escolaridad: Lee/Escribe</td>;
  }
  return <td>Escolaridad: Analfabeta</td>;
}

function DeSeguimiento(props) {
  const seg = props.seg;
  if (seg === 1) {
    return <td> De Seguimiento: Sí</td>;
  }
  return <td> De Seguimiento: No</td>;
}

function GetSexo(props){
  if(props.sexo === 'H'){
    return <td>Sexo: Hombre</td>
  } else {
    return <td>Sexo: Mujer</td>
  }
}

class DetallesTabla extends Component {
  constructor(props) {
    super(props);

    this.getDetalles = this.getDetalles.bind(this);

    this.state = {
      detalles: [],
      history: props.history,
      open: false,
      idBeneficiario: '',
      idEscolaridad:'',
      nombre: '',
      sexo:'',
      direccion:'',
      telefono: '',
      fecha:'',
      seguimiento:'',
      activo:'',
      idJornada: '',
    };
  }
 
  handleDialogOpen = () => {
    this.setState({open: true});
  }

  handleDialogClose = () => {
    this.setState({open: false});
  }

  handleDialogDischarge = (e) => {

    console.log(this.state.detalles[0]);

    this.state.detalles.map((detalle) => (
      this.state.idBeneficiario = detalle.idBeneficiario,
      this.state.nombre = detalle.nombreBeneficiario,
      this.state.idEscolaridad = detalle.idEscolaridad,
      this.state.sexo = detalle.sexo,
      this.state.direccion = detalle.direccion,
      this.state.fecha = detalle.fechaNacimiento,
      this.state.seguimiento = detalle.seguimiento,
      this.state.telefono = detalle.telefono,
      this.state.idJornada = detalle.idJornada
    ))

    console.log(this.state.detalles);

    e.preventDefault();
    try {

      let activoVal = 0;
      let result = fetch(
        "http://localhost:8000/api/beneficiarios/" + this.state.idBeneficiario ,
        {
          method: "PUT",
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            "Access-Control-Allow-Credentials": "true",
            'Accept': "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            nombreBeneficiario: this.state.nombre,
            idEscolaridad: this.state.idEscolaridad,
            sexo: this.state.sexo, 
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            seguimiento:  this.state.seguimiento,
            activo: 0,
            fechaNacimiento:  this.state.fecha,
            idJornada: this.state.idJornada,
          }),
        }
      );
      this.setState({open: false});
      window.alert("Se dio de baja correctamente al beneficiario");
    } catch (e) {
      console.log(e);
    }
  }
   
  componentDidMount() {
    this.getDetalles();
  }

  getDetalles() {
    axios
      .get(API + "/beneficiarios/" + this.props.idBenef)
      .then((detalles) => {
        this.setState({ detalles: detalles.data});
      })
      .catch((e) => {
        console.log(e);
      });

      
  }



  render() {

    const {detalles, history} = this.state;
    
    console.log(detalles);
    return (
      <Container>

  { this.state.detalles.map ((detalle) => (
    <div>
        <Link variant="body2" to="/beneficiarios">
              <IconButton color="primary" aria-label="edit">
                  <ArrowBackIcon/>
              </IconButton>
              </Link>
        <Grid container spacing='3' justify="space-between">
            <Grid item xs={6}> 
            <Typography variant="h3" gutterBottom>
                {detalle.nombreBeneficiario}
            </Typography>
            </Grid>
            <br/><br/><br/><br/><br/><br/>
            <Grid item xs={1}>
            <Typography variant="h3" gutterBottom>
                {detalle.idBeneficiario}
            </Typography>
            </Grid>
        </Grid>
        <Grid container spacing='1'> 
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
                Jornada: {detalle.idJornada}
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" gutterBottom>
                Fecha de Nacimiento: {detalle.fechaNacimiento}
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
               <GetSexo sexo={detalle.sexo} />
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
                Telefono: {detalle.telefono}
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
                Direccion: {detalle.direccion}
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
                <EscolaridadNombre escolaridadNom= {detalle.idEscolaridad} />
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <Typography variant="subtitle1" >
               <DeSeguimiento seg = {detalle.seguimiento} />
            </Typography>
            </Grid>
            <Grid item xs={12}> 
            <IsActive key={detalle.idBeneficiario} activeState={detalle.activo} />
            </Grid>
          </Grid>
          </div>
           ))}  
        <Grid container justify="flex-end" spacing="2">
          <Grid justify="flex-end" item xs={2} spacing="2"> 
          <Tooltip title="Dar de baja beneficiario" arrow>
              <IconButton  color="secondary" onClick={this.handleDialogOpen}>
                <RemoveCircleOutlineIcon fontSize="large"/>
              </IconButton >
            </Tooltip>
            {this.state.detalles.map((detalle) => (
            <Dialog
              open={this.state.open}
              keepMounted
              onClose={this.handleDialogClose}
            >
              <DialogTitle>¿Seguro que quieres dar de baja a este beneficiario?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Esta accion solo cambiará el estatus del beneficiario. No se borrara su registro de la base de datos
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleDialogClose} color="primary">
                  No
                </Button>
                <Button onClick={this.handleDialogDischarge} color="primary">
                  Si
                </Button>
              </DialogActions>
            </Dialog>
            ))}
              {this.state.detalles.map((detalle) => (
            <a href={"/beneficiarios/" + detalle.idBeneficiario + "/editar"}>
              <Tooltip title="Editar beneficiario" arrow>
                  <IconButton  color="primary" >
                  <EditIcon fontSize="large"/>
                </IconButton >
              </Tooltip>
            </a>
            ))}
        </Grid>
        </Grid>
      </Container>
    );
  }
}

export default DetallesTabla;
