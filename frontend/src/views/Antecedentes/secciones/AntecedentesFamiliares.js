import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AntecedentesFamiliares(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;
    const [value, setValue] = React.useState();

    const handlePadreVivoChange = (event) => {
        Number.parseInt(event);
        handleInputChange(event);
        setErrores({
            ...errores,
            'padreVivo': false
        })
    }

    const handleEnfermedadesPadreChange = (event) => {
        handleInputChange(event);
        validateEnfermedadesPadre(event.target.value);
    }

    const validateEnfermedadesPadre = (enfermedadesPadre) =>
    {
        if(enfermedadesPadre.length > 0 & (props.isNullOrWhitespace(enfermedadesPadre)))
        {
            setErrores({
                ...errores,
                'enfermedadesPadre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'enfermedadesPadre': false
            });
        }
    }

    const handleMadreVivoChange = (event) => {
        Number.parseInt(event);
        handleInputChange(event);
        setErrores({
            ...errores,
            'madreVivo': false
        })
    }

    const handleEnfermedadesMadreChange = (event) => {
        handleInputChange(event);
        validateEnfermedadesMadre(event.target.value);
    }

    const validateEnfermedadesMadre = (enfermedadesMadre) =>
    {
        if(enfermedadesMadre.length > 0 & (props.isNullOrWhitespace(enfermedadesMadre)))
        {
            setErrores({
                ...errores,
                'enfermedadesMadre': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'enfermedadesMadre': false
            });
        }
    }

    const handleNumHermanosChange = (event) => {
        handleInputChange(event);
        validateNumHermanos(event.target.value);
    }

    const validateNumHermanos = (numHermanos) =>
    {
        if(numHermanos.length > 0 & (!props.hasNumber(numHermanos) || props.isNullOrWhitespace(numHermanos)))
        {
            setErrores({
                ...errores,
                'numHermanos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'numHermanos': false
            });
        }
    }

    const handleNumHermanosVivosChange = (event) => {
        handleInputChange(event);
        validateNumHermanosVivos(event.target.value);
    }

    const validateNumHermanosVivos = (numHermanosVivos) =>
    {
        if(numHermanosVivos.length > 0 & (!props.hasNumber(numHermanosVivos) || props.isNullOrWhitespace(numHermanosVivos)))
        {
            setErrores({
                ...errores,
                'numHermanosVivos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'numHermanosVivos': false
            });
        }
    }

    const handleEnfermedadesHermanosChange = (event) => {
        handleInputChange(event);
        validateEnfermedadesHermanos(event.target.value);
    }

    const validateEnfermedadesHermanos = (enfermedadesHermanos) =>
    {
        if(enfermedadesHermanos.length > 0 & (props.isNullOrWhitespace(enfermedadesHermanos)))
        {
            setErrores({
                ...errores,
                'enfermedadesHermanos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'enfermedadesHermanos': false
            });
        }
    }

    const handleOtrosHermanosChange = (event) => {
        handleInputChange(event);
        validateOtrosHermanos(event.target.value);
    }

    const validateOtrosHermanos = (otrosHermanos) =>
    {
        if(otrosHermanos.length > 0 & (props.isNullOrWhitespace(otrosHermanos)))
        {
            setErrores({
                ...errores,
                'otrosHermanos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'otrosHermanos': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
                <FormControl error={errores.padreVivo} className={classes.xs}>
                    <FormLabel htmlFor="component-error">Padre Vivo:</FormLabel>
                    <RadioGroup aria-label="padreVivo" name="padreVivo" value={values.padreVivo} onChange={handlePadreVivoChange} >
                        <FormControlLabel value="1" control={<Radio />} label="Sí" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.enfermedadesPadre} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Enfermedades del Padre:</InputLabel>
                    <Input
                    id="component-error"
                    value={values.enfermedadesPadre}
                    name="enfermedadesPadre"
                    onChange={handleEnfermedadesPadreChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.enfermedadesPadre ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.madreVivo} className={classes.xs}>
                    <FormLabel htmlFor="component-error">Madre Viva:</FormLabel>
                    <RadioGroup aria-label="madreVivo" name="madreVivo" value={values.madreVivo} onChange={handleMadreVivoChange} >
                        <FormControlLabel value="1" control={<Radio />} label="Sí" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.enfermedadesMadre} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Enfermedades de la Madre:</InputLabel>
                    <Input
                    id="component-error"
                    value={values.enfermedadesMadre}
                    name="enfermedadesMadre"
                    onChange={handleEnfermedadesMadreChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.enfermedadesMadre ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.numHermanos} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Número de Hermanos:</InputLabel>
                    <Input
                    id="component-error"
                    value={values.numHermanos}
                    name="numHermanos"
                    onChange={handleNumHermanosChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.numHermanos ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.numHermanosVivos} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Número de Hermanos Vivos:</InputLabel>
                    <Input
                    id="component-error"
                    value={values.numHermanosVivos}
                    name="numHermanosVivos"
                    onChange={handleNumHermanosVivosChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.numHermanosVivos ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.enfermedadesHermanos} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Enfermedades de los Hermanos:</InputLabel>
                    <Input
                    id="component-error"
                    value={values.enfermedadesHermanos}
                    name="enfermedadesHermanos"
                    onChange={handleEnfermedadesHermanosChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.enfermedadesHermanos ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>
            </div>
            <FormControl error={errores.otrosHermanos} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Observaciones Hermanos:</InputLabel>
                <Input
                id="component-error"
                value={values.otrosHermanos}
                name="otrosHermanos"
                onChange={handleOtrosHermanosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.otrosHermanos ? "block" : "none"}} id="component-error-text">
                    Escriba una entrada válida
                </FormHelperText>
            </FormControl>

        </div>
    );
}