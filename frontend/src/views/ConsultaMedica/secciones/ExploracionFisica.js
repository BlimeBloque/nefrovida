import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';

export default function ExploracionFisica(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleTaDerechoChange = (event) => {
        handleInputChange(event);
        validateTaDerecho(event.target.value);
    }

    const validateTaDerecho = (taDerecho) =>
    {
        if(taDerecho.length > 0 & props.isNullOrWhitespace(taDerecho))
        {
            setErrores({
                ...errores,
                'taDerecho': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'taDerecho': false
            });
        }
    }

    const handleTaIzquierdoChange = (event) => {
        handleInputChange(event);
        validateTaIzquierdo(event.target.value);
    }

    const validateTaIzquierdo = (taIzquierdo) =>
    {
        if(taIzquierdo.length > 0 & props.isNullOrWhitespace(taIzquierdo))
        {
            setErrores({
                ...errores,
                'taIzquierdo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'taIzquierdo': false
            });
        }
    }

    const handleFrecuenciaCardiacaChange = (event) => {
        handleInputChange(event);
        validateFrecuenciaCardiaca(event.target.value);
    }

    const validateFrecuenciaCardiaca = (fcardiaca) =>
    {
        if(fcardiaca.length > 0 & (!props.hasNumber(fcardiaca) | props.isNullOrWhitespace(fcardiaca)))
        {
            setErrores({
                ...errores,
                'frecuenciaCardiaca': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'frecuenciaCardiaca': false
            });
        }
    }

    const handleFrecuenciaRespiratoriaChange = (event) => {
        handleInputChange(event);
        validateFrecuenciaRespiratoria(event.target.value);
    }

    const validateFrecuenciaRespiratoria = (frespiratoria) =>
    {
        if(frespiratoria.length > 0 & (!props.hasNumber(frespiratoria) | props.isNullOrWhitespace(frespiratoria)))
        {
            setErrores({
                ...errores,
                'frecuenciaRespiratoria': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'frecuenciaRespiratoria': false
            });
        }
    }

    const handleTemperaturaChange = (event) => {
        handleInputChange(event);
        validateTemperatura(event.target.value);
    }

    const validateTemperatura = (temperatura) =>
    {
        if(temperatura.length > 0 & (!props.isDecimal(temperatura) | props.isNullOrWhitespace(temperatura)))
        {
            setErrores({
                ...errores,
                'temperatura': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'temperatura': false
            });
        }
    }

    const handlePesoChange = (event) => {
        handleInputChange(event);
        validatePeso(event.target.value);
    }

    const validatePeso = (peso) =>
    {
        if(peso.length > 0 & (!props.isDecimal(peso) | props.isNullOrWhitespace(peso)))
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

    const handleTallaChange = (event) => {
        handleInputChange(event);
        validateTalla(event.target.value);
    }

    const validateTalla = (talla) =>
    {
        if(talla.length > 0 & (!props.isDecimal(talla) | props.isNullOrWhitespace(talla)))
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

    const handleCabezaCuelloChange = (event) => {
        handleInputChange(event);
        validateCabezaCuello(event.target.value);
    }

    const validateCabezaCuello = (cabezaCuello) =>
    {
        if(cabezaCuello.length > 0 & props.isNullOrWhitespace(cabezaCuello))
        {
            setErrores({
                ...errores,
                'cabezaCuello': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'cabezaCuello': false
            });
        }
    }

    const handleToraxChange = (event) => {
        handleInputChange(event);
        validateTorax(event.target.value);
    }

    const validateTorax = (torax) =>
    {
        if(torax.length > 0 & props.isNullOrWhitespace(torax))
        {
            setErrores({
                ...errores,
                'torax': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'torax': false
            });
        }
    }

    const handleAbdomenChange = (event) => {
        handleInputChange(event);
        validateAbdomen(event.target.value);
    }

    const validateAbdomen = (abdomen) =>
    {
        if(abdomen.length > 0 & props.isNullOrWhitespace(abdomen))
        {
            setErrores({
                ...errores,
                'abdomen': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'abdomen': false
            });
        }
    }

    const handleExtremidadesChange = (event) => {
        handleInputChange(event);
        validateExtremidades(event.target.value);
    }

    const validateExtremidades = (extremidades) =>
    {
        if(extremidades.length > 0 & props.isNullOrWhitespace(extremidades))
        {
            setErrores({
                ...errores,
                'extremidades': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'extremidades': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
            <FormControl error={errores.taDerecho} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">T.A. Brazo Derecho</InputLabel>
                <Input
                id="component-error"
                name="taDerecho"
                value={values.taDerecho}
                onChange={handleTaDerechoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.taDerecho ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>
            </div>
            <div className={classes.flex}>
            <FormControl error={errores.taIzquierdo} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">T.A. Brazo Izquierdo</InputLabel>
                <Input
                id="component-error"
                name="taIzquierdo"
                value={values.taIzquierdo}
                onChange={handleTaIzquierdoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.taIzquierdo ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.frecuenciaCardiaca} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Frec. Cardíaca</InputLabel>
                    <Input
                    id="component-error"
                    name="frecuenciaCardiaca"
                    value={values.frecuenciaCardiaca}
                    onChange={handleFrecuenciaCardiacaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.frecuenciaCardiaca ? "block" : "none"}} id="component-error-text">
                        Escriba una frecuencia cardíaca válida
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.frecuenciaRespiratoria} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Frec. Respiratoria</InputLabel>
                    <Input
                    id="component-error"
                    name="frecuenciaRespiratoria"
                    value={values.frecuenciaRespiratoria}
                    onChange={handleFrecuenciaRespiratoriaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.frecuenciaRespiratoria ? "block" : "none"}} id="component-error-text">
                        Escriba una frecuencia respiratoria válida
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.temperatura} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Temperatura</InputLabel>
                    <Input
                    id="component-error"
                    name="temperatura"
                    value={values.temperatura}
                    onChange={handleTemperaturaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.temperatura ? "block" : "none"}} id="component-error-text">
                        Escriba una temperatura válida<br/> (Si es número cerrado escribir .0 Ej. 170.0).
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.peso} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Peso Actual</InputLabel>
                    <Input
                    id="component-error"
                    value={values.peso}
                    name="peso"
                    onChange={handlePesoChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.peso ? "block" : "none"}} id="component-error-text">
                        Escriba un peso válido<br/>(Si es número cerrado escribir .0 Ej. 50.0).
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.talla} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Talla</InputLabel>
                    <Input
                    id="component-error"
                    name="talla"
                    value={values.talla}
                    onChange={handleTallaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.talla ? "block" : "none"}} id="component-error-text">
                        Escriba una talla válida<br/> (Si es número cerrado escribir .0 Ej. 170.0).
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
            <FormControl error={errores.cabezaCuello} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Cabeza y Cuello</InputLabel>
                <Input
                id="component-error"
                name="cabezaCuello"
                value={values.cabezaCuello}
                onChange={handleCabezaCuelloChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.cabezaCuello ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>
            </div>
            <div className={classes.flex}>
            <FormControl error={errores.torax} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Tórax</InputLabel>
                <Input
                id="component-error"
                name="torax"
                value={values.torax}
                onChange={handleToraxChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.torax ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>
            </div>
            <div className={classes.flex}>
            <FormControl error={errores.abdomen} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Abdomen</InputLabel>
                <Input
                id="component-error"
                name="abdomen"
                value={values.abdomen}
                onChange={handleAbdomenChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.abdomen ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>
            </div>
            <FormControl error={errores.extremidades} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Extremidades</InputLabel>
                <Input
                id="component-error"
                name="extremidades"
                value={values.extremidades}
                onChange={handleExtremidadesChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.extremidades ? "block" : "none"}} id="component-error-text">
                    Campo Requerido.
                </FormHelperText>
            </FormControl>

        </div>
    );
}