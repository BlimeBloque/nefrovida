import { IconButton, Paper, Tooltip, Typography } from '@material-ui/core';
import React from 'react'
import GetAppIcon from '@material-ui/icons/GetApp';
import http from '../../../http-common';

function download(props){

    http.get('/download/'+props, {"responseType": "blob"})
        .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            const arr = props.split('.');
            console.log(arr);
            link.setAttribute('download', 'plan_de_alimentacion.'+arr[1]); //or any other extension
            document.body.appendChild(link);
            link.click();
        });

}

function ArchivoAdjunto(props) {

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

export default function DetallesPlanAlimentacion (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="datosNutrimentales">
            <Typography variant="h5"  className={classes.subtitulo}>Plan de Alimentación</Typography>
            <ArchivoAdjunto url ={detalle.url_archivo}/>
            <Typography variant="body1" className={detalle.nota ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Nota: </strong>
                <Paper className={classes.nota}>
                    {detalle.nota ? detalle.nota : "No registrado"}
                </Paper>
            </Typography>
        </div>
    );
}