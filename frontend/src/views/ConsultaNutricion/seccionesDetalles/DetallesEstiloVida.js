import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="estiloVida">
            <Typography variant="h5"  className={classes.subtitulo}>Estilo de Vida</Typography>
            <Typography variant="body1" className={detalle.actividadFisica ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Actividad física/tipo/frecuencia: </strong>
                {detalle.actividadFisica ? detalle.actividadFisica : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.horasSueño ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Horas de sueño: </strong>
                {detalle.horasSueño ? detalle.horasSueño : "No registrado"}
            </Typography>
        </div>
    );
}