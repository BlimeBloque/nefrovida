import React, { Component } from "react";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from "@material-ui/core";
import AgregarBeneficiarioForm from "./AgregarBeneficiarioForm";
import Typography from "@material-ui/core/Typography";
import { Table } from "semantic-ui-react";
import Sidenav from "../components/Sidenav";

import { API } from "../config";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
  },
}));

class DetallesTabla extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detalles: null,
      isLoading: null,
    };
  }

  componentDidMount() {
    this.getDetalles();
  }

  async getDetalles() {
    if (!this.state.detalles) {
      try {
        this.setState({ isLoading: true });
        const response = await fetch(
          API + "/beneficiarios/" + this.props.idBenef,
          {
            headers: {},
          }
        );
        console.log(response);
        const ListDetalles = await response.json();
        this.setState({ detalles: ListDetalles, isLoading: false });
        console.log(typeof this.state);
        console.log(this.state.detalles);
      } catch (err) {
        this.setState({ isLoading: false });
        console.error(err);
      }
    }
  }

  render() {
    console.log(this.state.detalles);
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
                  <td>{this.state.detalles.nombreBeneficiario}</td>
                  <td>{this.state.detalles.edad}</td>
                  <td>{this.state.detalles.idEscolaridad}</td>
                  <td>{this.state.detalles.sexo}</td>
                  <td>{this.state.detalles.enfermedad}</td>
                  <td>{this.state.detalles.telefono}</td>
                  <td>{this.state.detalles.direccion}</td>
                  <td>{this.state.detalles.fechaNacimiento}</td>
                  <td>{this.state.detalles.seguimiento}</td>
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

/*const Detalles = () => {
  const classes = useStyle();
  
  return (
    <div>
      <Sidenav />
      <Container>
        <Paper className={classes.pageContent}>
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

              </tbody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
};*/
