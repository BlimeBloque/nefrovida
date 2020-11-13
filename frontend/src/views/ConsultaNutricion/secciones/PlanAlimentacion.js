import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { IconButton, TextField, Tooltip, Typography } from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

export default function PlanAlimentacion(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;
    const archivo = props.archivo;
    const removeFile = props.removeFile;
    const fileSelectedHandler = props.fileSelectedHandler;

    const handleNotaChange = (event) => {
        handleInputChange(event);
        validateNota(event.target.value);
    }

    const validateNota = (nota) =>
    {
        if(nota.length > 0 & props.isNullOrWhitespace(nota))
        {
            setErrores({
                ...errores,
                'nota': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'nota': false
            });
        }
    }
    
    return(
        <div className={props.className}>
            <Typography >Plan de alimentación</Typography>
            <div>
                <Input
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={fileSelectedHandler}
                    onClick={(e)=>{e.target.value = null}}
                />
                <label htmlFor="contained-button-file">
                    <Tooltip title ="Adjuntar archivo">
                        <IconButton color="primary" component="span">
                            <AttachFileIcon fontSize="large"/>
                        </IconButton>
                    </Tooltip>
                </label>
                <Tooltip title ="Eliminar archivo adjunto">
                    <IconButton color="secondary" component="span" onClick={removeFile}>
                        <RemoveCircleOutlineIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
            </div>
            <Typography color="primary">{props.editar == true ? archivo.archivoNombre === null ? '' : archivo.archivoNombre === 'archivo' ? 'La consulta ya tiene un archivo': archivo.archivoNombre : archivo.archivoNombre}</Typography>
            <FormControl style={{textAlign: "left"}} error={errores.nota} className={classes.textoLargo}>
                <TextField
                label="Nota"
                multiline
                value={values.nota}
                rows={5}
                name="nota"
                variant="outlined"
                onChange={handleNotaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: errores.nota ? "block" : "none"}} id="component-error-text">
                    Escribe una respuesta válida.
                </FormHelperText>
            </FormControl>

        </div>
    );
}