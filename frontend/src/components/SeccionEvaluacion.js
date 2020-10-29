import { Typography, makeStyles, Paper } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BotonEvaluaciones from './Beneficiarios/Evaluaciones/BotonEvaluaciones';
import TarjetaEvaluaciones from './Beneficiarios/Evaluaciones/TarjetaEvaluaciones';


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
    const [evaluaciones, setEvaluaciones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/evaluaciones/beneficiario/' + props.idBeneficiario)
            .then(res => {
                setEvaluaciones(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return (
        <div>
            {console.log(evaluaciones)}
            


            <Grid container justify="center" spacing={4}>
            <div>
                <Typography variant="h6" align="center">
                    <strong>
                        Evaluaciones
                    </strong>
                </Typography>
                <BotonEvaluaciones idBeneficiario={props.idBeneficiario} />
            </div>
                {
                    evaluaciones.length ?
                        evaluaciones.map((evaluacion) => (
                            <Grid key={evaluacion.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/evaluaciones/" + evaluacion.idEvaluacionRespuestas)}>
                                        <LocalHospitalIcon fontSize="large" />
                                    </IconButton>
                                Evaluacion del: {evaluacion.created_at}
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