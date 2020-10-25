import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function DiagnosticoTratamiento(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleDiagnosticosChange = (event) => {
        handleInputChange(event);
        validateDiagnosticos(event.target.value);
    }

    const validateDiagnosticos = (diagnosticos) =>
    {
        if(props.isNullOrWhitespace(diagnosticos))
        {
            setErrores({
                ...errores,
                'diagnosticos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'diagnosticos': false
            });
        }
    }

    const handlePlanDeTratamientoChange = (event) => {
        handleInputChange(event);
        validatePlanDeTratamiento(event.target.value);
    }

    const validatePlanDeTratamiento = (pdTratamiento) =>
    {
        if(props.isNullOrWhitespace(pdTratamiento))
        {
            setErrores({
                ...errores,
                'planDeTratamiento': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'planDeTratamiento': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
            <FormControl error={errores.diagnosticos} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Diagnósticos</InputLabel>
                <Input
                id="component-error"
                value={values.diagnosticos}
                name="diagnosticos"
                onChange={handleDiagnosticosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.diagnosticos ? "block" : "none"}} id="component-error-text">
                    Campo Requerido
                </FormHelperText>
            </FormControl>
            </div>
            <FormControl error={errores.planDeTratamiento} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Plan de Tratamiento</InputLabel>
                <Input
                id="component-error"
                value={values.planDeTratamiento}
                name="planDeTratamiento"
                onChange={handlePlanDeTratamientoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.planDeTratamiento ? "block" : "none"}} id="component-error-text">
                    Campo Requerido
                </FormHelperText>
            </FormControl>
        </div>
    );
}