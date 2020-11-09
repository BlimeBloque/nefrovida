import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesAntecedentesGinecoObstetricos (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="antecedentesGinecoObstetricos">
            <Typography variant="h5"  className={classes.subtitulo}>Antecedentes Gineco-obstétricos</Typography>
            <Typography variant="body1" className={detalle.menarquia ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Menarquia: </strong>
                {detalle.menarquia ? detalle.menarquia : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.ritmo ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Ritmo: </strong>
                {detalle.ritmo ? detalle.ritmo : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.fum ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>F.U.M: </strong>
                {detalle.fum ? detalle.fum : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.gestaciones ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Gestaciones: </strong>
                {detalle.gestaciones ? detalle.gestaciones : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.partos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Partos: </strong>
                {detalle.partos ? detalle.partos : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.abortos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Abortos: </strong>
                {detalle.abortos ? detalle.abortos : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.cesareas ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Cesáreas: </strong>
                {detalle.cesareas ? detalle.cesareas : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.ivsa ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>I.V.S.A: </strong>
                {detalle.ivsa ? detalle.ivsa : "No registrado/No aplica"}
            </Typography>
            <Typography variant="body1" className={detalle.metodosAnticonceptivos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Métodos Anticonceptivos: </strong>
                {detalle.metodosAnticonceptivos ? detalle.metodosAnticonceptivos : "No registrado/No aplica"}
            </Typography>
        </div>
    );
}