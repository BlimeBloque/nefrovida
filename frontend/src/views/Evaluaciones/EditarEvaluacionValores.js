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
    const [valoresInicio, setValoresInicio] = useState();
    const [valoresFin, setValoresFin] = useState();
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'detalleEvaluacionesInicio' ? 1 : 2);
    const [disabled, setDisabled] = useState(false);

    const handleChange = (event) => {
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
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
                setValoresInicio(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        } else {
            axios.get('http://localhost:8000/api/detallesEvaluacionesFin/'+ props.idBeneficiario)
            .then(res => { 
                setValoresFin(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
        

    }, []);

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
                    valoresInicio ? // Cuando regrese el json, mapearlo
                        valoresInicio.map((valor) => (
                            <>
                                <FormControl component="fieldset" style={{display: 'block'}}>
                                    <Typography variant="h6">{valor.idOpcionEvaluacion}.- {valor.evaluacionPregunta}</Typography>
                                    <RadioGroup 
                                        row 
                                        aria-label="respuestas" 
                                        name="pregunta-respuestas" 
                                        onChange={handleChange}
                                        id={valor.idOpcionEvaluacion}
                                        style={{textAlign: 'center'}}   
                                        value={valor.respuestasPosibles} 
                                    >
                                        <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                                        <FormControlLabel value="No" control={<Radio required />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </>
                        )) :
                    <div/>
                }
                {
                    valoresFin ?
                    valoresFin.map((valor) => (
                        <>
                            <FormControl component="fieldset" style={{display: 'block'}}>
                                <Typography variant="h6">{valor.idOpcionEvaluacion}.- {valor.evaluacionPregunta}</Typography>
                                <RadioGroup 
                                    row 
                                    aria-label="respuestas" 
                                    name="pregunta-respuestas" 
                                    onChange={handleChange}
                                    id={valor.idOpcionEvaluacion}
                                    style={{textAlign: 'center'}}   
                                    value={valor.respuestasPosibles} 
                                >
                                    <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                                    <FormControlLabel value="No" control={<Radio required />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </>
                    )) :                  
                    <div/>
                }
                <div className={classes.formItems}>
                        
                        <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                        <Button 
                            disabled={disabled} 
                            variant="contained" 
                            color="primary" 
                            onClick={console.log('Click en submit')}
                        >
                            {disabled ? <CircularProgress size={24} /> : 'Guardar'}
                        </Button>
                </div>
            </form>
        </div>
    )
}

export default withRouter(EditarEvaluacionValores);
