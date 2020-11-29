import React, { useState, useEffect } from 'react'
import {FormControl, Input, InputLabel, makeStyles, MenuItem, Select, Typography, Button, FormHelperText, TextField} from '@material-ui/core';
import http from '../../../http-common';
import {hasNumber, isNullOrWhitespace, isDecimal} from '../../../components/utils';
import Cookies from 'js-cookie'; 

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
        width: "10%",
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
    microAlbumina: '',
    valorMicroAlbuminaBajo: 0.0,
    valorMicroAlbuminaAlto: 30.0,
    creatinina: '',
    valorCreatininaBajo: 10.0,
    valorCreatininaAlto: 300.0,
    relacion: '',
    valorRelacionNormalBajo: 0.0,
    valorRelacionNormalAlto: 30.0,
    valorRelacionAnormalBajo: 30.0,
    valorRelacionAnormalAlto: 50.0,
    valorRelacionAnormalAltoBajo: 50.0,
    valorRelacionAnormalAltoAlto: 300.0,
    nota: '',
    metodo: 'Colorimétrico',
}

const initialErrorValues = {
    microAlbumina: false,
    valorMicroAlbuminaBajo: false,
    valorMicroAlbuminaAlto: false,
    creatinina: false,
    valorCreatininaBajo: false,
    valorCreatininaAlto: false,
    relacion: false,
    valorRelacionNormalBajo: false,
    valorRelacionNormalAlto: false,
    valorRelacionAnormalBajo: false,
    valorRelacionAnormalAlto: false,
    valorRelacionAnormalAltoBajo: false,
    valorRelacionAnormalAltoAlto: false,
    nota: false,
    metodo: false,
}   


export default function DepuracionCreatininaForm (props) {
    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    useEffect(() => {

        if(props.editar)
        {
            setValues({
                idBeneficiario: props.analisis.idBeneficiario,
                microAlbumina: props.analisis.microAlbumina,
                valorMicroAlbuminaBajo: props.analisis.valorMicroAlbuminaBajo,
                valorMicroAlbuminaAlto: props.analisis.valorMicroAlbuminaAlto,
                creatinina: props.analisis.creatinina,
                valorCreatininaBajo: props.analisis.valorCreatininaBajo,
                valorCreatininaAlto: props.analisis.valorCreatininaAlto,
                relacion: props.analisis.relacion,
                valorRelacionNormalBajo: props.analisis.valorRelacionNormalBajo,
                valorRelacionNormalAlto: props.analisis.valorRelacionNormalAlto,
                valorRelacionAnormalBajo: props.analisis.valorRelacionAnormalBajo,
                valorRelacionAnormalAlto: props.analisis.valorRelacionAnormalAlto,
                valorRelacionAnormalAltoBajo: props.analisis.valorRelacionAnormalAltoBajo,
                valorRelacionAnormalAltoAlto: props.analisis.valorRelacionAnormalAltoAlto,
                nota: props.analisis.nota,
                metodo: props.analisis.metodo,
            })
        }
        else
        {
            setValues({
                ...values,
                'idBeneficiario': props.idBeneficiario
            });
            
            http.get('/beneficiarios/'+props.idBeneficiario)
                .then(res => { setBeneficiario(res.data[0])
                })
                .catch((e) => {
                console.log(e)
                });
        }
    }, []);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const handleMicroAlbuminaChange = (event) => {
        handleInputChange(event);
        validateMicroAlbumina(event.target.value);
    }

    const validateMicroAlbumina = (microAlbumina) =>
    {
        if(microAlbumina.length > 0 & (!isDecimal(microAlbumina) | isNullOrWhitespace(microAlbumina)))
        {
            setErrores({
                ...errores,
                'microAlbumina': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'microAlbumina': false
            });
        }
    }

    const handleValorMicroAlbuminaBajoChange = (event) => {
        handleInputChange(event);
        validateValorMicroAlbuminaBajo(event.target.value);
    }

    const validateValorMicroAlbuminaBajo = (valorMicroAlbuminaBajo) =>
    {
        if(valorMicroAlbuminaBajo.length > 0 & (!isDecimal(valorMicroAlbuminaBajo) | isNullOrWhitespace(valorMicroAlbuminaBajo)))
        {
            setErrores({
                ...errores,
                'valorMicroAlbuminaBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorMicroAlbuminaBajo': false
            });
        }
    }

    const handleValorMicroAlbuminaAltoChange = (event) => {
        handleInputChange(event);
        validateValorMicroAlbuminaAltoChange(event.target.value);
    }

    const validateValorMicroAlbuminaAltoChange = (valorMicroAlbuminaAlto) =>
    {
        if(valorMicroAlbuminaAlto.length > 0 & (!isDecimal(valorMicroAlbuminaAlto) | isNullOrWhitespace(valorMicroAlbuminaAlto)))
        {
            setErrores({
                ...errores,
                'valorMicroAlbuminaAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorMicroAlbuminaAlto': false
            });
        }
    }

    const handleCreatininaChange = (event) => {
        handleInputChange(event);
        validateCreatinina(event.target.value);
    }

    const validateCreatinina = (creatinina) =>
    {
        if(creatinina.length > 0 & (!isDecimal(creatinina) | isNullOrWhitespace(creatinina)))
        {
            setErrores({
                ...errores,
                'creatinina': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatinina': false
            });
        }
    }

    const handleValorCreatininaBajoChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaBajo(event.target.value);
    }

    const validateValorCreatininaBajo = (valorCreatininaBajo) =>
    {
        if(valorCreatininaBajo.length > 0 & (!isDecimal(valorCreatininaBajo) | isNullOrWhitespace(valorCreatininaBajo)))
        {
            setErrores({
                ...errores,
                'valorCreatininaBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaBajo': false
            });
        }
    }

    const handleValorCreatininaAltoChange = (event) => {
        handleInputChange(event);
        validateValorCreatininaAltoChange(event.target.value);
    }

    const validateValorCreatininaAltoChange = (valorCreatininaAlto) =>
    {
        if(valorCreatininaAlto.length > 0 & (!isDecimal(valorCreatininaAlto) | isNullOrWhitespace(valorCreatininaAlto)))
        {
            setErrores({
                ...errores,
                'valorCreatininaAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorCreatininaAlto': false
            });
        }
    }

    const handleRelacionChange = (event) => {
        handleInputChange(event);
        validateRelacion(event.target.value);
    }

    const validateRelacion = (relacion) =>
    {
        if(relacion.length > 0 & (!isDecimal(relacion) | isNullOrWhitespace(relacion)))
        {
            setErrores({
                ...errores,
                'relacion': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'relacion': false
            });
        }
    }

    const handleValorRelacionNormalBajoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionNormalBajo(event.target.value);
    }

    const validateValorRelacionNormalBajo = (valorRelacionNormalBajo) =>
    {
        if(valorRelacionNormalBajo.length > 0 & (!isDecimal(valorRelacionNormalBajo) | isNullOrWhitespace(valorRelacionNormalBajo)))
        {
            setErrores({
                ...errores,
                'valorRelacionNormalBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionNormalBajo': false
            });
        }
    }

    const handleValorRelacionNormalAltoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionNormalAltoChange(event.target.value);
    }

    const validateValorRelacionNormalAltoChange = (valorRelacionNormalAlto) =>
    {
        if(valorRelacionNormalAlto.length > 0 & (!isDecimal(valorRelacionNormalAlto) | isNullOrWhitespace(valorRelacionNormalAlto)))
        {
            setErrores({
                ...errores,
                'valorRelacionNormalAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionNormalAlto': false
            });
        }
    }

    const handleValorRelacionAnormalBajoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionAnormalBajo(event.target.value);
    }

    const validateValorRelacionAnormalBajo = (valorRelacionAnormalBajo) =>
    {
        if(valorRelacionAnormalBajo.length > 0 & (!isDecimal(valorRelacionAnormalBajo) | isNullOrWhitespace(valorRelacionAnormalBajo)))
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalBajo': false
            });
        }
    }

    const handleValorRelacionAnormalAltoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionAnormalAltoChange(event.target.value);
    }

    const validateValorRelacionAnormalAltoChange = (valorRelacionAnormalAlto) =>
    {
        if(valorRelacionAnormalAlto.length > 0 & (!isDecimal(valorRelacionAnormalAlto) | isNullOrWhitespace(valorRelacionAnormalAlto)))
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAlto': false
            });
        }
    }

    const handleValorRelacionAnormalAltoBajoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionAnormalAltoBajo(event.target.value);
    }

    const validateValorRelacionAnormalAltoBajo = (valorRelacionAnormalAltoBajo) =>
    {
        if(valorRelacionAnormalAltoBajo.length > 0 & (!isDecimal(valorRelacionAnormalAltoBajo) | isNullOrWhitespace(valorRelacionAnormalAltoBajo)))
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAltoBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAltoBajo': false
            });
        }
    }

    const handleValorRelacionAnormalAltoAltoChange = (event) => {
        handleInputChange(event);
        validateValorRelacionAnormalAltoAltoChange(event.target.value);
    }

    const validateValorRelacionAnormalAltoAltoChange = (valorRelacionAnormalAltoAlto) =>
    {
        if(valorRelacionAnormalAltoAlto.length > 0 & (!isDecimal(valorRelacionAnormalAltoAlto) | isNullOrWhitespace(valorRelacionAnormalAltoAlto)))
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAltoAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorRelacionAnormalAltoAlto': false
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
        if(errores.microAlbumina || errores.valorMicroAlbuminaBajo || errores.valorMicroAlbuminaAlto || errores. creatinina 
            || errores.valorCreatininaBajo || errores.valorCreatininaAlto || errores.relacion || errores.valorRelacionNormalBajo 
            || errores.valorRelacionNormalAlto || errores.valorRelacionAnormalBajo || errores.valorRelacionAnormalAlto 
            || errores.valorRelacionAnormalAltoBajo || errores.valorRelacionAnormalAltoAlto || errores.nota || errores.metodo)
            submit = false;
        
            if(submit)
            {
                if(props.editar)
                {
                    http.put('/microalbuminuria/'+props.analisis.idMicroalbuminuria, values)
                    .then(res => {
                        props.history.push("/microalbuminuria/"+props.analisis.idMicroalbuminuria+"?editarMicroalbuminuria=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/microalbuminuria/"+props.analisis.idMicroalbuminuria+"?editarMicroalbuminuria=0");
                    });
                }
                else
                {
                    http.post('/microalbuminuria', values)
                    .then(res => {
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarMicroalbuminuria=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarMicroalbuminuria=0");
                    });
                }
            }
    }

    return (
        <center className={classes.root}>
            <Typography variant="h5">Microalbuminuría de {props.editar ? props.analisis.nombreBeneficiario : beneficiario.nombreBeneficiario} </Typography>
            <form>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.m}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="microAlbumina" className={classes.flex}>
                    <FormControl error={errores.microAlbumina} className={classes.s}>
                        <InputLabel htmlFor="component-error">Micro Albumina</InputLabel>
                        <Input
                        id="component-error"
                        value={values.microAlbumina}
                        name="microAlbumina"
                        onChange={handleMicroAlbuminaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.microAlbumina ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores" className={classes.flexCenter}>
                            <FormControl error={errores.valorMicroAlbuminaBajo} className={classes.s}>
                                <Input
                                id="component-error"
                                value={values.valorMicroAlbuminaBajo}
                                name="valorMicroAlbuminaBajo"
                                onChange={handleValorMicroAlbuminaBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorMicroAlbuminaBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorMicroAlbuminaAlto} className={classes.s}>
                                <Input
                                id="component-error"
                                value={values.valorMicroAlbuminaAlto}
                                name="valorMicroAlbuminaAlto"
                                onChange={handleValorMicroAlbuminaAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorMicroAlbuminaAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL</Typography>
                        </div>
                    </div>
                </div>
                <div id="creatinina" className={classes.flex}>
                    <FormControl error={errores.creatinina} className={classes.s}>
                        <InputLabel htmlFor="component-error">Creatinina</InputLabel>
                        <Input
                        id="component-error"
                        value={values.creatinina}
                        name="creatinina"
                        onChange={handleCreatininaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.creatinina ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores" className={classes.flexCenter}>
                            <FormControl error={errores.valorCreatininaBajo} className={classes.s}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaBajo}
                                name="valorCreatininaBajo"
                                onChange={handleValorCreatininaBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorCreatininaBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorCreatininaAlto} className={classes.s}>
                                <Input
                                id="component-error"
                                value={values.valorCreatininaAlto}
                                name="valorCreatininaAlto"
                                onChange={handleValorCreatininaAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorCreatininaAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL</Typography>
                        </div>
                    </div>
                </div>
                <div id="relacion" className={classes.flex}>
                    <FormControl error={errores.relacion} className={classes.textoCorto}>
                        <InputLabel htmlFor="component-error">Relación Microalbumina/Creatinina</InputLabel>
                        <Input
                        id="component-error"
                        value={values.relacion}
                        name="relacion"
                        onChange={handleRelacionChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.relacion ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores-normal" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.s}>NORMAL = </Typography>
                            <FormControl error={errores.valorRelacionNormalBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionNormalBajo}
                                name="valorRelacionNormalBajo"
                                onChange={handleValorRelacionNormalBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionNormalBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorRelacionNormalAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionNormalAlto}
                                name="valorRelacionNormalAlto"
                                onChange={handleValorRelacionNormalAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionNormalAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>mg/g</Typography>
                        </div>
                        <div id="valores-anormal" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.s}>ANORMAL = </Typography>
                            <FormControl error={errores.valorRelacionAnormalBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionAnormalBajo}
                                name="valorRelacionAnormalBajo"
                                onChange={handleValorRelacionAnormalBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionAnormalBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorRelacionAnormalAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionAnormalAlto}
                                name="valorRelacionAnormalAlto"
                                onChange={handleValorRelacionAnormalAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionAnormalAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>mg/g</Typography>
                        </div>
                        <div id="valores-anormal-alto" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.textoCorto}>ANORMAL ALTO = </Typography>
                            <FormControl error={errores.valorRelacionAnormalAltoBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionAnormalAltoBajo}
                                name="valorRelacionAnormalAltoBajo"
                                onChange={handleValorRelacionAnormalAltoBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionAnormalAltoBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorRelacionAnormalAltoAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorRelacionAnormalAltoAlto}
                                name="valorRelacionAnormalAltoAlto"
                                onChange={handleValorRelacionAnormalAltoAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorRelacionAnormalAltoAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>mg/g</Typography>
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
                    <Button variant="contained" color='primary' onClick={handleSubmit}>{props.editar ? 'Editar' : 'Registrar'}</Button>
                </div>
            </form>
        </center>
    )
}