import React from 'react'

import Typography from '@material-ui/core/Typography';
import { Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))


export default function Titulo(props) {

    const classes = useStyle();
    return (
        <>
            <Paper className={classes.pageContent}>
            <Typography variant="h3" component="h2" align="center">
                {props.children}
            </Typography>
            </Paper> 
        </>
    )
}
