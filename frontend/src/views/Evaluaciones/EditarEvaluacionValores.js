import React, {useState, useEffect } from 'react'
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider, FormControl, Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    root:{
        display: 'block'
    }, 
    form: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    },
    centerItem: {
        textAlign: 'center',
    },
    divider: {
        marginTop: '10px',
        marginBottom: '20px',
    },
    back : {
        marginRight: '10px'
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

function EditarEvaluacionValores(props) {
    const { history } = props;
    const classes = useStyle();
    const [opciones, setOpciones] = useState([])
    const [valoresInicio, setValoresInicio] = useState([]);
    const [valoresFin, setValoresFin] = useState([]);
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'editarEvaluacionInicio' ? 1 : 2);
    const [disabled, setDisabled] = useState(false);

    const handleChange = (event) => {
        console.log(valoresInicio)
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
        console.log(idRespuesta)
        console.log(event.target.value)
        if(idEvaluacion == 1) {
            setValoresInicio({
                ...valoresInicio,
                [idRespuesta]: event.target.value
            })
        }
        else {
            setValoresFin({
                ...valoresFin,
                [idRespuesta]: event.target.value
            })
        }
        
    };

    useEffect (() => {
        if(idEvaluacion == 1) {
            axios.get('http://localhost:8000/api/detallesEvaluacionesInicio/'+ props.idBeneficiario)
            .then(res => { 
                setOpciones(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        } else {
            axios.get('http://localhost:8000/api/detallesEvaluacionesFin/'+ props.idBeneficiario)
            .then(res => { 
                setOpciones(res.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
        

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
                respuestasPosibles: (idEvaluacion == 1 ? valoresInicio[i] : valoresFin[i])
            }
            if(idEvaluacion == 1) arrayForm[i] = valueRespuesta;
            else arrayForm[i-9] = valueRespuesta;
        }
        console.log(arrayForm)

        /* for (let i = 1; i < 10; i++) {
            axios.post('http://localhost:8000/api/evaluacion', arrayForm[i], {headers: {"Accept": "application/json"}})
                .then(res => {
                    props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=1");

                })
                .catch(err => {
                    console.log(err)
                    props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=0");
                });
        } */
        
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <Typography variant="h4" className={classes.centerItem}>Editar Formulario de Evaluación</Typography>
            {
                // Definir Título de formulario
                idEvaluacion == 1 ? 
                <div className={classes.centerItem}>
                    <Typography variant="overline" >Inicio de Jornada</Typography><br />
                </div> :  

                <div className={classes.centerItem}>
                    <Typography variant="overline">Fin de Jornada</Typography><br />
                </div>
            }
            <Divider className={classes.divider}/>
            <form className={classes.form}>
                {
                        opciones.map((valor) => (
                                <FormControl component="fieldset" style={{display: 'block'}}>
                                    {
                                        idEvaluacion == 1 ?
                                        <Typography variant="h6">{valor.idOpcionEvaluacion}.- {valor.evaluacionPregunta}</Typography> :
                                        <Typography variant="h6">{valor.idOpcionEvaluacion-9}.- {valor.evaluacionPregunta}</Typography>
                                    }

                                    <RadioGroup 
                                        row 
                                        aria-label="respuestas" 
                                        name="pregunta-respuestas" 
                                        onChange={handleChange}
                                        id={valor.idOpcionEvaluacion}
                                        style={{textAlign: 'center'}}   
                                        defaultValue={valor.respuestasPosibles} 
                                    >
                                        <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                                        <FormControlLabel value="No" control={<Radio required />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                        )) 
                    
                }
               
                <div className={classes.formItems}>
                        <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                        <Button 
                            disabled={disabled} 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSubmit}
                        >
                            {disabled ? <CircularProgress size={24} /> : 'Guardar'}
                        </Button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditarEvaluacionValores);
