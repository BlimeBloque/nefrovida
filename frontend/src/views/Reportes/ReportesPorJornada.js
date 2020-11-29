import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from '../../components/Nav/Sidenav';
import { Container, IconButton, Paper } from '@material-ui/core';
import ReportesPorJornadaDetalle from './ReportesPorJornadaDetalle'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


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

const ReportesPorJornada = (props) => {

    console.log(props);
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
                    <ReportesPorJornadaDetalle idJornada = {props.match.params.idJornada}/>
                </Paper>
            </Container>
        </div>
    );
}

export default ReportesPorJornada;