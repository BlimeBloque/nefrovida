import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Modal, Button, Typography, DialogActions, Dialog, DialogContent, DialogContentText} from '@material-ui/core';
import http from '../../../http-common';

const useStyles = makeStyles((theme) => ({
    item: {
        margin: theme.spacing(2),
    }
}));

export default function EliminarMicroalbuminuria(props)
{
    const classes = useStyles();

    const eliminar = () => {
        http.delete('/microalbuminuria/'+props.idMicroalbuminuria)
            .then( res => {
                props.history.push("/beneficiarios/"+props.idBeneficiario+"?eliminarMicroalbuminuria=1");
            })
            .catch( err => {
                console.log(err);
                props.history.push("/beneficiarios/"+props.idBeneficiario+"?eliminarMicroalbuminuria=0");
            })
    }

    return (
        <div>
            <Dialog
                    open={props.open}
                    onClose={props.handleClose}
                    keepMounted
            >
                <center>
                    <DialogContent>
                        <DialogContentText style={{color: "red"}}>
                            ¿Estás seguro/a de querer eliminar la microalbuminuría del {props.fecha} de {props.nombre}?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button className={classes.item} variant="contained" onClick={eliminar} color="secondary">
                            Confirmar
                        </Button>
                        <Button className={classes.item} variant="contained" onClick={props.handleClose}>
                            Cancelar
                        </Button>
                    </DialogActions>
                </center>
            </Dialog>
        </div>
    )
}