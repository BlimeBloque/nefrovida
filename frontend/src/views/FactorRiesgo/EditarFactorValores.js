import React, {useState, useEffect } from 'react'
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider, FormControl, Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core'
import http from '../../http-common';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';

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
        setValoresFactor({
            ...valoresFactor,
            [idRespuesta]: event.target.value
        })
        
    };

    useEffect (() => {
        http.get('/detalles/'+ props.idBeneficiario)
        .then(res => { 
            setOpciones(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    const handleSubmit = (event) => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Social"))
        {
            props.history.goBack();
        }
        setDisabled(true);
        setValoresFactor({
            ...valoresFactor
        })
        let valueRespuesta = {};
        let arrayForm = [];
        let respuestaFinal = opciones.map((r) => (r.respuesta))
        let idRespuesta = opciones.map((id) => (id.idRespuesta))
        let i = 1

        for (i; i < 13; i++) {
            valueRespuesta = {
                idOpcionFormulario: i,
                idBeneficiario: props.match.params.idBeneficiario,
                textoRespuesta: null,
                respuesta: (valoresFactor[i] != undefined ? valoresFactor[i] : respuestaFinal[i-1]),
                idRespuesta: idRespuesta[i-1]
            }
            arrayForm[i] = valueRespuesta;
        }
        
        let success = true;
        for (let i = 1; i < 13; i++) {
            http.put('/formulario/'+props.idBeneficiario, arrayForm[i])
                .then(res => {
                })
                .catch(err => {
                    console.log(err)
                    success = false;
                    
                });
        } 
        if(success)
        {
            props.history.push("/beneficiarios/"+props.idBeneficiario+"/detalleFactor"+"?editarFactor=1");
        }
        else
            props.history.push("/beneficiarios/"+props.idBeneficiario+"/detalleFactor"+"?editarFactor=0");
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
                        <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario+'/detalleFactor')}>Cancelar</Button>
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