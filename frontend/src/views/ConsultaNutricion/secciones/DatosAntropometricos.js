import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Typography } from '@material-ui/core';

export default function DatosAntropometricos(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

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

    const handleAlturaChange = (event) => {
        handleInputChange(event);
        validateAltura(event.target.value);
    }

    const validateAltura = (altura) =>
    {
        if(altura.length > 0 & (!props.isDecimal(altura) | props.isNullOrWhitespace(altura)))
        {
            setErrores({
                ...errores,
                'altura': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'altura': false
            });
        }
    }

    const handleDiagnosticoChange = (event) => {
        handleInputChange(event);
        validateDiagnostico(event.target.value);
    }

    const validateDiagnostico = (diagnostico) =>
    {
        if(diagnostico.length > 0 & props.isNullOrWhitespace(diagnostico))
        {
            setErrores({
                ...errores,
                'diagnostico': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'diagnostico': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <Typography variant="p">
            Nota:<br/>
            La edad se obtiene de los datos del beneficiario.<br/>
            El IMC y el PI se calculan automáticamente y se pueden consultar al ver el detalle de la consulta que se está registrando.
            </Typography>
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
                        Escribe un peso válido<br/>(Si es número cerrado escribir .0 Ej. 50.0).
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.altura} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Estatura</InputLabel>
                    <Input
                    id="component-error"
                    name="altura"
                    value={values.altura}
                    onChange={handleAlturaChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.altura ? "block" : "none"}} id="component-error-text">
                        Escribe una estatura válida<br/> (Si es número cerrado escribir .0 Ej. 170.0).
                    </FormHelperText>
                </FormControl>
            </div>
            <FormControl error={errores.diagnostico} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">DX</InputLabel>
                <Input
                id="component-error"
                name="diagnostico"
                value={values.diagnostico}
                onChange={handleDiagnosticoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.diagnostico ? "block" : "none"}} id="component-error-text">
                    Escribe un DX válido.
                </FormHelperText>
            </FormControl>

        </div>
    );
}