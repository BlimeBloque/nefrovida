import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="necesidades">
            <Typography variant="h5"  className={classes.subtitulo}>Necesidades Energéticas y Nutrimentales</Typography>
            <Typography variant="body1" className={detalle.tipoDieta ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Tipo de dieta: </strong>
                {detalle.tipoDieta ? detalle.tipoDieta : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.kilocaloriasTotales ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Kilocalorías totales: </strong>
                {detalle.kilocaloriasTotales ? detalle.kilocaloriasTotales : "No registrado"}
            </Typography>
            <TableContainer component={Paper} className={classes.table}>
                <Table size="small" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Nutrimento</TableCell>
                            <TableCell align="center">Porcentaje</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell align="center"><strong>HC</strong></TableCell>
                            <TableCell align="center" className={detalle.porcentajeHidratosCarbono ? classes.normal : classes.faltante}>
                                {detalle.porcentajeHidratosCarbono ? detalle.porcentajeHidratosCarbono : "No registrado"}
                            </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center"><strong>LS</strong></TableCell>
                            <TableCell align="center" className={detalle.porcentajeGrasas ? classes.normal : classes.faltante}>
                                {detalle.porcentajeGrasas ? detalle.porcentajeGrasas : "No registrado"}
                            </TableCell>
                        </TableRow>
                        <TableRow hover>
                            <TableCell align="center"><strong>PS</strong></TableCell>
                            <TableCell align="center" className={detalle.porcentajeProteinas ? classes.normal : classes.faltante}>
                                {detalle.porcentajeProteinas ? detalle.porcentajeProteinas : "No registrado"}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}