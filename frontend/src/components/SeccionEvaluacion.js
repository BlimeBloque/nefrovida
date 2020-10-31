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
    grid: {
        marginTop: "10px",
        marginBottom: "10px",
    }
    
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
            <div>
                <Typography variant="h6" align="center">
                    <strong>
                        Evaluaciones
                    </strong>
                </Typography>
                
            </div>
            <Grid container spacing={2} justify="center" alignItems="baseline" className={classes.grid}>
                {console.log(evaluacionesInicio)}
                {   
                        evaluacionesInicio ?
                        evaluacionesInicio.map((evaluacionInicio) => (
                            <Grid key={evaluacionInicio.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push(props.idBeneficiario + '/detalleEvaluacionesInicio')}>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                    Evaluacion de <strong>{evaluacionInicio.nombreEvaluacion}</strong>
                                </Paper>
                            </Grid>
                        ))
                        :
                        <Typography variant="caption">No hay evaluaciones de inicio de jornada.</Typography>   
                }
                {
                    evaluacionesFin ?
                    evaluacionesFin.map((evaluacionFin) => (
                            <Grid key={evaluacionFin.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push(props.idBeneficiario + '/detalleEvaluacionesFin')}>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                Evaluacion de <strong>{evaluacionFin.nombreEvaluacion}</strong>
                                </Paper>
                            </Grid>
                        ))
                        :
                        <Typography variant="body">No hay evaluaciones registradas para este beneficiario</Typography>

                }
            </Grid> 
            <BotonEvaluaciones idBeneficiario={props.idBeneficiario} />
        </div>
    );
}

export default SeccionEvaluacion;