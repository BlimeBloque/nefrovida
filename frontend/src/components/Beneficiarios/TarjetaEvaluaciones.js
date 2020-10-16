import { Card, CardContent, Typography, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import React, { Component } from 'react'


const useStyles = makeStyles( {
    root: {
        maxWidth: '50%',
    },
})
export default function TarjetaEvaluaciones() {
    const classes = useStyles();
    
    
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" align="center">
                        Evaluaciones
                    </Typography>
                    <Button color="primary">Agregar Evaluación</Button>
                </CardContent>
            </Card>
        )
    
}

