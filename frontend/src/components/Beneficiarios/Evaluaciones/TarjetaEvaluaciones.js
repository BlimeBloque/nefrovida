import { Card, CardContent, Paper, Typography } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import BotonEvaluaciones from './BotonEvaluaciones';

const useStyles = makeStyles( {
    root: {
        maxWidth: '50%',
    },
})
export default function TarjetaEvaluaciones(props) {
    const classes = useStyles();
        return (
            <div>
                <Typography variant="h6" align="center">
                    <strong>
                        Evaluaciones
                    </strong>
                </Typography>
                <BotonEvaluaciones idBeneficiario={props.idBeneficiario} />
            </div>
                
        )
    
}

