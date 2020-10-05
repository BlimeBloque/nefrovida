import React from "react";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from '@material-ui/core';
import AgregarBeneficiarioForm from './AgregarBeneficiarioForm';
import Sidenav from "../components/Nav/Sidenav";

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


const Beneficiarios = (props) => {
  const classes = useStyle();
    return (
      <div className={classes.container}>
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
