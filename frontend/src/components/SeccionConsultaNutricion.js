import { Typography, makeStyles, Paper, Tooltip } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import http from '../http-common';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import Cookies from 'js-cookie';

const useStyle = makeStyles(theme => ({
    flex:{
        display: "flex",
        justifyContent: "space-evenly",
    },
    flexContent:{
        marginBottom: theme.spacing(3),
    },paper: {
        height: 140,
        width: 100,
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const SeccionConsultaNutricion = (props) => {
    const classes = useStyle();
    const [consultas, setConsultas] = useState([]);

    useEffect ( () => {
        http.get('/consultaNutricion/beneficiario/'+props.idBeneficiario)
            .then(res => { setConsultas(res.data)
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    return(
        <div>
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{margin: "10px 0px 0px 0px"}} variant="h6">
                <strong>Consultas de Nutrición</strong>
                </Typography>
                {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Nutriologia") ? 
                    <Tooltip title="Agregar Consulta de Nutrición" arrow>
                    <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarConsultaNutricion")}>
                        <AddIcon/>
                    </Fab>
                    </Tooltip> 
                :
                    <></>
                }
            </div>

                <Grid container justify="center" spacing={4}>
                {
                    consultas.length ? 
                        consultas.map((consulta) => (
                        <Grid key={consulta.idConsultaNutricional} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/consultaNutricion/"+consulta.idConsultaNutricional)}>
                                    <RestaurantIcon fontSize="large" />
                                </IconButton>
                                Consulta del: {(new Date(consulta.created_at)).getDate()+"/"+((new Date(consulta.created_at)).getMonth()+1)
                                                +"/"+(new Date(consulta.created_at)).getFullYear()}
                            </Paper>
                        </Grid>
                        
                        ))
                
                    :
                    <Typography variant="body">No hay consultas de nutrición registradas para este beneficiario</Typography>
                
                }
                </Grid>
        </div>
    );
}

export default SeccionConsultaNutricion;