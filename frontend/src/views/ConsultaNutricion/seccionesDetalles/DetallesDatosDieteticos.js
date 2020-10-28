import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="datosDieteticos">
            <Typography variant="h5"  className={classes.subtitulo}>Datos Dietéticos</Typography>
            <Typography variant="body1" className={detalle.comidasAlDia ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>N• comidas al día: </strong>
                {detalle.comidasAlDia ? detalle.comidasAlDia : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.lugarComida ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>¿Dónde realiza sus comidas? </strong>
                {detalle.lugarComida ? detalle.lugarComida : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.preparaComida ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>¿Quién prepara? </strong>
                {detalle.preparaComida ? detalle.preparaComida : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.comeEntreComidas ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>¿Come entre comidas? </strong>
                {detalle.comeEntreComidas ? detalle.comeEntreComidas : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.alimentosPreferidos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Alimentos Preferidos: </strong>
                {detalle.alimentosPreferidos ? detalle.alimentosPreferidos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.alimentosOdiados ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Alimentos que no le gustan: </strong>
                {detalle.alimentosOdiados ? detalle.alimentosOdiados : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.suplementos ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Consumo de suplementos o complementos alimentarios: </strong>
                {detalle.suplementos ? detalle.suplementos : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.medicamentosActuales ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Medicamentos consumidos actualmente: </strong>
                {detalle.medicamentosActuales ? detalle.medicamentosActuales : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.consumoAguaNatural ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Consumo de agua natural: </strong>
                {detalle.consumoAguaNatural ? detalle.consumoAguaNatural : "No registrado"}
            </Typography>
        </div>
    );
}