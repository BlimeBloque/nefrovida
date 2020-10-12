import React from 'react'
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

    const handleComidasAlDiaChange = (event) => {
        handleInputChange(event);
        validateComidasAlDia(event.target.value);
    }

    const validateComidasAlDia = (comidasAlDia) =>
    {
        if((comidasAlDia.length > 0 & props.isNullOrWhitespace(comidasAlDia)))
        {
            setErrores({
                ...errores,
                'comidasAlDia': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'comidasAlDia': false
            });
        }
    }

    const handleLugarComidaChange = (event) => {
        handleInputChange(event);
        validateLugarComida(event.target.value);
    }

    const validateLugarComida = (lugarComida) =>
    {
        if(lugarComida.length > 0 & props.isNullOrWhitespace(lugarComida))
        {
            setErrores({
                ...errores,
                'lugarComida': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'lugarComida': false
            });
        }
    }

    const handlePreparaComidaChange = (event) => {
        handleInputChange(event);
        validatePreparaComida(event.target.value);
    }

    const validatePreparaComida = (preparaComida) =>
    {
        if(preparaComida.length > 0 & props.isNullOrWhitespace(preparaComida))
        {
            setErrores({
                ...errores,
                'preparaComida': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'preparaComida': false
            });
        }
    }

    const handleComeEntreComidasChange = (event) => {
        handleInputChange(event);
        validateComeEntreComidas(event.target.value);
    }

    const validateComeEntreComidas = (comeEntreComidas) =>
    {
        if(comeEntreComidas.length > 0 & props.isNullOrWhitespace(comeEntreComidas))
        {
            setErrores({
                ...errores,
                'comeEntreComidas': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'comeEntreComidas': false
            });
        }
    }

    const handleAlimentosPreferidosChange = (event) => {
        handleInputChange(event);
        validateAlimentosPreferidos(event.target.value);
    }

    const validateAlimentosPreferidos = (alimentosPreferidos) =>
    {
        if(alimentosPreferidos.length > 0 & props.isNullOrWhitespace(alimentosPreferidos))
        {
            setErrores({
                ...errores,
                'alimentosPreferidos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'alimentosPreferidos': false
            });
        }
    }

    const handleAlimentosOdiadosChange = (event) => {
        handleInputChange(event);
        validateAlimentosOdiados(event.target.value);
    }

    const validateAlimentosOdiados = (alimentosOdiados) =>
    {
        if(alimentosOdiados.length > 0 & props.isNullOrWhitespace(alimentosOdiados))
        {
            setErrores({
                ...errores,
                'alimentosOdiados': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'alimentosOdiados': false
            });
        }
    }

    const handleSuplementosChange = (event) => {
        handleInputChange(event);
        validateSuplementos(event.target.value);
    }

    const validateSuplementos = (suplementos) =>
    {
        if(suplementos.length > 0 & props.isNullOrWhitespace(suplementos))
        {
            setErrores({
                ...errores,
                'suplementos': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'suplementos': false
            });
        }
    }

    const handleMedicamentosActualesChange = (event) => {
        handleInputChange(event);
        validateMedicamentosActuales(event.target.value);
    }

    const validateMedicamentosActuales = (medicamentosActuales) =>
    {
        if(medicamentosActuales.length > 0 & props.isNullOrWhitespace(medicamentosActuales))
        {
            setErrores({
                ...errores,
                'medicamentosActuales': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'medicamentosActuales': false
            });
        }
    }

    const handleConsumoAguaNaturalChange = (event) => {
        handleInputChange(event);
        validateConsumoAguaNatural(event.target.value);
    }

    const validateConsumoAguaNatural = (consumoAguaNatural) =>
    {
        if(consumoAguaNatural.length > 0 & props.isNullOrWhitespace(consumoAguaNatural))
        {
            setErrores({
                ...errores,
                'consumoAguaNatural': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'consumoAguaNatural': false
            });
        }
    }

    
    return(
        <div className={props.className}>
            <FormControl error={errores.comidasAlDia} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">N° de comidas al día</InputLabel>
                <Input
                id="component-error"
                value={values.comidasAlDia}
                name="comidasAlDia"
                onChange={handleComidasAlDiaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.comidasAlDia ? "block" : "none"}} id="component-error-text">
                    Escribe un número de comidas al día válido.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.lugarComida} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">¿Dónde realiza sus comidas?</InputLabel>
                <Input
                id="component-error"
                name="lugarComida"
                value={values.lugarComida}
                onChange={handleLugarComidaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.lugarComida ? "block" : "none"}} id="component-error-text">
                    Escribe un lugar donde realiza sus comidas válido.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.preparaComida} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">¿Quién prepara?</InputLabel>
                <Input
                id="component-error"
                value={values.preparaComida}
                name="preparaComida"
                onChange={handlePreparaComidaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.preparaComida ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.comeEntreComidas} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">¿Come entre comidas?</InputLabel>
                <Input
                id="component-error"
                name="comeEntreComidas"
                value={values.comeEntreComidas}
                onChange={handleComeEntreComidasChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.comeEntreComidas ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.alimentosPreferidos} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Alimentos Preferidos</InputLabel>
                <Input
                id="component-error"
                value={values.alimentosPreferidos}
                name="alimentosPreferidos"
                onChange={handleAlimentosPreferidosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.alimentosPreferidos ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.alimentosOdiados} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Alimentos que no le gustan</InputLabel>
                <Input
                id="component-error"
                name="alimentosOdiados"
                value={values.alimentosOdiados}
                onChange={handleAlimentosOdiadosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.alimentosOdiados ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.suplementos} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Consumo de suplementos o complementos alimentarios</InputLabel>
                <Input
                id="component-error"
                value={values.suplementos}
                name="suplementos"
                onChange={handleSuplementosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.suplementos ? "block" : "none"}} id="component-error-text">
                    Escribe suplementos o complementos válidos.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.medicamentosActuales} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Medicamentos consumidos actualmente</InputLabel>
                <Input
                id="component-error"
                name="medicamentosActuales"
                value={values.medicamentosActuales}
                onChange={handleMedicamentosActualesChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.medicamentosActuales ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.consumoAguaNatural} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Consumo de agua natural</InputLabel>
                <Input
                id="component-error"
                value={values.consumoAguaNatural}
                name="consumoAguaNatural"
                onChange={handleConsumoAguaNaturalChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.consumoAguaNatural ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>


        </div>
    );
}