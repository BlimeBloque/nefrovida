import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="datosClinicos">
            <Typography variant="h5"  className={classes.subtitulo}>Datos Clínicos</Typography>
            <div className={classes.flexNormal}>
                <div>
                    <Typography variant="body1" className={detalle.apetito ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Apetito: </strong>
                        {detalle.apetito ? detalle.apetito : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.distension ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Distensión: </strong>
                        {detalle.distension ? detalle.distension : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.estreñimiento ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Estreñimiento: </strong>
                        {detalle.estreñimiento ? detalle.estreñimiento : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.flatulencias ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Flatulencias: </strong>
                        {detalle.flatulencias ? detalle.flatulencias : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.vomitos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Vómitos: </strong>
                        {detalle.vomitos ? detalle.vomitos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.caries ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Caries: </strong>
                        {detalle.caries ? detalle.caries : "No registrado"}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body1" className={detalle.edema ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Edema: </strong>
                        {detalle.edema ? detalle.edema : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.mareo ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Mareo: </strong>
                        {detalle.mareo ? detalle.mareo : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.zumbido ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Zumbido en oídos: </strong>
                        {detalle.zumbido ? detalle.zumbido : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.cefaleas ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Cefaleas: </strong>
                        {detalle.cefaleas ? detalle.cefaleas : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.disnea ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Disnea: </strong>
                        {detalle.disnea ? detalle.disnea : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.poliuria ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Poliuria: </strong>
                        {detalle.poliuria ? detalle.poliuria : "No registrado"}
                    </Typography>
                </div>
            </div>
        </div>
    );
}