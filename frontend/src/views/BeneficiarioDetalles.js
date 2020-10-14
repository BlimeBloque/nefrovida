import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from "@material-ui/core";
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
          <Titulo>Detalles de Beneficiario</Titulo>
          <Detalles idBenef={match.params.idBeneficiario} />
          
        </Paper>
      </Container>
    </div>
  );
};

export default BeneficiarioDetalles;
