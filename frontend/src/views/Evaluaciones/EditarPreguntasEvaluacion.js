import React from 'react';
import Sidenav from "../../components/Nav/Sidenav";

import { Paper, makeStyles, Container } from '@material-ui/core';
import EditarPreguntasEvaluacionForm from './EditarPreguntasEvaluacionForm';

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
function EditarPreguntasEvaluacion(props) {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Sidenav titulo='Editar Preguntas de la Evaluación'/>
            <Container>
                <Paper className={classes.pageContent}>
                    <EditarPreguntasEvaluacionForm />
                </Paper>
            </Container>
        </div>
    )
}

export default EditarPreguntasEvaluacion
