import React from "react";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import ConsultaMedicaForm from "./ConsultaMedicaForm";

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

const AgregarConsultaMedica = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Sidenav titulo="Registrar Consulta Médica" />
      <Container>
        <Paper className={classes.pageContent}></Paper>
      </Container>
    </div>
  );
};

export default AgregarConsultaMedica;
