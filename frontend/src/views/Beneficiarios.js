import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";

import AgregarBeneficiario from "./BeneficiariosAgregar"
import AgregarBeneficiariosForma from "./AgregarBeneficiariosForma"


class Beneficiarios extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Header as="h1">Beneficiarios</Header>

        <Link to="/beneficiarios/agregar">Agregar Beneficiario</Link>
        <Route location="/beneficiarios/agregar" component={AgregarBeneficiariosForma} />
    
      </Container>
    );
  }
}

export default Beneficiarios;
