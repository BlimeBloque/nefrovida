import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import BuscarBeneficiarios from './BuscarBeneficiarios';



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
        <Sidenav titulo="Beneficiarios" />    
        <Container>
          <Paper className={classes.pageContent}>
            {/*<AgregarBeneficiarioForm />*/}
            
            <BuscarBeneficiarios/>
          </Paper>
        </Container>
      </div>
    );

}

export default Beneficiarios;
