import React from "react";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import TamizajeForm from "./TamizajeForm";

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

const TamizajeAgregar = (props) => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <Sidenav titulo="Registrar Tamizaje" />
      <Container>
        <Paper className={classes.pageContent}>
          <TamizajeForm
            history={props.history}
            idBeneficiario={props.match.params.idBeneficiario}
            editar={false}
          />
        </Paper>
      </Container>
    </div>
  );
};

export default TamizajeAgregar;
