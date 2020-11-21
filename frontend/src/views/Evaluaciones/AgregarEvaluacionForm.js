import React, {useState, useEffect } from 'react'

import http from '../../http-common'

import {CssBaseline, FormLabel, makeStyles, Typography, Button, RadioGroup, FormControlLabel, Radio, Divider, FormControl, CircularProgress} from '@material-ui/core';
import { withRouter } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    root:{
        display: 'block',
        textAlign: 'center'
    }, 
    form: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    },
    formItems: {
        textAlign: 'center'
    },
    formAlert: {
        color: 'red'
    },
    hide: {
        display: 'none',
    },
    title: {
        textAlign: 'center',
    },
    back : {
        marginRight: '10px'
    }
}))

const respuestasInicio = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
}

const respuestasFin = {
    10: '',
    11: '',
    12: '',
    13: '',
    14: '',
    15: '',
    16: '',
    17: '',
    18: ''
}

function AgregarEvaluacionForm(props) {
    const { history } = props;
    const classes = useStyle();
    const [valueInicio, setValueInicio] = useState(respuestasInicio);
    const [valueFin, setValueFin] = useState(respuestasFin);
    const[opciones, setOpciones] = useState([]);
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'agregarEvaluacionInicio' ? 1 : 2);
    const [disabled, setDisabled] = useState(false);
    const preguntasSinContestar = []
    const [missing, setMissing] = useState(false);

    const handleChange = (event) => {
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
        if(idEvaluacion == 1) {
            setValueInicio({
                ...valueInicio,
                [idRespuesta]: event.target.value
            })
        }
        else {
            setValueFin({
                ...valueFin,
                [idRespuesta]: event.target.value
            })
        }
        
    };
    
    useEffect (() => {
        http.get('/opcionEvaluacion/evaluaciones/'+idEvaluacion)
        .then(res => { setOpciones (res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);
    
    const handleSubmit = (event) => {
        setDisabled(true);
        let valueRespuesta = {};
        let arrayForm = [];

        let i = idEvaluacion == 1 ? 1 : 10 // Decidir en donde empieza el contador del ciclo for
        /* 
            Todos los operadores ternarios aquí los utilicé para no hacer dos ciclos for.
            El que está dentro de la declaración del ciclo delimita si termina en 10 o 19
            El que está en el valor de respuestasPosibles agrega el valor sacado del arreglo correspondiente (valueInicio/valueFin)
        */
        for (i; i < (idEvaluacion == 1 ? 10 : 19); i++) {
            valueRespuesta = {
                idOpcionEvaluacion: i,
                idBeneficiario: props.match.params.idBeneficiario,
                otraRespuesta: null,
                respuestasPosibles: (idEvaluacion == 1 ? valueInicio[i] : valueFin[i])
            }
            if(idEvaluacion == 1) arrayForm[i] = valueRespuesta;
            else arrayForm[i-9] = valueRespuesta;
        }
        console.log(arrayForm)
        if(arrayForm.every((value) => value.respuestasPosibles != "")) { // Valida que haya contestado todas las respuestas
            for (let i = 1; i < 10; i++) {
                
                http.post('/evaluacion', arrayForm[i])
                    .then(res => {
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=1");
    
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=0");
    
                    });
            }
        }
        else { // Si hay al menos una respuesta vacía, avisa al usuario
            setMissing(true);
            arrayForm.forEach(pregunta => {
                if(pregunta.respuestasPosibles == "")
                preguntasSinContestar.push(pregunta.idOpcionEvaluacion)
            });
            setDisabled(false);
        } 
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline/>
                <Typography variant="h4" className={classes.title}>Formulario de Evaluación</Typography>
            {   
                // Definir Título de formulario
                idEvaluacion == 1 ? 
                <div>
                    <Typography variant="overline">Inicial</Typography><br />
                </div> :  

                <div>
                    <Typography variant="overline">Final</Typography><br />
                </div>
            }
            <Divider style={{marginBottom: '20px', marginTop: '2px'}}/>
            <form className={classes.form}>   
                {
                    opciones.map((opcion) => (
                        <FormControl component="fieldset" style={{display: 'block'}}>
                        {   
                            // Numerar preguntas
                            opcion.idOpcionEvaluacion == 1 || opcion.idOpcionEvaluacion == 10 ?
                                <Typography variant="h5">Área médica</Typography>:
                                <></>
                        }
                        {   
                            // Numerar preguntas
                            opcion.idOpcionEvaluacion == 4  || opcion.idOpcionEvaluacion == 13 ?
                                <Typography variant="h5">Área de nutriología</Typography>:
                                <></>
                        }
                        {   
                            // Numerar preguntas
                            opcion.idOpcionEvaluacion == 7 || opcion.idOpcionEvaluacion == 16 ?
                                <Typography variant="h5">Área de psicología</Typography>:
                                <></>
                        }
                        {
                            idEvaluacion == 1 ? 
                            <FormLabel>{opcion.idOpcionEvaluacion}.- {opcion.evaluacionPregunta}</FormLabel>:
                            <FormLabel>{opcion.idOpcionEvaluacion-9}.- {opcion.evaluacionPregunta}</FormLabel>

                        }
                        <RadioGroup 
                            row 
                            aria-label="respuestas" 
                            name="pregunta-respuestas" 
                            onChange={handleChange}
                            id={opcion.idOpcionEvaluacion}
                            style={{textAlign: 'center'}}    
                        >
                            <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio required />} label="No" />
                        </RadioGroup> 
                        </FormControl> 
                    ))
                }
                <div className={classes.formItems}>
                    <Typography variant="body1" className={missing ?  classes.formAlert : classes.hide}><em>Por favor conteste todas las preguntas antes de continuar</em></Typography>
                    <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                    <Button 
                        disabled={disabled} 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit}
                    >
                        {disabled ? <CircularProgress size={24} /> : 'Completar'}
                    </Button>
                </div>
            </form>
        </div>
    )
}


export default withRouter(AgregarEvaluacionForm);