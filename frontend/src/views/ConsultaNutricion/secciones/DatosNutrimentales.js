import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function DatosNutrimentales(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleOcupacionChange = (event) => {
        handleInputChange(event);
        validateOcupacion(event.target.value);
    }

    const validateOcupacion = (ocupacion) =>
    {
        if(props.hasNumber(ocupacion) | (ocupacion.length > 0 & props.isNullOrWhitespace(ocupacion)))
        {
            setErrores({
                ...errores,
                ['ocupacion']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['ocupacion']: false
            });
        }
    }

    const handleHorariosComidaChange = (event) => {
        handleInputChange(event);
        validateHorariosComida(event.target.value);
    }

    const validateHorariosComida = (horariosComida) =>
    {
        if(horariosComida.length > 0 & props.isNullOrWhitespace(horariosComida))
        {
            setErrores({
                ...errores,
                ['horariosComida']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['horariosComida']: false
            });
        }
    }

    const handleCantidadDestinadaAlimentosChange = (event) => {
        handleInputChange(event);
        validateCantidadDestinadaAlimentos(event.target.value);
    }

    const validateCantidadDestinadaAlimentos = (cantidadDestinadaAlimentos) =>
    {
        if(cantidadDestinadaAlimentos.length > 0 & props.isNullOrWhitespace(cantidadDestinadaAlimentos))
        {
            setErrores({
                ...errores,
                ['cantidadDestinadaAlimentos']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['cantidadDestinadaAlimentos']: false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={errores.ocupacion} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Ocupación</InputLabel>
                <Input
                id="component-error"
                value={values.ocupacion}
                name="ocupacion"
                onChange={handleOcupacionChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.ocupacion ? "block" : "none"}} id="component-error-text">
                    Escribe una ocupación válida (no puede tener números).
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.horariosComida} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Horarios de comida</InputLabel>
                <Input
                id="component-error"
                name="horariosComida"
                value={values.horariosComida}
                onChange={handleHorariosComidaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.horariosComida ? "block" : "none"}} id="component-error-text">
                    Escribe un horario de comida válido.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.cantidadDestinadaAlimentos} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Cantidad destinada a alimentos</InputLabel>
                <Input
                id="component-error"
                name="cantidadDestinadaAlimentos"
                value={values.cantidadDestinadaAlimentos}
                onChange={handleCantidadDestinadaAlimentosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.cantidadDestinadaAlimentos ? "block" : "none"}} id="component-error-text">
                    Escribe una cantidad de alimentos válida.
                </FormHelperText>
            </FormControl>

        </div>
    );
}