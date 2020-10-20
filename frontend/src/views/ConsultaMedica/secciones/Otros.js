import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Otros(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleOtrosChange = (event) => {
        handleInputChange(event);
        validateOtros(event.target.value);
    }

    const validateOtros = (otros) =>
    {
        if(props.isNullOrWhitespace(otros))
        {
            setErrores({
                ...errores,
                'otros': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'otros': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={errores.otros} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Ponga aquí sus observaciones.</InputLabel>
                <Input
                id="component-error"
                value={values.otros}
                name="otros"
                onChange={handleOtrosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.otros ? "block" : "none"}} id="component-error-text">
                    Campo Requerido
                </FormHelperText>
            </FormControl>
        </div>
    );
}