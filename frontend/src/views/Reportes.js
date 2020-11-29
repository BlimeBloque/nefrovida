import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from '../components/Nav/Sidenav';
import { Container, IconButton, Paper } from '@material-ui/core';
import Reporte from './Reportes/Reportes'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Cookies from 'js-cookie'
import { useEffect } from 'react';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    container: {
      display: "flex",
      marginTop: "40px"
    }
  }))

const Reportes = () => {
    const classes = useStyle()

    

    return (
        <div className={classes.container}>
            <Sidenav titulo="Reportes" />
            <Container>
                <Paper className={classes.pageContent}>
                <Link variant="body2" to={"/reportes"}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
                    <Reporte/>
                </Paper>
            </Container>
        </div>
    );
}

export default Reportes;