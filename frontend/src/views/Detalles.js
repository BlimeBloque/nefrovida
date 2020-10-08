import React, { Component } from "react";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from "@material-ui/core";
import AgregarBeneficiarioForm from "./AgregarBeneficiarioForm";
import Typography from "@material-ui/core/Typography";
import { Table } from "semantic-ui-react";
import Sidenav from "../components/Sidenav";
import BeneficiariosDataService from "../services/beneficiarios.service";

import { API } from "../config";

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
    BeneficiariosDataService.axios.get(
      API + "/beneficiarios/" + this.props.idBenef
    );
  }

  render() {
    const detalles = this.state;
    return (
      <div>
        <Sidenav />
        <Container>
          <Paper>
            <Table>
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
                {/*<tr>
                  <td>{detalles.nombreBeneficiario}</td>
                  <td>{detalles.edad}</td>
                  <td>{detalles.idEscolaridad}</td>
                  <td>{detalles.sexo}</td>
                  <td>{detalles.enfermedad}</td>
                  <td>{detalles.telefono}</td>
                  <td>{detalles.direccion}</td>
                  <td>{detalles.fechaNacimiento}</td>
                  <td>{detalles.seguimiento}</td>
                </tr>*/}
              </tbody>
            </Table>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default DetallesTabla;
