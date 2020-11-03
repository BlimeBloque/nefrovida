import React, { useState, useEffect } from 'react'
import {FormControl, Input, InputLabel, makeStyles, MenuItem, Select, Typography, Button, FormHelperText, TextField} from '@material-ui/core';
import http from '../../../http-common';
import {hasNumber, isNullOrWhitespace, isDecimal} from '../../../components/utils';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center",
    },
    botones: {
        marginTop: theme.spacing(3),
    },
    hide: {
        display: "none",
        visibility: "hidden",
    },
    show: {
        display: "block",
        visibility: "visible",
    },
    textoLargo: {
        width: "70%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    textoCorto: {
        width: "30%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    flex: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    xs: {
        width: "15%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    m: {
        width: "50%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    s: {
        width: "20%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

const initialValues = {
    idBeneficiario: 0,
    talla: '',
    peso: '',
    volumen: '',
    superficieCorporal: '',
    creatininaEnSuero: '',
    valorCreatininaBajoMujer: 0.50,
    valorCreatininaAltoMujer: 1.00,
    valorCreatininaBajoHombre: 0.70,
    valorCreatininaAltoHombre: 1.20,
    depuracionCreatinina: '',
    valorDepuracionBajoMujer: 88,
    valorDepuracionAltoMujer: 128,
    valorDepuracionBajoHombre: 97,
    valorDepuracionAltoHombre: 137,
    nota: '',
    metodo: 'Colorimétrico',
};

const initialErrorValues = {
    talla: false,
    peso: false,
    volumen: false,
    superficieCorporal: false,
    creatininaEnSuero: false,
    valorCreatininaBajoMujer: false,
    valorCreatininaAltoMujer: false,
    valorCreatininaBajoHombre: false,
    valorCreatininaAltoHombre: false,
    depuracionCreatinina: false,
    valorDepuracionBajoMujer: false,
    valorDepuracionAltoMujer: false,
    valorDepuracionBajoHombre: false,
    valorDepuracionAltoHombre: false,
    nota: false,
    metodo: false,
}

export default function DepuracionCreatininaForm (props) {
    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    useEffect(() => {

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
    }, [])

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const handleTallaChange = (event) => {
        handleInputChange(event);
        validateTalla(event.target.value);
    }

    const validateTalla = (talla) =>
    {
        if(talla.length > 0 & (!isDecimal(talla) | isNullOrWhitespace(talla)))
        {
            setErrores({
                ...errores,
                'talla': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'talla': false
            });
        }
    }

    const handlePesoChange = (event) => {
        handleInputChange(event);
        validatePeso(event.target.value);
    }

    const validatePeso = (peso) =>
    {
        if(peso.length > 0 & (!isDecimal(peso) | isNullOrWhitespace(peso)))
        {
            setErrores({
                ...errores,
                'peso': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'peso': false
            });
        }
    }

    const handleVolumenChange = (event) => {
        handleInputChange(event);
        validateVolumen(event.target.value);
    }

    const validateVolumen = (volumen) =>
    {
        if(volumen.length > 0 & (!isDecimal(volumen) | isNullOrWhitespace(volumen)))
        {
            setErrores({
                ...errores,
                'volumen': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'volumen': false
            });
        }
    }

    const handleSuperficieCorporalChange = (event) => {
        handleInputChange(event);
        validateSuperficieCorporal(event.target.value);
    }

    const validateSuperficieCorporal = (superficieCorporal) =>
    {
        if(superficieCorporal.length > 0 & (!isDecimal(superficieCorporal) | isNullOrWhitespace(superficieCorporal)))
        {
            setErrores({
                ...errores,
                'superficieCorporal': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'superficieCorporal': false
            });
        }
    }

    const handleCreatininaEnSueroChange = (event) => {
        handleInputChange(event);
        validateCreatininaEnSuero(event.target.value);
    }

    const validateCreatininaEnSuero = (creatininaEnSuero) =>
    {
        if(creatininaEnSuero.length > 0 & (!isDecimal(creatininaEnSuero) | isNullOrWhitespace(creatininaEnSuero)))
        {
            setErrores({
                ...errores,
                'creatininaEnSuero': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatininaEnSuero': false
            });
        }
    }

    const handleValorCreatininaBajoMujerChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaBajoMujer(event.target.value);
    }

    const validateValorCreatininaBajoMujer = (valorCreatininaBajoMujer) =>
    {
        if(valorCreatininaBajoMujer.length > 0 & (!isDecimal(valorCreatininaBajoMujer) | isNullOrWhitespace(valorCreatininaBajoMujer)))
        {
            setErrores({
                ...errores,
                'valorCreatininaBajoMujer': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaBajoMujer': false
            });
        }
    }

    const handleValorCreatininaAltoMujerChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaAltoMujer(event.target.value);
    }

    const validateValorCreatininaAltoMujer = (valorCreatininaAltoMujer) =>
    {
        if(valorCreatininaAltoMujer.length > 0 & (!isDecimal(valorCreatininaAltoMujer) | isNullOrWhitespace(valorCreatininaAltoMujer)))
        {
            setErrores({
                ...errores,
                'valorCreatininaAltoMujer': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaAltoMujer': false
            });
        }
    }

    const handleValorCreatininaBajoHombreChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaBajoHombre(event.target.value);
    }

    const validateValorCreatininaBajoHombre = (valorCreatininaBajoHombre) =>
    {
        if(valorCreatininaBajoHombre.length > 0 & (!isDecimal(valorCreatininaBajoHombre) | isNullOrWhitespace(valorCreatininaBajoHombre)))
        {
            setErrores({
                ...errores,
                'valorCreatininaBajoHombre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaBajoHombre': false
            });
        }
    }

    const handleValorCreatininaAltoHombreChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaAltoHombre(event.target.value);
    }

    const validateValorCreatininaAltoHombre = (valorCreatininaAltoHombre) =>
    {
        if(valorCreatininaAltoHombre.length > 0 & (!isDecimal(valorCreatininaAltoHombre) | isNullOrWhitespace(valorCreatininaAltoHombre)))
        {
            setErrores({
                ...errores,
                'valorCreatininaAltoHombre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaAltoHombre': false
            });
        }
    }

    const handleDepuracionCreatininaChange = (event) => {
        handleInputChange(event);
        validateDepuracionCreatinina(event.target.value);
    }

    const validateDepuracionCreatinina = (depuracionCreatinina) =>
    {
        if(depuracionCreatinina.length > 0 & (!isDecimal(depuracionCreatinina) | isNullOrWhitespace(depuracionCreatinina)))
        {
            setErrores({
                ...errores,
                'depuracionCreatinina': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'depuracionCreatinina': false
            });
        }
    }

    const handleValorDepuracionBajoMujerChange = (event) => {
        handleInputChange(event);
        validateValorDepuracionBajoMujer(event.target.value);
    }

    const validateValorDepuracionBajoMujer = (valorDepuracionBajoMujer) =>
    {
        if(valorDepuracionBajoMujer.length > 0 & (!isDecimal(valorDepuracionBajoMujer) | isNullOrWhitespace(valorDepuracionBajoMujer)))
        {
            setErrores({
                ...errores,
                'valorDepuracionBajoMujer': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorDepuracionBajoMujer': false
            });
        }
    }

    const handleValorDepuracionAltoMujerChange = (event) => {
        handleInputChange(event);
        validateValorDepuracionAltoMujer(event.target.value);
    }

    const validateValorDepuracionAltoMujer = (valorDepuracionAltoMujer) =>
    {
        if(valorDepuracionAltoMujer.length > 0 & (!isDecimal(valorDepuracionAltoMujer) | isNullOrWhitespace(valorDepuracionAltoMujer)))
        {
            setErrores({
                ...errores,
                'valorDepuracionAltoMujer': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorDepuracionAltoMujer': false
            });
        }
    }

    const handleValorDepuracionBajoHombreChange = (event) => {
        handleInputChange(event);
        validateValorDepuracionBajoHombre(event.target.value);
    }

    const validateValorDepuracionBajoHombre = (valorDepuracionBajoHombre) =>
    {
        if(valorDepuracionBajoHombre.length > 0 & (!isDecimal(valorDepuracionBajoHombre) | isNullOrWhitespace(valorDepuracionBajoHombre)))
        {
            setErrores({
                ...errores,
                'valorDepuracionBajoHombre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorDepuracionBajoHombre': false
            });
        }
    }

    const handleValorDepuracionAltoHombreChange = (event) => {
        handleInputChange(event);
        validateValorDepuracionAltoHombre(event.target.value);
    }

    const validateValorDepuracionAltoHombre = (valorDepuracionAltoHombre) =>
    {
        if(valorDepuracionAltoHombre.length > 0 & (!isDecimal(valorDepuracionAltoHombre) | isNullOrWhitespace(valorDepuracionAltoHombre)))
        {
            setErrores({
                ...errores,
                'valorDepuracionAltoHombre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorDepuracionAltoHombre': false
            });
        }
    }

    const handleMetodoChange = (event) => {
        handleInputChange(event);
        validateMetodo(event.target.value);
    }

    const validateMetodo = (metodo) =>
    {
        if(metodo.length > 0 & isNullOrWhitespace(metodo))
        {
            setErrores({
                ...errores,
                'metodo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'metodo': false
            });
        }
    }

    const handleNotaChange = (event) => {
        handleInputChange(event);
        validateNota(event.target.value);
    }

    const validateNota = (nota) =>
    {
        if(nota.length > 0 & isNullOrWhitespace(nota))
        {
            setErrores({
                ...errores,
                'nota': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'nota': false
            });
        }
    }

    const handleSubmit = () => {
        let submit = true;
        if(errores.talla || errores.peso || errores.volumen || errores.superficieCorporal || errores.creatininaEnSuero
            || errores.valorCreatininaBajoMujer || errores.valorCreatininaAltoMujer || errores.valorCreatininaBajoHombre
            || errores.valorCreatininaAltoHombre || errores.depuracionCreatinina || errores.valorDepuracionBajoMujer 
            || errores.valorDepuracionAltoMujer || errores.valorDepuracionBajoHombre || errores.valorDepuracionAltoHombre 
            || errores.nota || errores.metodo)
            submit = false;
        
        if(submit)
        {
            http.post('/depuracionCreatinina', values)
                    .then(res => {
                        console.log(res)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarDepuracionCreatinina=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarDepuracionCreatinina=0");
                    });
        }
    }

    return (
        <center className={classes.root}>
            <Typography variant="h5">Examen de Orina de {beneficiario.nombreBeneficiario} </Typography>
            <form>
                <div className={classes.flex}>
                    <FormControl error={errores.talla} className={classes.xs}>
                        <InputLabel htmlFor="component-error">Talla</InputLabel>
                        <Input
                        id="component-error"
                        value={values.talla}
                        name="talla"
                        onChange={handleTallaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.talla ? "block" : "none"}} id="component-error-text">
                            Escribe una talla válida<br/>(Si es número cerrado escribir .0 Ej. 7.0).
                        </FormHelperText>
                    </FormControl>
                    <FormControl error={errores.peso} className={classes.xs}>
                        <InputLabel htmlFor="component-error">Peso</InputLabel>
                        <Input
                        id="component-error"
                        value={values.peso}
                        name="peso"
                        onChange={handlePesoChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.peso ? "block" : "none"}} id="component-error-text">
                            Escribe un peso válida<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.flex}>
                    <FormControl error={errores.volumen} className={classes.xs}>
                        <InputLabel htmlFor="component-error">Volumen</InputLabel>
                        <Input
                        id="component-error"
                        value={values.volumen}
                        name="volumen"
                        onChange={handleVolumenChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.volumen ? "block" : "none"}} id="component-error-text">
                            Escribe un volumen válida<br/>(Si es número cerrado escribir .0 Ej. 7.0).
                        </FormHelperText>
                    </FormControl>
                    <FormControl error={errores.superficieCorporal} className={classes.xs}>
                        <InputLabel htmlFor="component-error">Superficie Corporal</InputLabel>
                        <Input
                        id="component-error"
                        value={values.superficieCorporal}
                        name="superficieCorporal"
                        onChange={handleSuperficieCorporalChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.superficieCorporal ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                </div>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.m}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="creatinina" className={classes.flex}>
                    <FormControl error={errores.creatininaEnSuero} className={classes.s}>
                        <InputLabel htmlFor="component-error">Creatinina en Suero</InputLabel>
                        <Input
                        id="component-error"
                        value={values.creatininaEnSuero}
                        name="creatininaEnSuero"
                        onChange={handleCreatininaEnSueroChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.creatininaEnSuero ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <FormControl error={errores.valorCreatininaBajoMujer} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaBajoMujer}
                                name="valorCreatininaBajoMujer"
                                onChange={handleValorCreatininaBajoMujerChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorCreatininaBajoMujer ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorCreatininaAltoMujer} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaAltoMujer}
                                name="valorCreatininaAltoMujer"
                                onChange={handleValorCreatininaAltoMujerChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorCreatininaAltoMujer ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <FormControl error={errores.valorCreatininaBajoHombre} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaBajoHombre}
                                name="valorCreatininaBajoHombre"
                                onChange={handleValorCreatininaBajoHombreChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorCreatininaBajoHombre ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorCreatininaAltoHombre} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaAltoHombre}
                                name="valorCreatininaAltoHombre"
                                onChange={handleValorCreatininaAltoHombreChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorCreatininaAltoHombre ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL HOMBRES</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.m}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="creatinina" className={classes.flex}>
                    <FormControl error={errores.depuracionCreatinina} className={classes.s}>
                        <InputLabel htmlFor="component-error">Depuración de Creatinina</InputLabel>
                        <Input
                        id="component-error"
                        value={values.depuracionCreatinina}
                        name="depuracionCreatinina"
                        onChange={handleDepuracionCreatininaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.depuracionCreatinina ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <FormControl error={errores.valorDepuracionBajoMujer} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorDepuracionBajoMujer}
                                name="valorDepuracionBajoMujer"
                                onChange={handleValorDepuracionBajoMujerChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorDepuracionBajoMujer ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorDepuracionAltoMujer} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorDepuracionAltoMujer}
                                name="valorCreatininaAltoMujer"
                                onChange={handleValorDepuracionAltoMujerChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorDepuracionAltoMujer ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>ml/min MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <FormControl error={errores.valorDepuracionBajoHombre} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorDepuracionBajoHombre}
                                name="valorDepuracionBajoHombre"
                                onChange={handleValorDepuracionBajoHombreChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorDepuracionBajoHombre ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorDepuracionAltoHombre} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorDepuracionAltoHombre}
                                name="valorDepuracionAltoHombre"
                                onChange={handleValorDepuracionAltoHombreChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled
                                />
                                <FormHelperText style={{display: errores.valorDepuracionAltoHombre ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>ml/min HOMBRES</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.flex}>
                    <FormControl error={errores.metodo} className={classes.textoCorto}>
                        <InputLabel htmlFor="component-error">Método</InputLabel>
                        <Input
                        id="component-error"
                        value={values.metodo}
                        name="metodo"
                        onChange={handleMetodoChange}
                        aria-describedby="component-error-text"
                        />
                        <FormHelperText style={{display: errores.metodo ? "block" : "none"}} id="component-error-text">
                            Escribe una respuesta válida.
                        </FormHelperText>
                    </FormControl>
                </div>
                <FormControl style={{textAlign: "left"}} error={errores.nota} className={classes.textoLargo}>
                        <TextField
                        label="Nota"
                        multiline
                        value={values.nota}
                        rows={5}
                        name="nota"
                        variant="outlined"
                        onChange={handleNotaChange}
                        aria-describedby="component-error-text"
                        />
                        <FormHelperText style={{display: errores.nota ? "block" : "none"}} id="component-error-text">
                            Escribe una respuesta válida.
                        </FormHelperText>
                    </FormControl>
                <div className={classes.botones}>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>Registrar</Button>
                </div>
            </form>
        </center>
    )
}