import React, {useState, useEffect } from 'react'
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider, FormControl, Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core'
import http from '../../http-common';
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


function EditarFactorValores(props) {
    const { history } = props;
    const classes = useStyle();
    const [opciones, setOpciones] = useState([])
    const [valoresFactor, setValoresFactor] = useState([]);
    const [idFormulario] = useState(window.location.pathname.split("/").pop() === 'editarFactor' ? 1 : null);
    const [disabled, setDisabled] = useState(false);

    const handleChange = (event) => {
        const idRespuesta = event.target.parentElement.parentElement.parentElement.parentElement.id; 
        console.log(idRespuesta)
        console.log(event.target.value)
        setValoresFactor({
            ...valoresFactor,
            [idRespuesta]: event.target.value
        })
        console.log(valoresFactor)
        
    };

    useEffect (() => {
        http.get('/detalles/'+ props.idBeneficiario)
        .then(res => { 
            setOpciones(res.data)
            console.log(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    const handleSubmit = (event) => {
        setDisabled(true);
        setValoresFactor({
            ...valoresFactor
        })
        let valueRespuesta = {};
        let arrayForm = [];
        let respuestaFinal = opciones.map((r) => (r.respuesta))
        let idRespuesta = opciones.map((id) => (id.idRespuesta))
        let i = 1
        /* 
            Todos los operadores ternarios aquí los utilicé para no hacer dos ciclos for.
            El que está dentro de la declaración del ciclo delimita si termina en 10 o 19
            El que está en el valor de respuestasPosibles agrega el valor sacado del arreglo correspondiente (valueInicio/valueFin)
        */
        for (i; i < 13; i++) {
            console.log(valoresFactor[i])
            valueRespuesta = {
                idOpcionFormulario: i,
                idBeneficiario: props.match.params.idBeneficiario,
                textoRespuesta: null,
                respuesta: (valoresFactor[i] != undefined ? valoresFactor[i] : respuestaFinal[i-1]),
                idRespuesta: idRespuesta[i-1]
            }
            arrayForm[i] = valueRespuesta;
        }
        console.log(arrayForm) 
        
        for (let i = 1; i < 13; i++) {
            http.put('/formulario/'+props.idBeneficiario, arrayForm[i])
                .then(res => {
                    props.history.push("/beneficiarios/"+props.idBeneficiario+"/detalleFactor"+"?editarFactor=1");

                })
                .catch(err => {
                    console.log(err)
                    props.history.push("/beneficiarios/"+props.idBeneficiario+"/detalleFactor"+"?editarFactor=0");
                });
        } 
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            
            <Typography variant="h4" className={classes.centerItem}>Editar Formulario de Factor de Riesgo</Typography>
            <Divider className={classes.divider}/>
            <form className={classes.form}>
                {
                        opciones.map((valor) => (
                                <FormControl component="fieldset" style={{display: 'block'}}>
                                    <Typography>{valor.idOpcionFormulario}.- {valor.pregunta}</Typography>

                                    <RadioGroup 
                                        row 
                                        aria-label="respuestas" 
                                        name="pregunta-respuestas" 
                                        onChange={handleChange}
                                        id={valor.idOpcionFormulario}
                                        style={{textAlign: 'center'}}   
                                        defaultValue={valor.respuesta} 
                                    >
                                        <FormControlLabel value="Sí" control={<Radio required />} label="Sí" />
                                        <FormControlLabel value="No" control={<Radio required />} label="No" />
                                        <FormControlLabel value="Lo desconoce" control={<Radio required />} label="Lo desconoce" />
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

export default withRouter(EditarFactorValores);