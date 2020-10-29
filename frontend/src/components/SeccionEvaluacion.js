import { Typography, makeStyles, Paper } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BotonEvaluaciones from './Beneficiarios/Evaluaciones/BotonEvaluaciones';
import TarjetaEvaluaciones from './Beneficiarios/Evaluaciones/TarjetaEvaluaciones';
import AssessmentIcon from '@material-ui/icons/Assessment';


const useStyle = makeStyles(theme => ({
    flex: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    flexContent: {
        marginBottom: theme.spacing(3),
    }, paper: {
        height: 140,
        width: 100,
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const SeccionEvaluacion = (props) => {
    const classes = useStyle();
    const [evaluacionesInicio, setEvaluacionesIncio] = useState();
    const [evaluacionesFin, setEvaluacionesFin] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/evaluacionesInicio/' + props.idBeneficiario)
            .then(res => {
                setEvaluacionesIncio(res.data)
            })
            .catch((e) => {
                console.log(e)
            });

            axios.get('http://localhost:8000/api/evaluacionesFin/' + props.idBeneficiario)
            .then(res => {
                setEvaluacionesFin(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return (
        <div>
            <Grid container justify="center" spacing={4} >
            <div style={{marginBottom: '10px'}}>
                <Typography variant="h6" align="center">
                    <strong>
                        Evaluaciones
                    </strong>
                </Typography>
                <BotonEvaluaciones idBeneficiario={props.idBeneficiario} />
            </div>
                {
                    evaluacionesInicio ?
                    evaluacionesInicio.map((evaluacionInicio) => (
                            <Grid key={evaluacionInicio.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} /*onClick={() => props.history.push("/evaluaciones/" + evaluacionInicio.grupo)}*/>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                Evaluacion de {evaluacionInicio.nombreEvaluacion}
                                </Paper>
                            </Grid>

                        ))

                        :
                        <Typography variant="body">No hay evaluaciones registradas para este beneficiario</Typography>

                }
                {
                    evaluacionesFin ?
                    evaluacionesFin.map((evaluacionFin) => (
                            <Grid key={evaluacionFin.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} /*onClick={() => props.history.push("/evaluaciones/" + evaluacionFin.grupo)}*/>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                Evaluacion de {evaluacionFin.nombreEvaluacion}
                                </Paper>
                            </Grid>

                        ))
                        :
                        <Typography variant="body">No hay evaluaciones registradas para este beneficiario</Typography>
                }
            </Grid>
        </div>
    );
}

export default SeccionEvaluacion;