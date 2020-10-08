import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import AgregarBeneficiarioForm from './AgregarBeneficiarioForm'


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex",
    marginTop: "40px"
  }
}))


const AgregarBeneficiario = (props) => {
  const classes = useStyle();
    return (
      <div className={classes.container}>
        <Sidenav titulo="Registrar Beneficiario" />        
        <Container>
          <Paper className={classes.pageContent}>
            <AgregarBeneficiarioForm />
          </Paper>
        </Container>
      </div>
    );

}

export default AgregarBeneficiario;
