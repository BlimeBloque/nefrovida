import React from 'react';
import Sidenav from "../../components/Nav/Sidenav";
import AgregarFactorForm from './AgregarFactorForm';

import { Paper, makeStyles, Container } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    container: {
      display: "flex",
      marginTop: "40px"
    },
    largeIcon: {
        fontSize: '3em'
      },
  }))

const AgregarFactor = (props) => {
    const classes = useStyle();
        return (
            <div className={classes.container}>
                <Sidenav titulo='Agregar Factor de Riesgo'/>
                <Container>
                    <Paper className={classes.pageContent}>
                        <AgregarFactorForm idFormulario={props.idFact}/>
                    </Paper>
                </Container>
            </div>
        )
}

export default AgregarFactor;