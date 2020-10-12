import React, { useState, useEffect } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function DatosClinicos(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleApetitoChange = (event) => {
        handleInputChange(event);
        validateApetito(event.target.value);
    }

    const validateApetito = (apetito) =>
    {
        if((apetito.length > 0 & props.isNullOrWhitespace(apetito)))
        {
            setErrores({
                ...errores,
                ['apetito']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['apetito']: false
            });
        }
    }

    const handleEdemaChange = (event) => {
        handleInputChange(event);
        validateEdema(event.target.value);
    }

    const validateEdema = (edema) =>
    {
        if(edema.length > 0 & props.isNullOrWhitespace(edema))
        {
            setErrores({
                ...errores,
                ['edema']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['edema']: false
            });
        }
    }

    const handleDistensionChange = (event) => {
        handleInputChange(event);
        validateDistension(event.target.value);
    }

    const validateDistension = (distension) =>
    {
        if(distension.length > 0 & props.isNullOrWhitespace(distension))
        {
            setErrores({
                ...errores,
                ['distension']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['distension']: false
            });
        }
    }

    const handleMareoChange = (event) => {
        handleInputChange(event);
        validateMareo(event.target.value);
    }

    const validateMareo = (mareo) =>
    {
        if(mareo.length > 0 & props.isNullOrWhitespace(mareo))
        {
            setErrores({
                ...errores,
                ['mareo']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['mareo']: false
            });
        }
    }

    const handleEstreñimientoChange = (event) => {
        handleInputChange(event);
        validateEstreñimiento(event.target.value);
    }

    const validateEstreñimiento = (estreñimiento) =>
    {
        if(estreñimiento.length > 0 & props.isNullOrWhitespace(estreñimiento))
        {
            setErrores({
                ...errores,
                ['estreñimiento']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['estreñimiento']: false
            });
        }
    }

    const handleZumbidoChange = (event) => {
        handleInputChange(event);
        validateZumbido(event.target.value);
    }

    const validateZumbido = (zumbido) =>
    {
        if(zumbido.length > 0 & props.isNullOrWhitespace(zumbido))
        {
            setErrores({
                ...errores,
                ['zumbido']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['zumbido']: false
            });
        }
    }

    const handleFlatulenciasChange = (event) => {
        handleInputChange(event);
        validateFlatulencias(event.target.value);
    }

    const validateFlatulencias = (flatulencias) =>
    {
        if(flatulencias.length > 0 & props.isNullOrWhitespace(flatulencias))
        {
            setErrores({
                ...errores,
                ['flatulencias']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['flatulencias']: false
            });
        }
    }

    const handleCefaleasChange = (event) => {
        handleInputChange(event);
        validateCefaleas(event.target.value);
    }

    const validateCefaleas = (cefaleas) =>
    {
        if(cefaleas.length > 0 & props.isNullOrWhitespace(cefaleas))
        {
            setErrores({
                ...errores,
                ['cefaleas']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['cefaleas']: false
            });
        }
    }

    const handleVomitosChange = (event) => {
        handleInputChange(event);
        validateVomitos(event.target.value);
    }

    const validateVomitos = (vomitos) =>
    {
        if(vomitos.length > 0 & props.isNullOrWhitespace(vomitos))
        {
            setErrores({
                ...errores,
                ['vomitos']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['vomitos']: false
            });
        }
    }

    const handleDisneaChange = (event) => {
        handleInputChange(event);
        validateDisnea(event.target.value);
    }

    const validateDisnea = (disnea) =>
    {
        if(disnea.length > 0 & props.isNullOrWhitespace(disnea))
        {
            setErrores({
                ...errores,
                ['disnea']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['disnea']: false
            });
        }
    }

    const handleCariesChange = (event) => {
        handleInputChange(event);
        validateCaries(event.target.value);
    }

    const validateCaries = (caries) =>
    {
        if(caries.length > 0 & props.isNullOrWhitespace(caries))
        {
            setErrores({
                ...errores,
                ['caries']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['caries']: false
            });
        }
    }

    const handlePoliuriaChange = (event) => {
        handleInputChange(event);
        validatePoliuria(event.target.value);
    }

    const validatePoliuria = (poliuria) =>
    {
        if(poliuria.length > 0 & props.isNullOrWhitespace(poliuria))
        {
            setErrores({
                ...errores,
                ['poliuria']: true
            });
        }
        else
        {
            setErrores({
                ...errores,
                ['poliuria']: false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
                <FormControl error={errores.apetito} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Apetito</InputLabel>
                    <Input
                    id="component-error"
                    value={values.apetito}
                    name="apetito"
                    onChange={handleApetitoChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.apetito ? "block" : "none"}} id="component-error-text">
                        Escribe un apetito válido.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.edema} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Edema</InputLabel>
                    <Input
                    id="component-error"
                    name="edema"
                    value={values.edema}
                    onChange={handleEdemaChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.edema ? "block" : "none"}} id="component-error-text">
                        Escribe un edema válido.
                    </FormHelperText>
                </FormControl>
            </div>
            
            <div className={classes.flex}>
                <FormControl error={errores.distension} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Distensión</InputLabel>
                    <Input
                    id="component-error"
                    value={values.distension}
                    name="distension"
                    onChange={handleDistensionChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.distension ? "block" : "none"}} id="component-error-text">
                        Escribe una distensión válida.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.mareo} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Mareo</InputLabel>
                    <Input
                    id="component-error"
                    name="mareo"
                    value={values.mareo}
                    onChange={handleMareoChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.mareo ? "block" : "none"}} id="component-error-text">
                        Escribe un mareo válido.
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.estreñimiento} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Estreñimiento</InputLabel>
                    <Input
                    id="component-error"
                    value={values.estreñimiento}
                    name="estreñimiento"
                    onChange={handleEstreñimientoChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.estreñimiento ? "block" : "none"}} id="component-error-text">
                        Escribe un estreñimiento válido.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.zumbido} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Zumbido en oídos</InputLabel>
                    <Input
                    id="component-error"
                    name="zumbido"
                    value={values.zumbido}
                    onChange={handleZumbidoChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.zumbido ? "block" : "none"}} id="component-error-text">
                        Escribe un zumbido válido.
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.flatulencias} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Flatulencias</InputLabel>
                    <Input
                    id="component-error"
                    value={values.flatulencias}
                    name="flatulencias"
                    onChange={handleFlatulenciasChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.flatulencias ? "block" : "none"}} id="component-error-text">
                        Escribe flatulencias válidas.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.cefaleas} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Cefaleas</InputLabel>
                    <Input
                    id="component-error"
                    name="cefaleas"
                    value={values.cefaleas}
                    onChange={handleCefaleasChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.cefaleas ? "block" : "none"}} id="component-error-text">
                        Escribe cefaleas válidas.
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.vomitos} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Vómitos</InputLabel>
                    <Input
                    id="component-error"
                    value={values.vomitos}
                    name="vomitos"
                    onChange={handleVomitosChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.vomitos ? "block" : "none"}} id="component-error-text">
                        Escribe vómitos válidos.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.disnea} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Disnea</InputLabel>
                    <Input
                    id="component-error"
                    name="disnea" 
                    value={values.disnea}
                    onChange={handleDisneaChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.disnea ? "block" : "none"}} id="component-error-text">
                        Escribe cefaleas válidas.
                    </FormHelperText>
                </FormControl>
            </div>

            <div className={classes.flex}>
                <FormControl error={errores.caries} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Caries</InputLabel>
                    <Input
                    id="component-error"
                    value={values.caries}
                    name="caries"
                    onChange={handleCariesChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.caries ? "block" : "none"}} id="component-error-text">
                        Escribe una caries válida.
                    </FormHelperText>
                </FormControl>

                <FormControl error={errores.poliuria} className={classes.textoCorto}>
                    <InputLabel htmlFor="component-error">Poliuria</InputLabel>
                    <Input
                    id="component-error"
                    name="poliuria" 
                    value={values.poliuria}
                    onChange={handlePoliuriaChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.poliuria ? "block" : "none"}} id="component-error-text">
                        Escribe una poluria válida.
                    </FormHelperText>
                </FormControl>
            </div>
        </div>
    );
}