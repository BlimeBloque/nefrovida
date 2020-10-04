import React from 'react'
import AgregarBeneficiarioForm from './AgregarBeneficiarioForm'

import Typography from '@material-ui/core/Typography';
import { Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))


export default function AgregarBeneficiario() {

    const classes = useStyle();

    return (
        <>
            <Paper className={classes.pageContent}>
            <Typography variant="h3" component="h2" align="center">
                Agregar Beneficiario
            </Typography>
            </Paper>


            <Paper className={classes.pageContent}>
                 <AgregarBeneficiarioForm />
            </Paper>
            
        </>
    )
}
