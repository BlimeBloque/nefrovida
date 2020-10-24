import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import EditarBeneficiarioForm from './EditarBeneficiarioForm'


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
        <Sidenav titulo="Editar Beneficiario" />        
        <Container>
          <Paper className={classes.pageContent}>
            <EditarBeneficiarioForm idBenef={props.match.params.idBeneficiario} />
          </Paper>
        </Container>
      </div>
    );

}

export default AgregarBeneficiario;
