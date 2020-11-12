import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from '../components/Nav/Sidenav';
import { Container, Paper } from '@material-ui/core';
import Reporte from './Reportes/Reportes'

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
            <Sidenav />
            <Container>
                <Paper className={classes.pageContent}>
                    <Reporte/>
                </Paper>
            </Container>
        </div>
    );
}

export default Reportes;