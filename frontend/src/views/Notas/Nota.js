import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow} from '@material-ui/core';
import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios'

const useStyle = makeStyles(theme => ({
    flexTitulo:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: theme.spacing(4),
    },
    flexNormal:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
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
    normal: {
        fontStyle: "normal",
        margin: theme.spacing(1),
    },
    faltante: {
        fontStyle: "italic",
        margin: theme.spacing(1),
    },
    subtitulo: {
        margin: theme.spacing(2),
        fontWeight: "bold",
        textDecoration: "underline"
    },
    tarjeta: {
        minWidth: "25%",
        margin: theme.spacing(2),
    },
    imcSobreBajo: {
        color: "black",
        backgroundColor: "yellow",
    },
    imcNormal: {
        color: "white",
        backgroundColor: "green",
    },
    imcObesidad: {
        color: "white",
        backgroundColor: "red",
    },
    table: {
        width: "50%",
    }

}));


function download(props){

const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

const url = ''

}

function ArchivoAdjunto(props) {

    const classes = useStyle();

    if(props.url === null){
        return (<div></div>)
    } else {
        return (
            <div>
                 <Tooltip title="Descargar archivo adjunto" arrow>
                    <IconButton aria-label="Eliminar" color="primary"  onClick={() => download(props.url)}>
                        <GetAppIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </div>
            
        )
    }
}


export default function Nota(props) {

    

    const detalle = props.detalle;
    const classes = useStyle();
    console.log(detalle);

    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    return (
        <div>
            <div id="header" className={classes.flexTitulo} >
                <Typography variant="h5">{fecha}</Typography>
                    <div id="botones">
                        <Tooltip title="Editar" arrow>
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/nota/editar/"+detalle.idNota)}>
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" arrow>
                            <IconButton aria-label="Eliminar" color="secondary"  onClick={() => props.history.push("/nota/eliminar/"+detalle.idNota)}>
                                <RemoveCircleIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </div>
            </div>
            <Typography align="center" variant="h4">{detalle.nombre} para {detalle.nombreBeneficiario}</Typography>
            <div id="contenido">
                <br></br><br></br>
                <Typography variant="h6" className={classes.subtitulo}>Comentario: </Typography>
                <Typography className= {classes.normal}> {detalle.comentario} </Typography>
                <br></br><br></br>
                <ArchivoAdjunto url ={detalle.url_archivo}/>
            </div>
        </div>
       
    )
}
