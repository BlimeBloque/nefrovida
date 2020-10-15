import React, { Component, useState } from "react";
import { Container } from "@material-ui/core";
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



import { API } from "../config";

function IsActive(props) {
  const activeState = props.activeState;
  if (activeState == 1) {
    return <Alert severity="success">Este usuario está activo</Alert>;
  }
  return <Alert severity="error">Este usuario está inactivo</Alert>;
}

function EscolaridadNombre(props) {
  const escolaridadNom = props.escolaridadNom;
  if (escolaridadNom == 1) {
    return <td>Profesional</td>;
  } else if (escolaridadNom == 2) {
    return <td>Medio Superior</td>;
  } else if (escolaridadNom == 3) {
    return <td>Secundaria</td>;
  } else if (escolaridadNom == 4) {
    return <td>Primaria</td>;
  } else if (escolaridadNom == 5) {
    return <td>Lee/Escribe</td>;
  }
  return <td>Analfabeta</td>;
}

function DeSeguimiento(props) {
  const seg = props.seg;
  if (seg == 1) {
    return <td>Sí</td>;
  }
  return <td>No</td>;
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
      edad:'',
      sexo:'',
      direccion:'',
      telefono: '',
      fecha:'',
      seguimiento:'',
      activo:''
    };
  }
 
  handleDialogOpen = () => {
    this.setState({open: true});
  }

  handleDialogClose = () => {
    this.setState({open: false});
  }

  handleDialogDischarge = (e) => {

    this.state.detalles.map((detalle) => (
      this.state.idBeneficiario = detalle.idBeneficiario,
      this.state.nombre = detalle.nombreBeneficiario,
      this.state.edad = detalle.edad,
      this.state.idEscolaridad = detalle.idEscolaridad,
      this.state.sexo = detalle.sexo,
      this.state.direccion = detalle.direccion,
      this.state.fecha = detalle.fechaNacimiento,
      this.state.seguimiento = detalle.seguimiento,
      this.state.telefono = detalle.telefono
    ))

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
            edad: this.state.edad,
            idEscolaridad: this.state.idEscolaridad,
            sexo: this.state.sexo, 
            telefono: this.state.telefono,
            direccion: this.state.direccion,
            seguimiento:  this.state.seguimiento,
            activo: 0,
            fechaNacimiento:  this.state.fecha,
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
        this.setState({ detalles: detalles.data });
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
      {this.state.detalles.map((detalle) => (
        <IsActive key={detalle.idBeneficiario} activeState={detalle.activo} />
      ))}

      <Table textAlign="center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Escolaridad</th>
            <th>Sexo</th>
            <th>Enfermedad</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Fecha de Nacimiento</th>
            <th>De Seguimiento</th>
          </tr>
        </thead>
        <tbody>
          {this.state.detalles.map((detalle) => (
            <tr key={detalle.idBeneficiario}>
              <td>{detalle.nombreBeneficiario}</td>
              <td>{detalle.edad}</td>
              <EscolaridadNombre escolaridadNom={detalle.idEscolaridad} />
              <td>{detalle.sexo}</td>
              <td>{detalle.enfermedad}</td>
              <td>{detalle.telefono}</td>
              <td>{detalle.direccion}</td>
              <td>{detalle.fechaNacimiento}</td>
              <DeSeguimiento seg={detalle.seguimiento} />
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br><br></br><br></br>
        <Grid container justify="flex-end" spacing="2">
          <Grid justify="flex-end" item xs={2}>          
            <Link variant="body2" to="/beneficiarios">
            <IconButton color="primary" aria-label="edit">
                  Regresar
              </IconButton>
              </Link>
          </Grid>
          <Grid justify="flex-end" item xs={2}> 
            <Fab color="secondary" onClick={this.handleDialogOpen}>
              <RemoveCircleOutlineIcon />
            </Fab>
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
        </Grid>
        </Grid>
      </Container>
    );
  }
}

export default DetallesTabla;
