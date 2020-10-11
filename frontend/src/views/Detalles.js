import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Table } from "semantic-ui-react";
import axios from "axios";

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
    };
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
    const detalles = this.state;
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
      </Container>
    );
  }
}

export default DetallesTabla;
