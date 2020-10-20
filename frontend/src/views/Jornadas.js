import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import BuscarJornadas from "./JornadasBuscar";

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

const Beneficiarios = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.container}>
      <Sidenav titulo="Jornadas" />
      <Container>
        <Paper className={classes.pageContent}>
          <BuscarJornadas history={props.history} />
        </Paper>
      </Container>
    </div>
  );
};

export default Beneficiarios;
