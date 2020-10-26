import { Typography } from '@material-ui/core';
import React from 'react'

export default function DetallesDatosNutrimentales (props)
{
    const classes = props.classes;
    const detalle = props.detalle;
    const edad = props.edad;
    const pesoIdeal = props.pesoIdeal;
    const imc = props.imc;
    const diagnosticoIMC = props.diagnosticoIMC;

    return (
        <div id="datosAntropometricos">
                <Typography variant="h6"  className={classes.subtitulo}>Datos Antropométricos</Typography>
                <Typography variant="body1" className={detalle.diagnostico ? classes.normal : classes.faltante}>
                    <strong className={classes.normal}>DX: </strong>
                    {detalle.diagnostico ? detalle.diagnostico : "No registrado"}
                </Typography>
                <div className={classes.flexNormal}>
                    <Typography variant="body1" style={{marginLeft: "5%", marginRight: "5%"}} className={edad ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Edad: </strong>
                        {edad ? edad : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.peso ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Peso (kg): </strong>
                        {detalle.peso ? detalle.peso : "No registrado"}
                    </Typography>  
                    <Typography variant="body1" className={detalle.altura ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Estatura (cm): </strong>
                        {detalle.altura ? detalle.altura : "No registrado"}
                    </Typography>   
                </div>
                <div className={classes.flexNormal}>
                    
                    <Typography variant="body1" className={pesoIdeal ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>PI: </strong>
                        {pesoIdeal ? pesoIdeal : "Faltan datos por registrar"}
                    </Typography>  
                    <Typography variant="body1" className={imc ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>IMC: </strong>
                        {imc ? imc : "Faltan datos por registrar"}
                    </Typography>
                    <Typography variant="body1"  className={diagnosticoIMC ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>DX IMC: </strong>
                        <strong className={diagnosticoIMC == "NORMAL" ? classes.imcNormal : 
                                        diagnosticoIMC == "OBESIDAD" ? classes.imcObesidad : 
                                        diagnosticoIMC == null ? classes.faltante : classes.imcSobreBajo}
                        >
                            {diagnosticoIMC ? diagnosticoIMC : "Faltan datos por registrar"}
                        </strong>
                    </Typography>      
                </div>
            </div>
    );
}