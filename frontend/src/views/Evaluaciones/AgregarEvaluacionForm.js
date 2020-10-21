import React, {useState, useEffect} from 'react'

import axios from 'axios'

import {CssBaseline, FormLabel, makeStyles, Typography, Button, RadioGroup, FormControlLabel, Radio, Divider} from '@material-ui/core';
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
    const [idEvaluacion, setIdEvaluacion] = useState(window.location.pathname.split("/").pop() === 'agregarEvaluacionInicio' ? 1 : 2) ;

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
                idRespuesta: event.target.value
            })
        }
    };
    
    useEffect (() => {
        axios.get('http://localhost:8000/api/opcionEvaluacion/evaluaciones/'+idEvaluacion)
        .then(res => { setOpciones (res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);
    
    var valuesForm = {};
    const handleSubmit = () => {
       let isComplete = true;
        if(idEvaluacion == 1) {
            for (let i = 1; i < 10; i++) {
                
                valuesForm = {
                    idOpcionEvaluacion: i,
                    idBeneficiario: props.match.params.idBeneficiario,
                    respuestasPosibles: valueInicio[i]
                }   
                if(valueInicio[i] == "")
                    isComplete = false;
                } 
                
        }
        else {
            for (let i = 10; i < 19; i++) {
                valuesForm = {
                    idOpcionEvaluacion: i,
                    idBeneficiario: props.match.params.idBeneficiario,
                    respuestasPosibles: valueFin[i]
                }
                if(valueFin[i] == "")
                    isComplete = false;
            }
        }
        if(!isComplete)
            return;        
        
        console.log(valuesForm)
        /*axios.post('http://localhost:8000/api/'path para evaluaciones_repuestas, valuesForm, {headers: {"Accept": "application/json"}})
        .then(res => {
            console.log(res)
            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarEvaluacion=1");
        })
            .catch(err => {
                console.log(err)
                props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarEvaluacion=0");
            });*/
            

    }
    
    return (
        <div className={classes.root}>
            <CssBaseline/>
            {
                idEvaluacion == 1 ? 
                <div>
                    <Typography variant="h4" className={classes.title}>Formulario de Evaluación</Typography>
                    <Typography variant="overline">Inicio de Jornada</Typography><br />
                </div> :  

                <div>
                    <Typography variant="h4" className={classes.title}>Formulario de Evaluación</Typography>
                    <Typography variant="overline">Fin de Jornada</Typography><br />
                </div>
            }
            <Divider style={{marginBottom: '10px'}}/>
            <form className={classes.form}>   
                {
                    opciones.map((opcion) => (
                    <>
                        {idEvaluacion == 1 ? 
                        <FormLabel component="legend">{opcion.idOpcionEvaluacion}.- {opcion.evaluacionPregunta}</FormLabel> :
                        <FormLabel component="legend">{opcion.idOpcionEvaluacion-9}.- {opcion.evaluacionPregunta}</FormLabel>
                        }
                        
                        <RadioGroup row aria-label="respuestas" name="pregunta-respuestas" onChange={handleChange} id={opcion.idOpcionEvaluacion}>
                            <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio required />} label="No" />
                        </RadioGroup> <br/>
                    </>
                    ))
                }
                <div className={classes.formItems}>
                    <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Completar</Button>
                </div>
            </form>
        </div>
    )
}


export default withRouter(AgregarEvaluacionForm);