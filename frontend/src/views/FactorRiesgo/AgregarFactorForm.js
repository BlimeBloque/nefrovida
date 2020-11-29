import React, {useState, useEffect } from 'react';

import http from "../../http-common";
import Cookies from 'js-cookie';
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

const respuestas = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: ''
}

function AgregarFactorForm(props) {
    const { history } = props;
    const classes = useStyle();
    const [valueForm, setValueForm] = useState(respuestas);
    const[opciones, setOpciones] = useState([]);
    const [idFormulario] = useState(window.location.pathname.split("/").pop() === 'agregarFactor' ? 1 : null);
    const [disabled, setDisabled] = useState(false);
    const preguntasSinContestar = []
    const [missing, setMissing] = useState(false);

    const handleChange = (event) => {
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
        setValueForm({
            ...valueForm,
            [idRespuesta]: event.target.value
        })
        
    };
    
    useEffect (() => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Social"))
        {
            props.history.goBack();
        }
        http.get('opcionFormulario/formularios/'+idFormulario)
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

        let i = 1
        /* 
            Todos los operadores ternarios aquí los utilicé para no hacer dos ciclos for.
            El que está dentro de la declaración del ciclo delimita si termina en 10 o 19
            El que está en el valor de respuestasPosibles agrega el valor sacado del arreglo correspondiente (valueInicio/valueFin)
        */
        for (i; i < 13; i++) {
            valueRespuesta = {
                idOpcionFormulario: i,
                idBeneficiario: props.match.params.idBeneficiario,
                textoRespuesta: null,
                respuesta: valueForm[i]
            }
            arrayForm[i] = valueRespuesta;
        }
        console.log(arrayForm)
        if(arrayForm.every((value) => value.respuesta != "")) { // Valida que haya contestado todas las respuestas
            for (let i = 1; i < 13; i++) {
                
                http.post('formulario', arrayForm[i], {headers: {"Accept": "application/json"}})
                    .then(res => {
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarFactor=1");
    
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarFactor=0");
    
                    });
            }
        }
        else { // Si hay al menos una respuesta vacía, avisa al usuario
            setMissing(true);
            arrayForm.forEach(pregunta => {
                if(pregunta.respuesta == "")
                preguntasSinContestar.push(pregunta.idOpcionFormulario)
            });
            setDisabled(false);
        } 
    }
    
    return (
        <div className={classes.root}>
            <CssBaseline/>
                <Typography variant="h4" className={classes.title}>Formulario de Factor de Riesgo</Typography>
            <Divider style={{marginBottom: '20px', marginTop: '2px'}}/>
            <form className={classes.form}>   
                {
                    opciones.map((opcion) => (
                        <FormControl component="fieldset" style={{display: 'block'}}> 
                        {
                            <FormLabel>{opcion.idOpcionFormulario}.- {opcion.pregunta}</FormLabel>
                        }
                        <RadioGroup 
                            row 
                            aria-label="respuestas" 
                            name="pregunta-respuestas" 
                            onChange={handleChange}
                            id={opcion.idOpcionFormulario}
                            style={{textAlign: 'center'}}    
                        >
                            <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio required />} label="No" />
                            <FormControlLabel value="Lo desconoce" control={<Radio required />} label="Lo desconoce" />
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


export default withRouter(AgregarFactorForm);