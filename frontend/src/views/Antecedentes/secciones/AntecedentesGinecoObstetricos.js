import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Controls from "../../../components/FormComponents/Controls";
import FormHelperText from '@material-ui/core/FormHelperText';

export default function AntecedentesGinecoObstetricos(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleMenarquiaChange = (event) => {
        handleInputChange(event);
        validateMenarquia(event.target.value);
    }

    const validateMenarquia = (menarquia) =>
    {
        if(menarquia.length > 0 & (!props.hasNumber(menarquia) || props.isNullOrWhitespace(menarquia)))
        {
            setErrores({
                ...errores,
                'menarquia': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'menarquia': false
            });
        }
    }

    const handleRitmoChange = (event) => {
        handleInputChange(event);
        validateRitmo(event.target.value);
    }

    const validateRitmo = (ritmo) =>
    {
        if(ritmo.length > 0 & (!props.hasNumber(ritmo) || props.isNullOrWhitespace(ritmo)))
        {
            setErrores({
                ...errores,
                'ritmo': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'ritmo': false
            });
        }
    }

    const handleFumChange = (event) => {
        handleInputChange(event);
        setErrores({
            ...errores,
            'fum': false
        });
    }

    const handleGestacionesChange = (event) => {
        handleInputChange(event);
        validateGestaciones(event.target.value);
    }

    const validateGestaciones = (gestaciones) =>
    {
        if(gestaciones.length > 0 & (!props.hasNumber(gestaciones) || props.isNullOrWhitespace(gestaciones)))
        {
            setErrores({
                ...errores,
                'gestaciones': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'gestaciones': false
            });
        }
    }

    const handlePartosChange = (event) => {
        handleInputChange(event);
        validatePartos(event.target.value);
    }

    const validatePartos = (partos) =>
    {
        if(partos.length > 0 & (!props.hasNumber(partos) || props.isNullOrWhitespace(partos)))
        {
            setErrores({
                ...errores,
                'partos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'partos': false
            });
        }
    }

    const handleAbortosChange = (event) => {
        handleInputChange(event);
        validateAbortos(event.target.value);
    }

    const validateAbortos = (abortos) =>
    {
        if(abortos.length > 0 & (!props.hasNumber(abortos) || props.isNullOrWhitespace(abortos)))
        {
            setErrores({
                ...errores,
                'abortos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'abortos': false
            });
        }
    }

    const handleCesareasChange = (event) => {
        handleInputChange(event);
        validateCesareas(event.target.value);
    }

    const validateCesareas = (cesareas) =>
    {
        if(cesareas.length > 0 & (!props.hasNumber(cesareas) || props.isNullOrWhitespace(cesareas)))
        {
            setErrores({
                ...errores,
                'cesareas': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'cesareas': false
            });
        }
    }

    const handleIvsaChange = (event) => {
        handleInputChange(event);
        validateIvsa(event.target.value);
    }

    const validateIvsa = (ivsa) =>
    {
        if(ivsa.length > 0 & (!props.hasNumber(ivsa) || props.isNullOrWhitespace(ivsa)))
        {
            setErrores({
                ...errores,
                'ivsa': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'ivsa': false
            });
        }
    }

    const handleMetodosAnticonceptivosChange = (event) => {
        handleInputChange(event);
        validateMetodosAnticonceptivos(event.target.value);
    }

    const validateMetodosAnticonceptivos = (metodosAnticonceptivos) =>
    {
        if(metodosAnticonceptivos.length > 0 & (props.isNullOrWhitespace(metodosAnticonceptivos)))
        {
            setErrores({
                ...errores,
                'metodosAnticonceptivos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'metodosAnticonceptivos': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
                <FormControl error={errores.Menarquia} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Menarquia</InputLabel>
                    <Input
                    id="component-error"
                    value={values.menarquia}
                    name="menarquia"
                    onChange={handleMenarquiaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.menarquia ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.ritmo} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Ritmo</InputLabel>
                    <Input
                    id="component-error"
                    value={values.ritmo}
                    name="ritmo"
                    onChange={handleRitmoChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.ritmo ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <Controls.DatePicker 
                    name="fum"
                    label="F.U.M"
                    value={values.fum}
                    onChange={handleFumChange}
                />
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.gestaciones} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Gestaciones</InputLabel>
                    <Input
                    id="component-error"
                    value={values.gestaciones}
                    name="gestaciones"
                    onChange={handleGestacionesChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.gestaciones ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.partos} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Partos</InputLabel>
                    <Input
                    id="component-error"
                    value={values.partos}
                    name="partos"
                    onChange={handlePartosChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.partos ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.abortos} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Abortos</InputLabel>
                    <Input
                    id="component-error"
                    value={values.abortos}
                    name="abortos"
                    onChange={handleAbortosChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.abortos ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.cesareas} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Cesáreas</InputLabel>
                    <Input
                    id="component-error"
                    value={values.cesareas}
                    name="cesareas"
                    onChange={handleCesareasChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.cesareas ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
            <div className={classes.flex}>
                <FormControl error={errores.ivsa} className={classes.xs}>
                    <InputLabel htmlFor="component-error">I.V.S.A</InputLabel>
                    <Input
                    id="component-error"
                    value={values.ivsa}
                    name="ivsa"
                    onChange={handleIvsaChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.ivsa ? "block" : "none"}} id="component-error-text">
                        Escriba un número entero
                    </FormHelperText>
                </FormControl>
            </div>
                <FormControl error={errores.metodosAnticonceptivos} className={classes.textoLargo}>
                    <InputLabel htmlFor="component-error">Métodos Anticonceptivos</InputLabel>
                    <Input
                    id="component-error"
                    value={values.metodosAnticonceptivos}
                    name="metodosAnticonceptivos"
                    onChange={handleMetodosAnticonceptivosChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.metodosAnticonceptivos ? "block" : "none"}} id="component-error-text">
                        Escriba una entrada válida
                    </FormHelperText>
                </FormControl>

        </div>
    );
}