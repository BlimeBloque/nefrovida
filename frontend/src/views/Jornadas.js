import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import Tabla from "./JornadasTabla";
import Agregar from "./JornadasAgregar";

class Jornadas extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header as="h1">Jornadas</Header>

        <Route exact location="/jornadas" component={Tabla} />
        <Route location="/jornadas/agregar" component={Agregar} />
        
      </Container>
    );
  }
}

export default Jornadas;
