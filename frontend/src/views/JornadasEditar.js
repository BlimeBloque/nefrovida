import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaEditarForm from "./JornadasEditarForm";

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
  //console.log(props);
  return (
    <div className={classes.container}>
      <Sidenav titulo="Registrar Beneficiario" />
      <Container>
        <Paper className={classes.pageContent}>
          <JornadaEditarForm idJornada={props.match.params.idJornada} />
        </Paper>
      </Container>
    </div>
  );
};

export default JornadasAgregar;
