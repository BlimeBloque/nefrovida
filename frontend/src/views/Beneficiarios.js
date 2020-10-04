import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from '@material-ui/core';
import AgregarBeneficiarioForm from './AgregarBeneficiarioForm'


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex"
  }
}))


const Beneficiarios = (props) => {
  const classes = useStyle();
    return (
      <div>
        <Sidenav />        
        <Container>
          <Titulo />
          <Paper className={classes.pageContent}>
            <AgregarBeneficiarioForm />
          </Paper>
        </Container>
      </div>
    );

}

export default Beneficiarios;
