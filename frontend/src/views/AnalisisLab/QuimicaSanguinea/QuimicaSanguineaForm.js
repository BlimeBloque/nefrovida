import React, { useState, useEffect } from 'react'
import {FormControl, Input, InputLabel, makeStyles, Typography, Button, FormHelperText, TextField} from '@material-ui/core';
import http from '../../../http-common';
import {isNullOrWhitespace, isDecimal} from '../../../components/utils';
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
    glucosa: '',
    valorGlucosaBajo: 70.0,
    valorGlucosaAlto: 100.0,
    urea: '',
    valorUreaBajo: 15.0,
    valorUreaAlto: 45.0,
    bun: '',
    valorBunBajo: 7.0,
    valorBunAlto: 15.0,
    creatinina: '',
    creatininaMujerBajo: 0.5,
    creatininaMujerAlto: 1.0,
    creatininaHombreBajo: 0.7,
    creatininaHombreAlto: 1.2,
    nota: '',
    metodo: 'Colorimétrico',
}

const initialErrorValues = {
    glucosa: false,
    valorGlucosaBajo: false,
    valorGlucosaAlto: false,
    urea: false,
    valorUreaBajo: false,
    valorUreaAlto: false,
    bun: false,
    valorBunBajo: false,
    valorBunAlto: false,
    creatinina: false,
    creatininaMujerBajo: false,
    creatininaMujerAlto: false,
    creatininaHombreBajo: false,
    creatininaHombreAlto: false,
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
                glucosa: props.analisis.glucosa,
                valorGlucosaBajo: props.analisis.valorGlucosaBajo,
                valorGlucosaAlto: props.analisis.valorGlucosaAlto,
                urea: props.analisis.urea,
                valorUreaBajo: props.analisis.valorUreaBajo,
                valorUreaAlto: props.analisis.valorUreaAlto,
                bun: props.analisis.bun,
                valorBunBajo: props.analisis.valorBunBajo,
                valorBunAlto: props.analisis.valorBunAlto,
                creatinina: props.analisis.creatinina,
                creatininaMujerBajo: props.analisis.creatininaMujerBajo,
                creatininaMujerAlto: props.analisis.creatininaMujerAlto,
                creatininaHombreBajo: props.analisis.creatininaHombreBajo,
                creatininaHombreAlto: props.analisis.creatininaHombreAlto,
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

    const handleGlucosaChange = (event) => {
        handleInputChange(event);
        validateGlucosa(event.target.value);
    }

    const validateGlucosa = (glucosa) =>
    {
        if(glucosa.length > 0 & (!isDecimal(glucosa) | isNullOrWhitespace(glucosa)))
        {
            setErrores({
                ...errores,
                'glucosa': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'glucosa': false
            });
        }
    }

    const handleValorGlucosaBajoChange = (event) => {
        handleInputChange(event);
        validateValorGlucosaBajo(event.target.value);
    }

    const validateValorGlucosaBajo = (valorGlucosaBajo) =>
    {
        if(valorGlucosaBajo.length > 0 & (!isDecimal(valorGlucosaBajo) | isNullOrWhitespace(valorGlucosaBajo)))
        {
            setErrores({
                ...errores,
                'valorGlucosaBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorGlucosaBajo': false
            });
        }
    }

    const handleValorGlucosaAltoChange = (event) => {
        handleInputChange(event);
        validateValorGlucosaAltoChange(event.target.value);
    }

    const validateValorGlucosaAltoChange = (valorGlucosaAlto) =>
    {
        if(valorGlucosaAlto.length > 0 & (!isDecimal(valorGlucosaAlto) | isNullOrWhitespace(valorGlucosaAlto)))
        {
            setErrores({
                ...errores,
                'valorGlucosaAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorGlucosaAlto': false
            });
        }
    }

    const handleUreaChange = (event) => {
        handleInputChange(event);
        validateUrea(event.target.value);
    }

    const validateUrea = (urea) =>
    {
        if(urea.length > 0 & (!isDecimal(urea) | isNullOrWhitespace(urea)))
        {
            setErrores({
                ...errores,
                'urea': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'urea': false
            });
        }
    }

    const handleValorUreaBajoChange = (event) => {
        handleInputChange(event);
        validateValorUreaBajo(event.target.value);
    }

    const validateValorUreaBajo = (valorUreaBajo) =>
    {
        if(valorUreaBajo.length > 0 & (!isDecimal(valorUreaBajo) | isNullOrWhitespace(valorUreaBajo)))
        {
            setErrores({
                ...errores,
                'valorUreaBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorUreaBajo': false
            });
        }
    }

    const handleValorUreaAltoChange = (event) => {
        handleInputChange(event);
        validateValorUreaAltoChange(event.target.value);
    }

    const validateValorUreaAltoChange = (valorUreaAlto) =>
    {
        if(valorUreaAlto.length > 0 & (!isDecimal(valorUreaAlto) | isNullOrWhitespace(valorUreaAlto)))
        {
            setErrores({
                ...errores,
                'valorUreaAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorUreaAlto': false
            });
        }
    }

    const handleBunChange = (event) => {
        handleInputChange(event);
        validateBun(event.target.value);
    }

    const validateBun = (bun) =>
    {
        if(bun.length > 0 & (!isDecimal(bun) | isNullOrWhitespace(bun)))
        {
            setErrores({
                ...errores,
                'bun': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'bun': false
            });
        }
    }

    const handleValorBunBajoChange = (event) => {
        handleInputChange(event);
        validateValorBunBajo(event.target.value);
    }

    const validateValorBunBajo = (valorBunBajo) =>
    {
        if(valorBunBajo.length > 0 & (!isDecimal(valorBunBajo) | isNullOrWhitespace(valorBunBajo)))
        {
            setErrores({
                ...errores,
                'valorBunBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorBunBajo': false
            });
        }
    }

    const handleValorBunAltoChange = (event) => {
        handleInputChange(event);
        validateValorBunAltoChange(event.target.value);
    }

    const validateValorBunAltoChange = (valorBunAlto) =>
    {
        if(valorBunAlto.length > 0 & (!isDecimal(valorBunAlto) | isNullOrWhitespace(valorBunAlto)))
        {
            setErrores({
                ...errores,
                'valorBunAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'valorBunAlto': false
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

    const handleCreatininaMujerBajoChange = (event) => {
        handleInputChange(event);
        validateCreatininaMujerBajo(event.target.value);
    }

    const validateCreatininaMujerBajo = (creatininaMujerBajo) =>
    {
        if(creatininaMujerBajo.length > 0 & (!isDecimal(creatininaMujerBajo) | isNullOrWhitespace(creatininaMujerBajo)))
        {
            setErrores({
                ...errores,
                'creatininaMujerBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatininaMujerBajo': false
            });
        }
    }

    const handleCreatininaMujerAltoChange = (event) => {
        handleInputChange(event);
        validateCreatininaMujerAlto(event.target.value);
    }

    const validateCreatininaMujerAlto = (creatininaMujerAlto) =>
    {
        if(creatininaMujerAlto.length > 0 & (!isDecimal(creatininaMujerAlto) | isNullOrWhitespace(creatininaMujerAlto)))
        {
            setErrores({
                ...errores,
                'creatininaMujerAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatininaMujerAlto': false
            });
        }
    }

    const handleCreatininaHombreBajoChange = (event) => {
        handleInputChange(event);
        validateCreatininaHombreBajo(event.target.value);
    }

    const validateCreatininaHombreBajo = (creatininaHombreBajo) =>
    {
        if(creatininaHombreBajo.length > 0 & (!isDecimal(creatininaHombreBajo) | isNullOrWhitespace(creatininaHombreBajo)))
        {
            setErrores({
                ...errores,
                'creatininaHombreBajo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatininaHombreBajo': false
            });
        }
    }

    const handleCreatininaHombreAltoChange = (event) => {
        handleInputChange(event);
        validateCreatininaHombreAlto(event.target.value);
    }

    const validateCreatininaHombreAlto = (creatininaHombreAlto) =>
    {
        if(creatininaHombreAlto.length > 0 & (!isDecimal(creatininaHombreAlto) | isNullOrWhitespace(creatininaHombreAlto)))
        {
            setErrores({
                ...errores,
                'creatininaHombreAlto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'creatininaHombreAlto': false
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
        if(errores.glucosa || errores.valorGlucosaBajo || errores.valorGlucosaAlto || errores.urea || errores.valorUreaBajo || errores.valorUreaAlto 
            || errores.bun || errores.valorBunBajo || errores.valorBunAlto || errores.creatinina || errores.creatininaMujerBajo || errores.creatininaMujerAlto 
            || errores.creatininaHombreBajo || errores.creatininaHombreAlto || errores.nota || errores.metodo)
            submit = false;

        if(submit)
        {
            if(props.editar)
            {
                http.put('/quimicaSanguinea/'+props.analisis.idQuimicaSanguinea, values)
                    .then(res => {
                        props.history.push("/quimicaSanguinea/"+props.analisis.idQuimicaSanguinea+"?editarQuimicaSanguinea=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/quimicaSanguinea/"+props.analisis.idQuimicaSanguinea+"?editarQuimicaSanguinea=0");
                    });
            }
            else
            {
                http.post('/quimicaSanguinea', values)
                    .then(res => {
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarQuimicaSanguinea=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarQuimicaSanguinea=0");
                    });
            }
        }
    }

    return (
        <center className={classes.root}>
            <Typography variant="h5">Química Sanguínea de {props.editar ? props.analisis.nombreBeneficiario : beneficiario.nombreBeneficiario}</Typography>
            <form>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.m}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="glucosa" className={classes.flex}>
                    <FormControl error={errores.glucosa} className={classes.s}>
                        <InputLabel htmlFor="component-error">Glucosa</InputLabel>
                        <Input
                        id="component-error"
                        value={values.glucosa}
                        name="glucosa"
                        onChange={handleGlucosaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.glucosa ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores" className={classes.flexCenter}>
                            <FormControl error={errores.valorGlucosaBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorGlucosaBajo}
                                name="valorGlucosaBajo"
                                onChange={handleValorGlucosaBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorGlucosaBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorGlucosaAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorGlucosaAlto}
                                name="valorGlucosaAlto"
                                onChange={handleValorGlucosaAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorGlucosaAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL</Typography>
                        </div>
                    </div>
                </div>
                <div id="urea" className={classes.flex}>
                    <FormControl error={errores.urea} className={classes.s}>
                        <InputLabel htmlFor="component-error">Urea</InputLabel>
                        <Input
                        id="component-error"
                        value={values.urea}
                        name="urea"
                        onChange={handleUreaChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.urea ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores" className={classes.flexCenter}>
                            <FormControl error={errores.valorUreaBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorUreaBajo}
                                name="valorUreaBajo"
                                onChange={handleValorUreaBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorUreaBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorUreaAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorUreaAlto}
                                name="valorUreaAlto"
                                onChange={handleValorUreaAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorUreaAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL</Typography>
                        </div>
                    </div>
                </div>
                <div id="bun" className={classes.flex}>
                    <FormControl error={errores.bun} className={classes.s}>
                        <InputLabel htmlFor="component-error">Bun</InputLabel>
                        <Input
                        id="component-error"
                        value={values.bun}
                        name="bun"
                        onChange={handleBunChange}
                        aria-describedby="component-error-text"
                        type="number"
                        />
                        <FormHelperText style={{display: errores.bun ? "block" : "none"}} id="component-error-text">
                            Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                        </FormHelperText>
                    </FormControl>
                    <div>
                        <div id="valores" className={classes.flexCenter}>
                            <FormControl error={errores.valorBunBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorBunBajo}
                                name="valorBunBajo"
                                onChange={handleValorBunBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorBunBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.valorBunAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.valorBunAlto}
                                name="valorBunAlto"
                                onChange={handleValorBunAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.valorBunAlto ? "block" : "none"}} id="component-error-text">
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
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <FormControl error={errores.creatininaMujerBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.creatininaMujerBajo}
                                name="creatininaMujerBajo"
                                onChange={handleCreatininaMujerBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.creatininaMujerBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.creatininaMujerAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.creatininaMujerAlto}
                                name="creatininaMujerAlto"
                                onChange={handleCreatininaMujerAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.creatininaMujerAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <FormControl error={errores.creatininaHombreBajo} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.creatininaHombreBajo}
                                name="creatininaHombreBajo"
                                onChange={handleCreatininaHombreBajoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.creatininaHombreBajo ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.xs}>-</Typography>
                            <FormControl error={errores.creatininaHombreAlto} className={classes.xs}>
                                <Input
                                id="component-error"
                                value={values.creatininaHombreAlto}
                                name="creatininaHombreAlto"
                                onChange={handleCreatininaHombreAltoChange}
                                aria-describedby="component-error-text"
                                type="number"
                                disabled={Cookies.get("roles").includes("Administrador") ? false : true}
                                />
                                <FormHelperText style={{display: errores.creatininaHombreAlto ? "block" : "none"}} id="component-error-text">
                                    Escribe un valor válido<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                                </FormHelperText>
                            </FormControl>
                            <Typography variant="body1" className={classes.textoCorto}>mg/dL HOMBRES</Typography>
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
    );
}