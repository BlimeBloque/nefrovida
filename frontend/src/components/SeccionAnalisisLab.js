import { Typography, makeStyles, Paper, Tooltip } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RestaurantIcon from '@material-ui/icons/Restaurant';


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

const SeccionAnalisisLab = (props) => {
    const classes = useStyle();
    const [analisis, setAnalisis] = useState([]);

    useEffect ( () => {
        axios.get('http://localhost:8000/api/analisisLab/beneficiario/'+props.idBeneficiario)
            .then(res => { setAnalisis(res.data)
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    return(
        <div>
        {console.log(analisis)}
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{margin: "10px 0px 0px 0px"}} variant="h6">
                <strong>Análisis de Laboratorio</strong>
                </Typography>
                <Tooltip title="Agregar Análisis de Laboratorio" arrow>
                <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarAnalisisLab")}>
                    <AddIcon/>
                </Fab>
                </Tooltip>
            </div>

                <Grid container justify="center" spacing={4}>
                {
                    analisis.length ? 
                        <></>                
                    :
                    <Typography variant="body">No hay análisis de laboratorio registrados para este beneficiario</Typography>
                
                }
                </Grid>
        </div>
    );
}

export default SeccionAnalisisLab;