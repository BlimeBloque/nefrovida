import React from 'react';
import Sidenav from "../../components/Nav/Sidenav";
import AgregarEvaluacionForm from './AgregarEvaluacionForm';

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

