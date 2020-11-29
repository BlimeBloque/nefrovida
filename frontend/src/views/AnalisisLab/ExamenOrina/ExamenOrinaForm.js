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
}));

const initialValues = {
    idBeneficiario: 0,
    color: '',
    aspecto: '',
    ph: '',
    densidad: '',
    nitritos: '',
    glucosa: '',
    proteinas: '',
    hemoglobina: '',
    cuerposCetonicos: '',
    bilirribuna: '',
    urobilinogeno: '',
    leucocitos: '',
    eritrocitosIntactos: '',
    eritrocitosCrenados: '',
    observacionLeucocitos: '',
    cristales: '',
    cilindros: '',
    celulasEpiteliales: '',
    bacterias: '',
    nota: '',
}

const initialErrorValues = {
    idBeneficiario: false,
    color: false,
    aspecto: false,
    ph: false,
    densidad: false,
    nitritos: false,
    glucosa: false,
    proteinas: false,
    hemoglobina: false,
    cuerposCetonicos: false,
    bilirribuna: false,
    urobilinogeno: false,
    leucocitos: false,
    eritrocitosIntactos: false,
    eritrocitosCrenados: false,
    observacionLeucocitos: false,
    cristales: false,
    cilindros: false,
    celulasEpiteliales: false,
    bacterias: false,
    nota: false,
}

export default function ExamenOrinaForm (props)
{
    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    useEffect(() => {

        if(props.editar)
        {
            setValues({
                idBeneficiario: props.analisis.idBeneficiario,
                color: props.analisis.color,
                aspecto: props.analisis.aspecto,
                ph: props.analisis.ph,
                densidad: props.analisis.densidad,
                nitritos: props.analisis.nitritos,
                glucosa: props.analisis.glucosa,
                proteinas: props.analisis.proteinas,
                hemoglobina: props.analisis.hemoglobina,
                cuerposCetonicos: props.analisis.cuerposCetonicos,
                bilirribuna: props.analisis.bilirribuna,
                urobilinogeno: props.analisis.urobilinogeno,
                leucocitos: props.analisis.leucocitos,
                eritrocitosIntactos: props.analisis.eritrocitosIntactos,
                eritrocitosCrenados: props.analisis.eritrocitosCrenados,
                observacionLeucocitos: props.analisis.observacionLeucocitos,
                cristales: props.analisis.cristales,
                cilindros: props.analisis.cilindros,
                celulasEpiteliales: props.analisis.celulasEpiteliales,
                bacterias: props.analisis.bacterias,
                nota: props.analisis.nota,
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
                })
        }
    }, []);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const handleColorChange = (event) => {
        handleInputChange(event);
        validateColor(event.target.value);
    }

    const validateColor = (color) => {
        if(hasNumber(color) |  (color.length > 0 & isNullOrWhitespace(color)))
        {
            setErrores({
                ...errores,
                'color': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'color': false
            });
        }
    }

    const handleAspectoChange = (event) => {
        handleInputChange(event);
        validateAspecto(event.target.value);
    }

    const validateAspecto = (aspecto) => {
        if(hasNumber(aspecto) |  (aspecto.length > 0 & isNullOrWhitespace(aspecto)))
        {
            setErrores({
                ...errores,
                'aspecto': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'aspecto': false
            });
        }
    }

    const handlePHChange = (event) => {
        handleInputChange(event);
        validatePH(event.target.value);
    }

    const validatePH = (ph) =>
    {
        if(ph.length > 0 & (!isDecimal(ph) | isNullOrWhitespace(ph)))
        {
            setErrores({
                ...errores,
                'ph': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'ph': false
            });
        }
    }

    const handleDensidadChange = (event) => {
        handleInputChange(event);
        validateDensidad(event.target.value);
    }

    const validateDensidad = (densidad) =>
    {
        if(densidad.length > 0 & (!isDecimal(densidad) | isNullOrWhitespace(densidad)))
        {
            setErrores({
                ...errores,
                'densidad': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'densidad': false
            });
        }
    }
    const handleNitritosChange = (event) => {
        handleInputChange(event);
        validateNitritos(event.target.value);
    }

    const validateNitritos = (nitritos) =>
    {
        if(nitritos.length > 0 & isNullOrWhitespace(nitritos))
        {
            setErrores({
                ...errores,
                'nitritos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'nitritos': false
            });
        }
    }

    const handleGlucosaChange = (event) => {
        handleInputChange(event);
        validateGlucosa(event.target.value);
    }

    const validateGlucosa = (glucosa) =>
    {
        if(glucosa.length > 0 & isNullOrWhitespace(glucosa))
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

    const handleProteinasChange = (event) => {
        handleInputChange(event);
        validateProteinas(event.target.value);
    }

    const validateProteinas = (proteinas) =>
    {
        if(proteinas.length > 0 & isNullOrWhitespace(proteinas))
        {
            setErrores({
                ...errores,
                'proteinas': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'proteinas': false
            });
        }
    }

    const handleHemoglobinaChange = (event) => {
        handleInputChange(event);
        validateHemoglobina(event.target.value);
    }

    const validateHemoglobina = (hemoglobina) =>
    {
        if(hemoglobina.length > 0 & isNullOrWhitespace(hemoglobina))
        {
            setErrores({
                ...errores,
                'hemoglobina': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'hemoglobina': false
            });
        }
    }

    const handleCuerposCetonicosChange = (event) => {
        handleInputChange(event);
        validateCuerposCetonicos(event.target.value);
    }

    const validateCuerposCetonicos = (cuerposCetonicos) =>
    {
        if(cuerposCetonicos.length > 0 & isNullOrWhitespace(cuerposCetonicos))
        {
            setErrores({
                ...errores,
                'cuerposCetonicos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'cuerposCetonicos': false
            });
        }
    }

    const handleBilirribunaChange = (event) => {
        handleInputChange(event);
        validateBilirribuna(event.target.value);
    }

    const validateBilirribuna = (bilirribuna) =>
    {
        if(bilirribuna.length > 0 & isNullOrWhitespace(bilirribuna))
        {
            setErrores({
                ...errores,
                'bilirribuna': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'bilirribuna': false
            });
        }
    }

    const handleUrobilinogenoChange = (event) => {
        handleInputChange(event);
        validateUrobilinogeno(event.target.value);
    }

    const validateUrobilinogeno = (urobilinogeno) =>
    {
        if(urobilinogeno.length > 0 & isNullOrWhitespace(urobilinogeno))
        {
            setErrores({
                ...errores,
                'urobilinogeno': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'urobilinogeno': false
            });
        }
    }

    const handleLeucocitosChange = (event) => {
        handleInputChange(event);
        validateLeucocitos(event.target.value);
    }

    const validateLeucocitos = (leucocitos) =>
    {
        if(leucocitos.length > 0 & isNullOrWhitespace(leucocitos))
        {
            setErrores({
                ...errores,
                'leucocitos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'leucocitos': false
            });
        }
    }

    const handleEritrocitosIntactosChange = (event) => {
        handleInputChange(event);
        validateEritrocitosIntactos(event.target.value);
    }

    const validateEritrocitosIntactos = (eritrocitosIntactos) =>
    {
        if(eritrocitosIntactos.length > 0 & isNullOrWhitespace(eritrocitosIntactos))
        {
            setErrores({
                ...errores,
                'eritrocitosIntactos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'leucocitos': false
            });
        }
    }
    
    const handleEritrocitosCrenadosChange = (event) => {
        handleInputChange(event);
        validateEritrocitosCrenados(event.target.value);
    }

    const validateEritrocitosCrenados = (eritrocitosCrenados) =>
    {
        if(eritrocitosCrenados.length > 0 & isNullOrWhitespace(eritrocitosCrenados))
        {
            setErrores({
                ...errores,
                'eritrocitosCrenados': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'eritrocitosCrenados': false
            });
        }
    }

    const handleObservacionLeucocitosChange = (event) => {
        handleInputChange(event);
        validateObservacionLeucocitos(event.target.value);
    }

    const validateObservacionLeucocitos = (observacionLeucocitos) =>
    {
        if(observacionLeucocitos.length > 0 & isNullOrWhitespace(observacionLeucocitos))
        {
            setErrores({
                ...errores,
                'observacionLeucocitos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'observacionLeucocitos': false
            });
        }
    }

    const handleCristalesChange = (event) => {
        handleInputChange(event);
        validateCristales(event.target.value);
    }

    const validateCristales = (cristales) =>
    {
        if(cristales.length > 0 & isNullOrWhitespace(cristales))
        {
            setErrores({
                ...errores,
                'cristales': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'cristales': false
            });
        }
    }
    
    const handleCilindrosChange = (event) => {
        handleInputChange(event);
        validateCilindros(event.target.value);
    }

    const validateCilindros = (cilindros) =>
    {
        if(cilindros.length > 0 & isNullOrWhitespace(cilindros))
        {
            setErrores({
                ...errores,
                'cilindros': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'cilindros': false
            });
        }
    }

    const handleCelulasEpitelialesChange = (event) => {
        handleInputChange(event);
        validateCelulasEpiteliales(event.target.value);
    }

    const validateCelulasEpiteliales = (celulasEpiteliales) =>
    {
        if(celulasEpiteliales.length > 0 & isNullOrWhitespace(celulasEpiteliales))
        {
            setErrores({
                ...errores,
                'celulasEpiteliales': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'celulasEpiteliales': false
            });
        }
    }

    const handleBacteriasChange = (event) => {
        handleInputChange(event);
        validateBacterias(event.target.value);
    }

    const validateBacterias = (bacterias) =>
    {
        if(bacterias.length > 0 & isNullOrWhitespace(bacterias))
        {
            setErrores({
                ...errores,
                'bacterias': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'bacterias': false
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
        if(errores.color || errores.aspecto || errores.ph || errores.densidad || errores.nitritos || errores.glucosa
            || errores. proteinas || errores.hemoglobina || errores.cuerposCetonicos || errores.bilirribuna
            || errores.urobilinogeno || errores.leucocitos || errores.eritrocitosIntactos || errores.eritrocitosCrenados
            || errores.observacionLeucocitos || errores.cristales || errores.cilindros || errores.celulasEpiteliales
            || errores.bacterias || errores.nota)
            submit = false;
        
        if(submit)
        {
            if(props.editar)
            {
                http.put('/examenOrina/'+props.analisis.idExamenOrina, values)
                        .then(res => {
                            props.history.push("/examenOrina/"+props.analisis.idExamenOrina+"?editarExamenOrina=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/examenOrina/"+props.analisis.idExamenOrina+"?editarExamenOrina=0");
                        });
            }
            else
            {
                http.post('/examenOrina', values)
                        .then(res => {
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarExamenOrina=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarExamenOrina=0");
                        });
            }
        }
    }

    return(
        <center className={classes.root}>
            <Typography variant="h5">Examen de Orina de {props.editar ? props.analisis.nombreBeneficiario : beneficiario.nombreBeneficiario} </Typography>
            <form>
                <Typography variant="h6">Examen Macroscópico</Typography>
                <FormControl error={errores.color} className={classes.textoLargo}>
                    <InputLabel htmlFor="color">Color</InputLabel>
                    <Input
                    id="color"
                    value={values.color}
                    name="color"
                    onChange={handleColorChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.color ? "block" : "none"}} id="component-error-text">
                        Escribe un color válido (no puede tener números).
                    </FormHelperText>
                </FormControl>
                <FormControl error={errores.aspecto} className={classes.textoLargo}>
                    <InputLabel htmlFor="color">Aspecto</InputLabel>
                    <Input
                    id="aspecto"
                    value={values.aspecto}
                    name="aspecto"
                    onChange={handleAspectoChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.aspecto ? "block" : "none"}} id="component-error-text">
                        Escribe un aspecto válido (no puede tener números).
                    </FormHelperText>
                </FormControl>

                <div id="examen-quimico">
                    <Typography variant="h6">Examen Químico</Typography>
                    <div className={classes.flex}>
                        <FormControl error={errores.ph} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">PH</InputLabel>
                            <Input
                            id="component-error"
                            value={values.ph}
                            name="ph"
                            onChange={handlePHChange}
                            aria-describedby="component-error-text"
                            type="number"
                            />
                            <FormHelperText style={{display: errores.ph ? "block" : "none"}} id="component-error-text">
                                Escribe un ph válido<br/>(Si es número cerrado escribir .0 Ej. 7.0).
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.densidad} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Densidad</InputLabel>
                            <Input
                            id="component-error"
                            value={values.densidad}
                            name="densidad"
                            onChange={handleDensidadChange}
                            aria-describedby="component-error-text"
                            type="number"
                            />
                            <FormHelperText style={{display: errores.densidad ? "block" : "none"}} id="component-error-text">
                                Escribe una densidad válida<br/>(Si es número cerrado escribir .0 Ej. 17.0).
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.nitritos} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Nitritos</InputLabel>
                            <Input
                            id="component-error"
                            value={values.nitritos}
                            name="nitritos"
                            onChange={handleNitritosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.nitritos ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.glucosa} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Glucosa</InputLabel>
                            <Input
                            id="component-error"
                            value={values.glucosa}
                            name="glucosa"
                            onChange={handleGlucosaChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.glucosa ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.proteinas} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Proteínas</InputLabel>
                            <Input
                            id="component-error"
                            value={values.proteinas}
                            name="proteinas"
                            onChange={handleProteinasChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.proteinas ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.hemoglobina} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Hemoglobina</InputLabel>
                            <Input
                            id="component-error"
                            value={values.hemoglobina}
                            name="hemoglobina"
                            onChange={handleHemoglobinaChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.hemoglobina ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.cuerposCetonicos} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Cuerpos Cetónicos</InputLabel>
                            <Input
                            id="component-error"
                            value={values.cuerposCetonicos}
                            name="cuerposCetonicos"
                            onChange={handleCuerposCetonicosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.cuerposCetonicos ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.bilirribuna} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Bilirribuna</InputLabel>
                            <Input
                            id="component-error"
                            value={values.bilirribuna}
                            name="bilirribuna"
                            onChange={handleBilirribunaChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.bilirribuna ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.urobilinogeno} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Urobilinogeno</InputLabel>
                            <Input
                            id="component-error"
                            value={values.urobilinogeno}
                            name="urobilinogeno"
                            onChange={handleUrobilinogenoChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.urobilinogeno ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.leucocitos} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Leucocitos</InputLabel>
                            <Input
                            id="component-error"
                            value={values.leucocitos}
                            name="leucocitos"
                            onChange={handleLeucocitosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.leucocitos ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                </div>
                <div id="observaciones-microscopicas">
                    <Typography variant="h6">Observaciones Microscópicas</Typography>
                    <div className={classes.flex}>
                        <FormControl error={errores.eritrocitosIntactos} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Eritrocitos Intactos</InputLabel>
                            <Input
                            id="component-error"
                            value={values.eritrocitosIntactos}
                            name="eritrocitosIntactos"
                            onChange={handleEritrocitosIntactosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.eritrocitosIntactos ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.eritrocitosCrenados} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Eritrocitos Crenados</InputLabel>
                            <Input
                            id="component-error"
                            value={values.eritrocitosCrenados}
                            name="eritrocitosCrenados"
                            onChange={handleEritrocitosCrenadosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.eritrocitosCrenados ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.observacionLeucocitos} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Observación de Leucocitos</InputLabel>
                            <Input
                            id="component-error"
                            value={values.observacionLeucocitos}
                            name="observacionLeucocitos"
                            onChange={handleObservacionLeucocitosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.observacionLeucocitos ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.cristales} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Cristales</InputLabel>
                            <Input
                            id="component-error"
                            value={values.cristales}
                            name="cristales"
                            onChange={handleCristalesChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.cristales ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.cilindros} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Cilindros</InputLabel>
                            <Input
                            id="component-error"
                            value={values.cilindros}
                            name="cilindros"
                            onChange={handleCilindrosChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.cilindros ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                        <FormControl error={errores.celulasEpiteliales} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Células Epiteliales</InputLabel>
                            <Input
                            id="component-error"
                            value={values.celulasEpiteliales}
                            name="celulasEpiteliales"
                            onChange={handleCelulasEpitelialesChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.celulasEpiteliales ? "block" : "none"}} id="component-error-text">
                                Escribe una respuesta válida.
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className={classes.flex}>
                        <FormControl error={errores.bacterias} className={classes.textoCorto}>
                            <InputLabel htmlFor="component-error">Bacterias</InputLabel>
                            <Input
                            id="component-error"
                            value={values.bacterias}
                            name="bacterias"
                            onChange={handleBacteriasChange}
                            aria-describedby="component-error-text"
                            />
                            <FormHelperText style={{display: errores.bacterias ? "block" : "none"}} id="component-error-text">
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
                </div>
                <div className={classes.botones}>
                    <Button variant="contained" color='primary' onClick={handleSubmit}>{props.editar ? 'Editar' : 'Registrar'}</Button>
                </div>
            </form>
        </center>
    )
}