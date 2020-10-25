import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function PadecimientoActual(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handlePadecimientoChange = (event) => {
        handleInputChange(event);
        validatePadecimiento(event.target.value);
    }

    const validatePadecimiento = (padecimiento) =>
    {
        if(props.isNullOrWhitespace(padecimiento))
        {
            setErrores({
                ...errores,
                'padecimientoActual': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'padecimientoActual': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={errores.padecimientoActual} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Describa el Padecimiento Actual del Beneficiario</InputLabel>
                <Input
                id="component-error"
                value={values.padecimientoActual}
                name="padecimientoActual"
                onChange={handlePadecimientoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.padecimientoActual ? "block" : "none"}} id="component-error-text">
                    Campo Requerido
                </FormHelperText>
            </FormControl>
        </div>
    );
}