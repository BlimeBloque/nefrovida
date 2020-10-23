import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaDetalleEspecifico from "./JornadaDetalleEspecifico";

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

const JornadaDetalles = ({ match }) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Sidenav titulo="Detalle de Jornada" />
      <Container>
        <Paper className={classes.pageContent}>
          <JornadaDetalleEspecifico idJornada={match.params.idJornada} />
        </Paper>
      </Container>
    </div>
  );
};

export default JornadaDetalles;
