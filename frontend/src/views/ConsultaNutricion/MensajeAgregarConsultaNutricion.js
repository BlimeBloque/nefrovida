import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const MensajeAgregarConsultaNutricion = (props) => {
    const [open, setOpen] = React.useState('');
    const [success, setSuccess] = React.useState(props.success);

    const mensajeExito = "Se registró la consulta de nutrición.";
    const mensajeError = "Hubo un error al registrar la consulta de nutrición";
    
    useEffect ( () => {
        if(success !== '')
            setOpen(true);
    }, []);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    return(
        <div>
            <Snackbar open={open ? true : false} autoHideDuration={6000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={success == 1 ? "success" : "error"}>
                    {success == 1 ? mensajeExito : mensajeError}
                </MuiAlert>
            </Snackbar>
        </div>
    );


}

export default MensajeAgregarConsultaNutricion;