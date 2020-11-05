import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesAntecedentesFamiliares (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="antecedentesFamiliares">
            <Typography variant="h5"  className={classes.subtitulo}>Antecedentes Familiares</Typography>
            <Typography variant="body1" className={detalle.padreVivo ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Padre Vivo: </strong>
                {detalle.padreVivo ? (detalle.padreVivo === 1 ? "Sí" : "No") : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.enfermedadesPadre ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Enfermedades del Padre: </strong>
                {detalle.enfermedadesPadre ? detalle.enfermedadesPadre : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.madreVivo ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Madre Viva: </strong>
                {detalle.madreVivo ? (detalle.madreVivo === 1 ? "Sí" : "No") : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.enfermedadesMadre ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Enfermedades de la Madre: </strong>
                {detalle.enfermedadesMadre ? detalle.enfermedadesMadre : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.numHermanos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Número de Hermanos: </strong>
                {detalle.numHermanos ? detalle.numHermanos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.numHermanosVivos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Número de Hermanos Vivos: </strong>
                {detalle.numHermanosVivos ? detalle.numHermanosVivos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.enfermedadesHermanos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Enfermedades de los Hermanos: </strong>
                {detalle.enfermedadesHermanos ? detalle.enfermedadesHermanos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.otrosHermanos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Otros: </strong>
                {detalle.otrosHermanos ? detalle.otrosHermanos : "No registrado"}
            </Typography>
        </div>
    );
}