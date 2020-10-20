import React, {useState, useEffect} from 'react'

import axios from 'axios'

import {CssBaseline, FormControl, FormLabel, makeStyles, Typography, Button, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
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
    const [idEvaluacion, setIdEvaluacion] = useState() ;
    
    const handleChange = (event) => {
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
        if(idEvaluacion == 1) {
            setValueInicio({
                ...valueInicio,
                [idRespuesta]: event.target.value
            })
            console.log(valueInicio);
        }
        else {
            setValueFin({
                ...valueFin,
                idRespuesta: event.target.value
            })
            console.log(valueFin);
        }
    };
    
    useEffect (() => {
        axios.get('http://localhost:8000/api/opcionEvaluacion/evaluaciones/1')
        .then(res => { setOpciones (res.data)
            setIdEvaluacion(res.data[0].idEvaluacion);
        })
        .catch((e) => {
            console.log(e)
        })
        //idEvaluacion = opciones[0].idEvaluacion;
    }, []);
    
    const handleSubmit = () => {
        let valuesForm = {};
        if(idEvaluacion == 1) {
            for (let i = 1; i < 9; i++) {
                var valoresForm = {
                    idOpcionEvaluacion: i,
                    idBeneficiario: props.match.params.idBeneficiario,
                    respuestasPosibles: i.values()
                }     
            }        
        }
        else {
            for (let i = 10; i < 18; i++) {
                var valoresForm = {
                    idOpcionEvaluacion: i,
                    idBeneficiario: props.match.params.idBeneficiario,
                    respuestasPosibles: i.values()
                }
            }
        }

        console.log(valuesForm);
        axios.post('http://localhost:8000/api/'/*path para evaluaciones_repuestas*/, valoresForm, {headers: {"Accept": "application/json"}})
            .then(res => {
                console.log(res)
                props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarEvaluacion=1");
            })
            .catch(err => {
                console.log(err)
                props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarEvaluacion=0");
            });
    }
    
    return (
        <div className={classes.root}>
        {console.log(idEvaluacion)}
            <CssBaseline/>
            <Typography variant="h4" className={classes.title}></Typography><br />
            <form className={classes.form}>   
                {
                    opciones.map((opcion) => (
                    <>
                        <FormLabel component="legend">{opcion.evaluacionPregunta}</FormLabel>
                        <RadioGroup row aria-label="respuestas" name="pregunta-respuestas" onChange={handleChange} id={opcion.idOpcionEvaluacion}>
                            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup> <br/>
                    </>
                    ))
                }
                <div className={classes.formItems}>
                    <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                    <Button variant="contained" color="primary" onclick={handleSubmit}>Completar</Button>
                </div>
              
            </form>
        </div>
    )
}


export default withRouter(AgregarEvaluacionForm);