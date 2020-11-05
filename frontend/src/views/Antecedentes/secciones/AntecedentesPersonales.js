import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function AntecedentesPersonales(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handlePersonalesPatologicosChange = (event) => {
        handleInputChange(event);
        validatePersonalesPatologicos(event.target.value);
    }

    const validatePersonalesPatologicos = (perPat) =>
    {
        if(perPat.length > 0 & (props.isNullOrWhitespace(perPat)))
        {
            setErrores({
                ...errores,
                'personalesPatologicos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'personalesPatologicos': false
            });
        }
    }

    const handlePersonalesNoPatologicosChange = (event) => {
        handleInputChange(event);
        validatePersonalesNoPatologicos(event.target.value);
    }

    const validatePersonalesNoPatologicos = (perNoPat) =>
    {
        if(perNoPat.length > 0 & (props.isNullOrWhitespace(perNoPat)))
        {
            setErrores({
                ...errores,
                'personalesNoPatologicos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'personalesNoPatologicos': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
                <FormControl error={errores.personalesPatologicos} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Personales Patológicos</InputLabel>
                    <Input
                    id="component-error"
                    value={values.personalesPatologicos}
                    name="personalesPatologicos"
                    onChange={handlePersonalesPatologicosChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.personalesPatologicos ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>
            </div>
                <FormControl error={errores.personalesNoPatologicos} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Personales No Patológicos</InputLabel>
                    <Input
                    id="component-error"
                    name="personalesNoPatologicos"
                    value={values.personalesNoPatologicos}
                    onChange={handlePersonalesNoPatologicosChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.personalesNoPatologicos ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>

        </div>
    );
}