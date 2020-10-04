import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import Tabla from "./JornadasTabla";
import Agregar from "./JornadasAgregar";
import Sidenav from "../components/Sidenav";

class Jornadas extends Component {
  state = {};
  render() {
    return (
      <Container >
          <Sidenav />
          <Header as="h1">Jornadas</Header>

          <Route exact location="/jornadas" component={Tabla} />
          <Route location="/jornadas/agregar" component={Agregar} />
      </Container>
    );
  }
}

export default Jornadas;