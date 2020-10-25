import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Neurologico(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleNeurologicoChange = (event) => {
        handleInputChange(event);
        validateNeurologico(event.target.value);
    }

    const validateNeurologico = (neurologico) =>
    {
        if(props.isNullOrWhitespace(neurologico))
        {
            setErrores({
                ...errores,
                'neurologicoEstadoMental': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'neurologicoEstadoMental': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={errores.neurologicoEstadoMental} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Describa el Estado Mental y Neurológico del Beneficiario</InputLabel>
                <Input
                id="component-error"
                value={values.neurologicoEstadoMental}
                name="neurologicoEstadoMental"
                onChange={handleNeurologicoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.neurologicoEstadoMental ? "block" : "none"}} id="component-error-text">
                    Campo Requerido
                </FormHelperText>
            </FormControl>
        </div>
    );
}