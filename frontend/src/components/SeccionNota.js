import { Typography, makeStyles, Paper, Tooltip } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import http from "../http-common";



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

const SeccionNota = (props) => {
    const classes = useStyle();
    const [notas, setNotas] = useState([]);

    useEffect ( () => {
        http.get('/notas/beneficiario/'+props.idBeneficiario)
            .then(res => { setNotas(res.data)
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    console.log(notas);
    return(
        <div>
        {console.log(notas)}
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{margin: "10px 0px 0px 0px"}} variant="h6">
                <strong>Notas de beneficiario</strong>
                </Typography>
                <Tooltip title="Agregar nota" arrow>
                <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarNota")}>
                    <AddIcon/>
                </Fab>
                </Tooltip>
            </div>

                <Grid container justify="center" spacing={4}>
                {
                    notas.length ? 
                    notas.map((nota) => (
                        <Grid key={nota.idNota} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/nota/"+nota.idNota)}>
                                    <AssignmentIcon fontSize="large" />
                                </IconButton>
                                {nota.tituloNota}
                            </Paper>
                        </Grid>
                        
                        ))
                
                    :
                    <Typography variant="body">No hay notas registradas para este beneficiario</Typography>
                
                }
                </Grid>
        </div>
    );
}

export default SeccionNota;