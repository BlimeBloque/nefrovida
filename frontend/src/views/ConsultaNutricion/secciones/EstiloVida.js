import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function EstiloVida(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleActividadFisicaChange = (event) => {
        handleInputChange(event);
        validateActividadFisica(event.target.value);
    }

    const validateActividadFisica = (actividadFisica) =>
    {
        if(actividadFisica.length > 0 & props.isNullOrWhitespace(actividadFisica))
        {
            setErrores({
                ...errores,
                'actividadFisica': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'actividadFisica': false
            });
        }
    }

    const handleHorasSueñoChange = (event) => {
        handleInputChange(event);
        validateHorasSueño(event.target.value);
    }

    const validateHorasSueño = (horasSueño) =>
    {
        if(horasSueño.length > 0 & props.isNullOrWhitespace(horasSueño))
        {
            setErrores({
                ...errores,
                'horasSueño': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'horasSueño': false
            });
        }
    }

    
    return(
        <div className={props.className}>
            <FormControl error={errores.actividadFisica} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Actividad Física/Tipo/Frecuencia</InputLabel>
                <Input
                id="component-error"
                value={values.actividadFisica}
                name="actividadFisica"
                onChange={handleActividadFisicaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.actividadFisica ? "block" : "none"}} id="component-error-text">
                    Escribe una actividad física válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.horasSueño} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Horas de Sueño</InputLabel>
                <Input
                id="component-error"
                name="horasSueño"
                value={values.horasSueño}
                onChange={handleHorasSueñoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.horasSueño ? "block" : "none"}} id="component-error-text">
                    Escribe horas de sueño válidas.
                </FormHelperText>
            </FormControl>

        </div>
    );
}