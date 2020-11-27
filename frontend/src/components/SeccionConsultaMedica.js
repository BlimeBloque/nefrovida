import { Typography, makeStyles, Paper } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import http from "../http-common";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


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

const SeccionConsultaMedica = (props) => {
    const classes = useStyle();
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        http.get('consultaMedica/beneficiario/' + props.idBeneficiario)
            .then(res => {
                setConsultas(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return (
        <div>
            {console.log(consultas)}
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{ margin: "10px 0px 0px 0px" }} variant="h6">
                    <strong>Consultas Médicas</strong>
                </Typography>
                <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/" + props.idBeneficiario + "/agregarConsultaMedica")}>
                    <AddIcon />
                </Fab>
            </div>

            <Grid container justify="center" spacing={4}>
                {
                    consultas.length ?
                        consultas.map((consulta) => (
                            <Grid key={consulta.idConsultaMedica} item>
                                <Paper className={classes.paper}>
                                    <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/consultaMedica/" + consulta.idConsultaMedica)}>
                                        <LocalHospitalIcon fontSize="large" />
                                    </IconButton>
                                Consulta del: {consulta.created_at}
                                </Paper>
                            </Grid>

                        ))

                        :
                        <Typography variant="body">No hay consultas médicas registradas para este beneficiario</Typography>

                }
            </Grid>
        </div>
    );
}

export default SeccionConsultaMedica;