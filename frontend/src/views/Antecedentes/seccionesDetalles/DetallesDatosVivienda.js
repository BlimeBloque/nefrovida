import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosVivienda (props)
{
    const classes = props.classes;
    const detalle = props.detalle;
    console.log(detalle.serviciosBasicos);

    return (
        <div id="datosVivienda">
            <Typography variant="h5"  className={classes.subtitulo}>Vivienda</Typography>
            <Typography variant="body1" className={detalle.casa ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Casa: </strong>
                {detalle.casa ? detalle.casa : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.serviciosBasicos != null ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Servicios Básicos: </strong>
                {detalle.serviciosBasicos !== null ? detalle.serviciosBasicos === 1 ? "Sí" : "No" : "No registrado"}
            </Typography>
        </div>
    );
}