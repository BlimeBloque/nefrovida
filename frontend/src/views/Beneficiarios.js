import React from "react";
import Sidenav from "../components/Sidenav";
import Titulo from "./Titulo";
import { Paper, makeStyles, Container } from '@material-ui/core';
import BuscarBeneficiarios from './BuscarBeneficiarios';


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex"
  }
}))


const Beneficiarios = (props) => {
  const classes = useStyle();
    return (
      <div>
        <Sidenav />        
        <Container>
          <Titulo>Beneficiarios</Titulo>
          <Paper className={classes.pageContent}>
            {/*<AgregarBeneficiarioForm />*/}
            <BuscarBeneficiarios/>
          </Paper>
        </Container>
      </div>
    );

}

export default Beneficiarios;
