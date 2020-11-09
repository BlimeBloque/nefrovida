import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesAntecedentesPersonales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="antecedentesPersonales">
            <Typography variant="h5"  className={classes.subtitulo}>Antecedentes Personales</Typography>
            <Typography variant="body1" className={detalle.personalesPatologicos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Patológicos: </strong>
                {detalle.personalesPatologicos ? detalle.personalesPatologicos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.personalesNoPatologicos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>No Patológicos: </strong>
                {detalle.personalesNoPatologicos ? detalle.personalesNoPatologicos : "No registrado"}
            </Typography>
        </div>
    );
}