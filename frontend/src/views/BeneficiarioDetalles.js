import React, { Component } from "react";
//import { Route } from "react-router-dom";
import Sidenav from "../components/Sidenav";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from "@material-ui/core";
import AgregarBeneficiarioForm from "./AgregarBeneficiarioForm";
import Typography from "@material-ui/core/Typography";
import Detalles from "./Detalles";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
  },
}));

const BeneficiarioDetalles = ({ match }) => {
  const classes = useStyle();

  return (
    <div>
      <Sidenav />
      <Container>
        <Paper className={classes.pageContent}>
          <Detalles idBenef={match.params.idBeneficiario} />
        </Paper>
      </Container>
    </div>
  );
};

export default BeneficiarioDetalles;
