import { Typography, makeStyles, Paper, Menu, MenuItem } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import http from "../http-common";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import BotonFactores from './Beneficiarios/Factores/BotonFactores';
import TarjetaFactor from './Beneficiarios/Evaluaciones/TarjetaEvaluaciones';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';



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

const SeccionFactor = (props) => {
    const { history, idBeneficiario } = props;
    const classes = useStyle();
    const [factorRiesgo, setFactorRiesgo] = useState();
    const [anchorEl, setAnchorEl] = useState(null);
    const [hasFact, setHasFact] = useState(false);

    useEffect(() => {
        http.get('formulario/' + props.idBeneficiario)
            .then(res => {
                setFactorRiesgo(res.data)
                res.data.length !== 0 && setHasFact(true)
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

    return (
        <div>
            <div className={classes.header}>
                <div />
                <div className={classes.centerTitle}>
                    <Typography variant="h6" align="center">
                        <strong>
                            Factores de Riesgo
                        </strong>
                    </Typography>
                </div>
                <div>
                    <IconButton aria-label="more" aria-haspopup="true" onClick={handleClick}>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                
            </div>
            <Grid container spacing={2} justify="center" alignItems="baseline" className={classes.grid}>
                {console.log(factorRiesgo)}
                {   
                        factorRiesgo ?
                        factorRiesgo.map((factorRiesgo) => (
                            <Grid key={factorRiesgo.idRespuesta} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push(props.idBeneficiario + '/detalleFactor')}>
                                        <AssessmentIcon fontSize="large" />
                                    </IconButton>
                                    <strong>Factor de Riesgo</strong>
                                </Paper>
                            </Grid>
                        ))
                        :
                        <Typography variant="caption">No hay factores de riesgo.</Typography>   
                }
            </Grid> 
            {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Social") ?
                <BotonFactores idBeneficiario={props.idBeneficiario} hasFact={hasFact} />
                :
                <></>
            }
        </div>
    );
}

export default withRouter(SeccionFactor);