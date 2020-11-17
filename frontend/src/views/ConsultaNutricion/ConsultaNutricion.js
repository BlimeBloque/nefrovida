import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent, Paper, Table, TableBody, TableCell, 
        TableContainer, TableHead, TableRow} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EliminarConsultaNutricion from './EliminarConsultaNutricion';
import DetallesDatosNutrimentales from './seccionesDetalles/DetallesDatosNutrimentales';
import DetallesDatosClinicos from './seccionesDetalles/DetallesDatosClinicos';
import DetallesEstiloVida from './seccionesDetalles/DetallesEstiloVida';
import DetallesDatosDieteticos from './seccionesDetalles/DetallesDatosDieteticos';
import DetallesRecordatorios from './seccionesDetalles/DetallesRecordatorios';
import DetallesDatosAntropometricos from './seccionesDetalles/DetallesDatosAntropometricos';
import DetallesNecesidades from './seccionesDetalles/DetallesNecesidades';
import {obtenerDiagnosticoIMC, obtenerIMC, getAge} from '../../components/utils';
import DetallesPlanAlimentacion from './seccionesDetalles/DetallesPlanAlimentacion';

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
    },
    paper: {
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
    table: {
        width: "50%",
    },
    nota: {
        minHeight: 100,
    }

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

const ConsultaNutricion = (props) => {
    const detalle = props.detalle;
    const classes = useStyle();
    const [eliminarOpen, setEliminarOpen] = useState(false);

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }

    //Dar formato a fecha
    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    //Obtener campos calculados
    const edad = getAge(detalle.fechaNacimiento);
    const pesoIdeal = obtenerPesoIdeal(detalle.sexo, detalle.altura);
    const imc = obtenerIMC(detalle.altura, detalle.peso);
    const diagnosticoIMC = obtenerDiagnosticoIMC(imc, detalle.sexo, edad);

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
                        <IconButton aria-label="Eliminar" color="secondary"  onClick={handleEliminarOpen}>
                            <RemoveCircleIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            <DetallesDatosNutrimentales classes={classes} detalle={detalle} />
            <DetallesDatosClinicos classes={classes} detalle={detalle} />
            <DetallesEstiloVida classes={classes} detalle={detalle} />
            <DetallesDatosDieteticos classes={classes} detalle={detalle} />
            <DetallesRecordatorios classes={classes} detalle={detalle} />
            <Typography variant="h5"  className={classes.subtitulo}>Evaluación Nutricia</Typography>
            <DetallesDatosAntropometricos classes={classes} detalle={detalle} edad={edad} pesoIdeal={pesoIdeal} imc={imc} diagnosticoIMC={diagnosticoIMC}/>
            <DetallesNecesidades classes={classes} detalle={detalle} />
            <DetallesPlanAlimentacion classes={classes} detalle={detalle} />

            <EliminarConsultaNutricion
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idConsultaNutricional={detalle.idConsultaNutricional}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
            />
        </center>
    )
}

export default ConsultaNutricion;