import React, { Component } from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaAgregarForm from "./JornadasAgregarForm";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
    marginTop: "40px",
  },
}));

const JornadasAgregar = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Sidenav titulo="Registrar Jornada" />
      <Container>
        <Paper className={classes.pageContent}>
          <JornadaAgregarForm />
        </Paper>
      </Container>
    </div>
  );
};

export default JornadasAgregar;
