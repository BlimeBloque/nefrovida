import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const useStyle = makeStyles(theme => ({
    flexTitulo:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: theme.spacing(4),
    },
    flexNormal:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
    },
    flexContent:{
        marginBottom: theme.spacing(3),
    },paper: {
        height: 140,
        width: 100,
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
    normal: {
        fontStyle: "normal",
        margin: theme.spacing(1),
    },
    faltante: {
        fontStyle: "italic",
        margin: theme.spacing(1),
    },
    subtitulo: {
        margin: theme.spacing(2),
        fontWeight: "bold",
        textDecoration: "underline"
    },
    tarjeta: {
        minWidth: "25%",
        margin: theme.spacing(2),
    },
    imcSobreBajo: {
        color: "black",
        backgroundColor: "yellow",
    },
    imcNormal: {
        color: "white",
        backgroundColor: "green",
    },
    imcObesidad: {
        color: "white",
        backgroundColor: "red",
    },

}));

function obtenerPesoIdeal(sexo, altura)
{
    if(altura == null)
        return null;
    
    if(sexo === 'H')
    {
        return ((0.75*altura)-62.5).toFixed(2);
    }
    else
    {
        return ((0.67*altura)-52).toFixed(2);
    }
}

function obtenerIMC(altura, peso)
{
    if(altura == null || peso == null)
        return null;

    altura /= 100;
    return (peso/(altura*altura)).toFixed(1);
}

function obtenerDiagnosticoIMC(imc, sexo, edad)
{
    if(imc == null)
        return null;

    switch(edad)
    {
        case 10:
            if(sexo === 'H')
            {
                if(imc <= 13.7)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.7 && imc < 18.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 18.5 && imc < 21.4)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 13.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.5 && imc < 19.0)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.0 && imc < 22.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 11:
            if(sexo === 'H')
            {
                if(imc <= 14.1)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.1 && imc < 19.2)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.2 && imc < 22.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 13.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 13.9 && imc < 19.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.9 && imc < 23.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 12:
            if(sexo === 'H')
            {
                if(imc <= 14.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.5 && imc < 19.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 19.9 && imc < 23.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 14.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.4 && imc < 20.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 20.8 && imc < 25.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 13:
            if(sexo === 'H')
            {
                if(imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.9 && imc < 20.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 20.8 && imc < 24.8)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 14.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 14.9 && imc < 21.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 21.8 && imc < 26.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 14:
            if(sexo === 'H')
            {
                if(imc <= 15.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.5 && imc < 21.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 21.8 && imc < 25.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 15.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.4 && imc < 22.7)
                {
                    return "NORMAL";
                }
                else if(imc >= 22.7 && imc < 27.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 15:
            if(sexo === 'H')
            {
                if(imc <= 16.0)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.0 && imc < 22.7)
                {
                    return "NORMAL";
                }
                else if(imc >= 22.7 && imc < 27.0)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 15.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 15.9 && imc < 23.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 23.5 && imc < 28.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;

        case 16:
            if(sexo === 'H')
            {
                if(imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.5 && imc < 23.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 23.5 && imc < 27.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.2)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.2 && imc < 24.1)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.1 && imc < 28.9)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 17:
            if(sexo === 'H')
            {
                if(imc <= 16.9)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.9 && imc < 24.3)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.3 && imc < 28.6)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.4 && imc < 24.5)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.5 && imc < 29.3)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 18:
            if(sexo === 'H')
            {
                if(imc <= 17.3)
                {
                    return "BAJO PESO";
                }
                else if(imc > 17.3 && imc < 24.9)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.9 && imc < 29.2)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.4)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.4 && imc < 24.8)
                {
                    return "NORMAL";
                }
                else if(imc >= 24.8 && imc < 29.5)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
        case 19:
            if(sexo === 'H')
            {
                if(imc <= 17.6)
                {
                    return "BAJO PESO";
                }
                else if(imc > 17.6 && imc < 25.4)
                {
                    return "NORMAL";
                }
                else if(imc >= 25.4 && imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
            else
            {
                if(imc <= 16.5)
                {
                    return "BAJO PESO";
                }
                else if(imc > 16.5 && imc < 25.0)
                {
                    return "NORMAL";
                }
                else if(imc >= 25.0 && imc < 29.7)
                {
                    return "SOBREPESO";
                }
                else
                {
                    return "OBESIDAD";
                }
            }
        break;
    }
}


const ConsultaNutricion = (props) => {
    const detalle = props.detalle;
    const classes = useStyle();

    //Dar formato a fecha
    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    //Obtener campos calculados
    const pesoIdeal = obtenerPesoIdeal(detalle.sexo, detalle.altura);
    const imc = obtenerIMC(detalle.altura, detalle.peso);
    const diagnosticoIMC = obtenerDiagnosticoIMC(imc, detalle.sexo, detalle.edad);

    return(
        <center>
            <div id="header" className={classes.flexTitulo}>
                <Typography variant="h5">{fecha}</Typography>
                <Typography variant="h3">{detalle.nombreBeneficiario}</Typography>
                <div id="botones">
                    <Tooltip title="Editar" arrow>
                        <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/consultaNutricion/editar/"+detalle.idConsultaNutricional)}>
                            <EditIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Eliminar" arrow>
                        <IconButton aria-label="Eliminar" color="secondary"  onClick={() => props.history.push("/consultaNutricion/eliminar/"+detalle.idConsultaNutricional)}>
                            <RemoveCircleIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
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
            <div id="datosClinicos">
                <Typography variant="h5"  className={classes.subtitulo}>Datos Clínicos</Typography>
                <div className={classes.flexNormal}>
                    <div>
                        <Typography variant="body1" className={detalle.apetito ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Apetito: </strong>
                            {detalle.apetito ? detalle.apetito : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.distension ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Distensión: </strong>
                            {detalle.distension ? detalle.distension : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.estreñimiento ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Estreñimiento: </strong>
                            {detalle.estreñimiento ? detalle.estreñimiento : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.flatulencias ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Flatulencias: </strong>
                            {detalle.flatulencias ? detalle.flatulencias : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.vomitos ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Vómitos: </strong>
                            {detalle.vomitos ? detalle.vomitos : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.caries ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Caries: </strong>
                            {detalle.caries ? detalle.caries : "No registrado"}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="body1" className={detalle.edema ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Edema: </strong>
                            {detalle.edema ? detalle.edema : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.mareo ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Mareo: </strong>
                            {detalle.mareo ? detalle.mareo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.zumbido ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Zumbido en oídos: </strong>
                            {detalle.zumbido ? detalle.zumbido : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.cefaleas ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Cefaleas: </strong>
                            {detalle.cefaleas ? detalle.cefaleas : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.disnea ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Disnea: </strong>
                            {detalle.disnea ? detalle.disnea : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={detalle.poliuria ? classes.normal : classes.faltante}>
                            <strong className={classes.normal}>Poliuria: </strong>
                            {detalle.poliuria ? detalle.poliuria : "No registrado"}
                        </Typography>
                    </div>
                </div>
            </div>
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
            <Typography variant="h5"  className={classes.subtitulo}>Evaluación Nutricia</Typography>
            <div id="datosAntropometricos">
                <Typography variant="h6"  className={classes.subtitulo}>Datos Antropométricos</Typography>
                <Typography variant="body1" className={detalle.diagnostico ? classes.normal : classes.faltante}>
                    <strong className={classes.normal}>DX: </strong>
                    {detalle.diagnostico ? detalle.diagnostico : "No registrado"}
                </Typography>
                <div className={classes.flexNormal}>
                    <Typography variant="body1" style={{marginLeft: "5%", marginRight: "5%"}} className={detalle.edad ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Edad: </strong>
                        {detalle.edad ? detalle.edad : "No registrado"}
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
                                        diagnosticoIMC == "OBESIDAD" ? classes.imcObesidad : classes.imcSobreBajo}
                        >
                            {diagnosticoIMC ? diagnosticoIMC : "Faltan datos por registrar"}
                        </strong>
                    </Typography>      
                </div>
            </div>
        </center>
    )
}

export default ConsultaNutricion;