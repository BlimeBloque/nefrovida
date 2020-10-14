import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import Tabla from "./JornadasTabla";
import Sidenav from "../components/Nav/Sidenav";

class Jornadas extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginTop: "40px",
        }}
      >
        <Sidenav />
        <Container>
          <Header as="h1">Jornadas</Header>
          <Route
            exact
            path="/jornadas"
            component={Tabla}
            parentCallback={this.callbackFunction}
          ></Route>
        </Container>
      </div>
    );
  }
}

export default Jornadas;
