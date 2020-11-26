import { Typography, makeStyles, Paper, Menu, MenuItem } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import http from '../http-common';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BotonEvaluaciones from './Beneficiarios/Evaluaciones/BotonEvaluaciones';
import TarjetaEvaluaciones from './Beneficiarios/Evaluaciones/TarjetaEvaluaciones';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie'


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
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: theme.spacing(4),
        textAlign: "center"
    },
    centerTitle: {
        textAlign: 'center'
    }
    
}));

const SeccionEvaluacion = (props) => {
    const { history, idBeneficiario } = props;
    const classes = useStyle();
    const [evaluacionesInicio, setEvaluacionesIncio] = useState();
    const [evaluacionesFin, setEvaluacionesFin] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [hasEvalInit, setHasEvalInit] = useState(false);
    const [hasEvalFin, setHasEvalFin] = useState(false);

    useEffect(() => {
        http.get('http://localhost:8000/api/evaluacionesInicio/' + props.idBeneficiario)
            .then(res => {
                setEvaluacionesIncio(res.data)
                res.data.length !== 0 && setHasEvalInit(true)
            })
            .catch((e) => {
                console.log(e)
            });

        http.get('http://localhost:8000/api/evaluacionesFin/' + props.idBeneficiario)
        .then(res => {
            setEvaluacionesFin(res.data)
            res.data.length !== 0 && setHasEvalFin(true)
        })
        .catch((e) => {
            console.log(e)
        });
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleEditarPreguntas = () => {
        history.push('/beneficiarios/'+idBeneficiario+'/editarPreguntasEvaluacion')
    }

    return (
        <div>
            {!(Cookies.get("roles").includes('Laboratorio')) ?
            
                <div className={classes.header}>
                    <div className={classes.centerTitle}>
                        <Typography variant="h6">
                            <strong>
                                Evaluaciones
                            </strong>
                        </Typography>
                    </div>
                    <div className={classes.options}>
                        <IconButton aria-label="more" aria-haspopup="true" onClick={handleClick}>
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="editar-preguntas-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleEditarPreguntas}>Editar preguntas</MenuItem>
                        </Menu>
                        
                    </div>
                </div>
            :
            <div className={classes.centerTitle}>
                <Typography variant="h6" align="center">
                    <strong>
                        Evaluaciones
                    </strong>
                </Typography>
            </div>
            }
            <Grid container spacing={2} justify="center" alignItems="baseline" className={classes.grid}>
                {   
                        evaluacionesInicio ?
                        evaluacionesInicio.map((evaluacionInicio) => (
                            <Grid key={evaluacionInicio.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push(props.idBeneficiario + '/detalleEvaluacionesInicio')}>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                    Evaluacion <strong>Inicial</strong>
                                </Paper>
                            </Grid>
                        ))
                        :
                        <></>   
                }
                {
                    evaluacionesFin ?
                    evaluacionesFin.map((evaluacionFin) => (
                            <Grid key={evaluacionFin.idEvaluacionRespuestas} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push(props.idBeneficiario + '/detalleEvaluacionesFin')}>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                Evaluacion <strong>Final</strong>
                                </Paper>
                            </Grid>
                        ))
                        :
                        <Typography variant="body">No hay evaluaciones registradas para este beneficiario.</Typography>

                }
            </Grid> 
            {!(Cookies.get("roles").includes('Social') || Cookies.get("roles").includes("Administrador")) ?
            <></>:<BotonEvaluaciones idBeneficiario={props.idBeneficiario} hasEvalInit={hasEvalInit} hasEvalFin={hasEvalFin}/>
            }
        </div>
    );
}

export default withRouter(SeccionEvaluacion);