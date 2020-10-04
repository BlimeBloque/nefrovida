import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";
import AgregarBeneficiario from "./AgregarBeneficiario";



class Beneficiarios extends Component {
  state = {};
  render() {
    return (
      <Container>
            <AgregarBeneficiario/>  
      </Container>
    );
  }
}

export default Beneficiarios;
