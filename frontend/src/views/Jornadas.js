import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import Tabla from "./JornadasTabla";
import Agregar from "./JornadasAgregar";
import Editar from "./JornadaEditar";
import Sidenav from "../components/Sidenav";

class Jornadas extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <Container>
          <Header as="h1">Jornadas</Header>
          <Route
            exact
            path="/jornadas"
            component={Tabla}
            parentCallback={this.callbackFunction}
            ></Route>
          <Route path="/jornadas/agregar" component={Agregar}></Route>
          <Route path="/jornadas/editar/" component={Editar}></Route>
        </Container>
      </div>
    );
  }
}

export default Jornadas;
