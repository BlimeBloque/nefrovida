import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;

    return (
        <div id="recordatorios">
            <Typography variant="h5"  className={classes.subtitulo}>Recordatorio de 24 Horas</Typography>
            <div className={classes.flexNormal}>
                <Card className={classes.tarjeta}>
                    <CardContent>
                        <Typography variant="body1"><strong>Desayuno</strong></Typography>
                        <Typography variant="body1" className={detalle.recordatorioDesayuno ? classes.normal : classes.faltante}>
                            {detalle.recordatorioDesayuno ? detalle.recordatorioDesayuno : "No registrado"}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.tarjeta}>
                    <CardContent>
                        <Typography variant="body1"><strong>Colación en la mañana</strong></Typography>
                        <Typography variant="body1" className={detalle.recordatorioColacionMañana ? classes.normal : classes.faltante}>
                            {detalle.recordatorioColacionMañana ? detalle.recordatorioColacionMañana : "No registrado"}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.tarjeta}>
                    <CardContent>
                        <Typography variant="body1"><strong>Comida</strong></Typography>
                        <Typography variant="body1" className={detalle.recordatorioComida ? classes.normal : classes.faltante}>
                            {detalle.recordatorioComida ? detalle.recordatorioComida : "No registrado"}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.tarjeta}>
                    <CardContent>
                        <Typography variant="body1"><strong>Colación en la tarde</strong></Typography>
                        <Typography variant="body1" className={detalle.recordatorioColacionTarde ? classes.normal : classes.faltante}>
                            {detalle.recordatorioColacionTarde ? detalle.recordatorioColacionTarde : "No registrado"}
                        </Typography>
                    </CardContent>
                </Card>
                <Card className={classes.tarjeta}>
                    <CardContent>
                        <Typography variant="body1"><strong>Cena</strong></Typography>
                        <Typography variant="body1" className={detalle.recordatorioCena ? classes.normal : classes.faltante}>
                            {detalle.recordatorioCena ? detalle.recordatorioCena : "No registrado"}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}