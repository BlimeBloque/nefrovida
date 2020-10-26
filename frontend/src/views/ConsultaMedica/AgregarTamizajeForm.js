import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, TextField } from '@material-ui/core';
import http from "../../http-common";

import Secciones from './secciones/Secciones';

function hasNumber(myString) {
	return /\d/.test(myString);
}
function isNullOrWhitespace( input ) {
	return !input || !input.trim();
}

function isDecimal(input)
{
    return /^\d{1,3}\.\d{1,2}$/.test(input);
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center",
    },
}));

const initialValues = {
    idBeneficiario:0,
    padecimientoActual:'',
    taDerecho:'',
    taIzquierdo:'',
    frecuenciaCardiaca:'',
    frecuenciaRespiratoria:'',
    temperatura:'',
    peso:'',
    talla:'',
    cabezaCuello:'',
    torax:'',
    abdomen:'',
    extremidades:'',
    neurologicoEstadoMental:'',
    otros:'',
    diagnosticos:'',
    planDeTratamiento:'',
}

const initialErrorValues = {
    padecimientoActual:false,
    taDerecho:false,
    taIzquierdo:false,
    frecuenciaCardiaca:false,
    frecuenciaRespiratoria:false,
    temperatura:false,
    peso:false,
    talla:false,
    cabezaCuello:false,
    torax:false,
    abdomen:false,
    extremidades:false,
    neurologicoEstadoMental:false,
    otros:false,
    diagnosticos:false,
    planDeTratamiento:false,
}

export default function ConsultaMedicaForm(props) {
    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect ( () => {

        if(props.editar){
            setValues({
                idBeneficiario: props.consulta.idBeneficiario,
                padecimientoActual: props.consulta.padecimientoActual,
                taDerecho: props.consulta.taDerecho,
                taIzquierdo: props.consulta.taIzquierdo,
                frecuenciaCardiaca: props.consulta.frecuenciaCardiaca,
                frecuenciaRespiratoria: props.consulta.frecuenciaRespiratoria,
                temperatura: props.consulta.temperatura,
                peso: props.consulta.peso,
                talla: props.consulta.talla,
                cabezaCuello: props.consulta.cabezaCuello,
                torax: props.consulta.torax,
                abdomen: props.consulta.abdomen,
                extremidades: props.consulta.extremidades,
                neurologicoEstadoMental: props.consulta.neurologicoEstadoMental,
                otros: props.consulta.otros,
                diagnosticos: props.consulta.diagnosticos,
                planDeTratamiento: props.consulta.planDeTratamiento,
            });
        }
        else {
        setValues({
            ...values,
            'idBeneficiario': props.idBeneficiario
        });

        

        http.get('/beneficiarios/'+props.idBeneficiario)
            .then(res => { setBeneficiario(res.data[0])
        })
            .catch((e) => {
            console.log(e)
        })
    }
    }, []);

    const handleSubmit = () => {

    };

    return (
        <center className={classes.root}>
            <Typography variant="h5">Tamizaje de {props.editar ?  props.consulta.nombreBeneficiario :  beneficiario.nombreBeneficiario} </Typography>

            <form>
            <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
              Registrar Tamizaje
          </Button>
            </form>
        </center>
    );
}