import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="datosNutrimentales">
            <Typography variant="h5"  className={classes.subtitulo}>Datos Nutrimentales</Typography>
            <Typography variant="body1" className={detalle.ocupacion ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Ocupación: </strong>
                {detalle.ocupacion ? detalle.ocupacion : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.horariosComida ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Horarios de comida: </strong>
                {detalle.horariosComida ? detalle.horariosComida : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.cantidadDestinadaAlimentos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Cantidad destinada a alimentos: </strong>
                {detalle.cantidadDestinadaAlimentos ? detalle.cantidadDestinadaAlimentos : "No registrado"}
            </Typography>
        </div>
    );
}