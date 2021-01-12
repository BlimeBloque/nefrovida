import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Necesidades(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleTipoDietaChange = (event) => {
        handleInputChange(event);
        validateTipoDieta(event.target.value);
    }

    const validateTipoDieta = (tipoDieta) =>
    {
        if(tipoDieta.length > 0 & props.isNullOrWhitespace(tipoDieta))
        {
            setErrores({
                ...errores,
                'tipoDieta': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'tipoDieta': false
            });
        }
    }

    const handleKilocaloriasTotalesChange = (event) => {
        handleInputChange(event);
        validateKilocaloriasTotales(event.target.value);
    }

    const validateKilocaloriasTotales = (kilocaloriasTotales) =>
    {
        if(kilocaloriasTotales.length > 0 & (!props.isKiloCaloria(kilocaloriasTotales) | props.isNullOrWhitespace(kilocaloriasTotales)))
        {
            setErrores({
                ...errores,
                'kilocaloriasTotales': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'kilocaloriasTotales': false
            });
        }
    }

    const handlePorcentajeHidratosCarbonoChange = (event) => {
        handleInputChange(event);
        validatePorcentajeHidratosCarbono(event.target.value);
    }

    const validatePorcentajeHidratosCarbono = (porcentajeHidratosCarbono) =>
    {
        if(porcentajeHidratosCarbono.length > 0 & (!props.isPorcentaje(porcentajeHidratosCarbono) | props.isNullOrWhitespace(porcentajeHidratosCarbono)))
        {
            setErrores({
                ...errores,
                'porcentajeHidratosCarbono': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'porcentajeHidratosCarbono': false
            });
        }
    }

    const handleKilocaloriasHidratosCarbonoChange = (event) => {
        handleInputChange(event);
        validateKilocaloriasHidratosCarbono(event.target.value);
    }

    const validateKilocaloriasHidratosCarbono = (kilocaloriasHidratosCarbono) =>
    {
        if(kilocaloriasHidratosCarbono.length > 0 & (!props.isKiloCaloria(kilocaloriasHidratosCarbono) | props.isNullOrWhitespace(kilocaloriasHidratosCarbono)))
        {
            setErrores({
                ...errores,
                'kilocaloriasHidratosCarbono': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'kilocaloriasHidratosCarbono': false
            });
        }
    }

    const handlePorcentajeGrasasChange = (event) => {
        handleInputChange(event);
        validatePorcentajeGrasas(event.target.value);
    }

    const validatePorcentajeGrasas = (porcentajeGrasas) =>
    {
        if(porcentajeGrasas.length > 0 & (!props.isPorcentaje(porcentajeGrasas) | props.isNullOrWhitespace(porcentajeGrasas)))
        {
            setErrores({
                ...errores,
                'porcentajeGrasas': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'porcentajeGrasas': false
            });
        }
    }

    const handlePorcentajeProteinasChange = (event) => {
        handleInputChange(event);
        validatePorcentajeProteinas(event.target.value);
    }

    const validatePorcentajeProteinas = (porcentajeProteinas) =>
    {
        if(porcentajeProteinas.length > 0 & (!props.isPorcentaje(porcentajeProteinas) | props.isNullOrWhitespace(porcentajeProteinas)))
        {
            setErrores({
                ...errores,
                'porcentajeProteinas': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'porcentajeProteinas': false
            });
        }
    }


    
    return(
        <div className={props.className}>
            <FormControl error={errores.tipoDieta} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Tipo de dieta</InputLabel>
                <Input
                id="component-error"
                name="tipoDieta"
                value={values.tipoDieta}
                onChange={handleTipoDietaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.tipoDieta ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <div className={classes.flex}>
                <FormControl error={errores.kilocaloriasTotales} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Kilocalorías totales</InputLabel>
                    <Input
                    id="component-error"
                    name="kilocaloriasTotales"
                    value={values.kilocaloriasTotales}
                    onChange={handleKilocaloriasTotalesChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.kilocaloriasTotales ? "block" : "none"}} id="component-error-text">
                        Escribe un número válido<br/> (Si es número cerrado escribir .0 Ej. 170.0).
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.porcentajeHidratosCarbono} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Porcentaje HC</InputLabel>
                    <Input
                    id="component-error"
                    value={values.porcentajeHidratosCarbono}
                    name="porcentajeHidratosCarbono"
                    onChange={handlePorcentajeHidratosCarbonoChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.porcentajeHidratosCarbono ? "block" : "none"}} id="component-error-text">
                        Escribe un porcentaje válido<br/>(Si es número cerrado escribir .0 Ej. 50.0).
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.porcentajeGrasas} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Porcentaje LS</InputLabel>
                    <Input
                    id="component-error"
                    name="porcentajeGrasas"
                    value={values.porcentajeGrasas}
                    onChange={handlePorcentajeGrasasChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.porcentajeGrasas ? "block" : "none"}} id="component-error-text">
                        Escribe un porcentaje válido<br/> (Si es número cerrado escribir .0 Ej. 50.0).
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.porcentajeProteinas} className={classes.xs}>
                    <InputLabel htmlFor="component-error">Porcentaje PS</InputLabel>
                    <Input
                    id="component-error"
                    name="porcentajeProteinas"
                    value={values.porcentajeProteinas}
                    onChange={handlePorcentajeProteinasChange}
                    aria-describedby="component-error-text"
                    type="number"
                    />
                    <FormHelperText style={{display: errores.porcentajeProteinas ? "block" : "none"}} id="component-error-text">
                        Escribe un porcentaje válido<br/> (Si es número cerrado escribir .0 Ej. 50.0).
                    </FormHelperText>
                </FormControl>
            </div>
            

        </div>
    );
}