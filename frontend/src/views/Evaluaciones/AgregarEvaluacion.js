import React from 'react';
import { Route } from "react-router-dom";
import Sidenav from "../../components/Nav/Sidenav";

import { Paper, makeStyles, Container } from '@material-ui/core';
import AgregarEvaluacionForm from './AgregarEvaluacionForm';

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

const AgregarEvaluacion = (props) => {
    const classes = useStyle();
        return (
            <div className={classes.container}>
                <Sidenav titulo='Agregar Evaluación'/>
                <Container>
                    <Paper className={classes.pageContent}>
                        <AgregarEvaluacionForm />
                    </Paper>
                </Container>
            </div>
        )
}

export default AgregarEvaluacion;

