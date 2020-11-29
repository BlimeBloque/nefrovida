import { Typography, makeStyles, Paper } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import http from "../http-common";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import HistoryIcon from '@material-ui/icons/History';
import Cookies from 'js-cookie';

import http from '../http-common'

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

const SeccionAntecedentes = (props) => {
    const classes = useStyle();
    const [antecedentes, setAntecedentes] = useState([]);

    useEffect(() => {
        http.get('/antecedentes/beneficiario/' + props.idBeneficiario)
            .then(res => {
                setAntecedentes(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return (
        <div>
            {console.log(antecedentes)}
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{ margin: "10px 0px 0px 0px" }} variant="h6">
                    <strong>Antecedentes</strong>
                </Typography>
                {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Medico") ? 
                    <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/" + props.idBeneficiario + "/agregarAntecedentes")}>
                        <AddIcon />
                    </Fab>
                    :
                    <></>
                }
            </div>

            <Grid container justify="center" spacing={4}>
                {
                    antecedentes.length ?
                        antecedentes.map((ante) => (
                            <Grid key={ante.idAntecedentes} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/antecedentes/" + ante.idAntecedentes)}>
                                        <HistoryIcon fontSize="large" />
                                    </IconButton>
                                Actualización: {ante.created_at}
                                </Paper>
                            </Grid>

                        ))

                        :
                        <Typography variant="body">No hay antecedentes registrados para este beneficiario</Typography>

                }
            </Grid>
        </div>
    );
}

export default SeccionAntecedentes;