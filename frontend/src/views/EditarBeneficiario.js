import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import EditarBeneficiarioForm from './EditarBeneficiarioForm'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";

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


const AgregarBeneficiario = (props) => {
  const classes = useStyle();
    return (
      <div className={classes.container}>
        <Sidenav titulo="Editar Beneficiario" />        
        <Container>
          <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+props.match.params.idBeneficiario}>
              <IconButton color="primary" aria-label="edit">
                  <ArrowBackIcon/>
              </IconButton>
            </Link>
            <EditarBeneficiarioForm history={props.history} idBenef={props.match.params.idBeneficiario} />
          </Paper>
        </Container>
      </div>
    );

}

export default AgregarBeneficiario;
