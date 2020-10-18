import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function Recordatorios(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;

    const handleRecordatorioDesayunoChange = (event) => {
        handleInputChange(event);
        validateRecordatorioDesayuno(event.target.value);
    }

    const validateRecordatorioDesayuno = (recordatorioDesayuno) =>
    {
        if((recordatorioDesayuno.length > 0 & props.isNullOrWhitespace(recordatorioDesayuno)))
        {
            setErrores({
                ...errores,
                'recordatorioDesayuno': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'recordatorioDesayuno': false
            });
        }
    }

    const handleRecordatorioColacionMañanaChange = (event) => {
        handleInputChange(event);
        validateRecordatorioColacionMañana(event.target.value);
    }

    const validateRecordatorioColacionMañana = (recordatorioColacionMañana) =>
    {
        if(recordatorioColacionMañana.length > 0 & props.isNullOrWhitespace(recordatorioColacionMañana))
        {
            setErrores({
                ...errores,
                'recordatorioColacionMañana': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'recordatorioColacionMañana': false
            });
        }
    }

    const handleRecordatorioComidaChange = (event) => {
        handleInputChange(event);
        validateRecordatorioComida(event.target.value);
    }

    const validateRecordatorioComida = (recordatorioComida) =>
    {
        if(recordatorioComida.length > 0 & props.isNullOrWhitespace(recordatorioComida))
        {
            setErrores({
                ...errores,
                'recordatorioComida': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'recordatorioComida': false
            });
        }
    }

    const handleRecordatorioColacionTardeChange = (event) => {
        handleInputChange(event);
        validateRecordatorioColacionTarde(event.target.value);
    }

    const validateRecordatorioColacionTarde = (recordatorioColacionTarde) =>
    {
        if(recordatorioColacionTarde.length > 0 & props.isNullOrWhitespace(recordatorioColacionTarde))
        {
            setErrores({
                ...errores,
                'recordatorioColacionTarde': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'recordatorioColacionTarde': false
            });
        }
    }

    const handleRecordatorioCenaChange = (event) => {
        handleInputChange(event);
        validateRecordatorioCena(event.target.value);
    }

    const validateRecordatorioCena = (recordatorioCena) =>
    {
        if(recordatorioCena.length > 0 & props.isNullOrWhitespace(recordatorioCena))
        {
            setErrores({
                ...errores,
                'recordatorioCena': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'recordatorioCena': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={errores.recordatorioDesayuno} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Desayuno</InputLabel>
                <Input
                id="component-error"
                value={values.recordatorioDesayuno}
                name="recordatorioDesayuno"
                onChange={handleRecordatorioDesayunoChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.recordatorioDesayuno ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.recordatorioColacionMañana} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Colación 1</InputLabel>
                <Input
                id="component-error"
                name="recordatorioColacionMañana"
                value={values.recordatorioColacionMañana}
                onChange={handleRecordatorioColacionMañanaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.recordatorioColacionMañana ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.recordatorioComida} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Comida</InputLabel>
                <Input
                id="component-error"
                name="recordatorioComida"
                value={values.recordatorioComida}
                onChange={handleRecordatorioComidaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.recordatorioComida ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.recordatorioColacionTarde} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Colación 2</InputLabel>
                <Input
                id="component-error"
                name="recordatorioColacionTarde"
                value={values.recordatorioColacionTarde}
                onChange={handleRecordatorioColacionTardeChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.recordatorioColacionTarde ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

            <FormControl error={errores.recordatorioCena} className={classes.textoLargo}>
                <InputLabel htmlFor="component-error">Cena</InputLabel>
                <Input
                id="component-error"
                name="recordatorioCena"
                value={values.recordatorioCena}
                onChange={handleRecordatorioCenaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.recordatorioCena ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

        </div>
    );
}