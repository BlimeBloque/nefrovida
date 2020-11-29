import React from "react";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import SelectReporteForm from './SelectReporteFrom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";

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


export default function SelectReporte(props){

    useEffect(() => {
        if(!Cookies.get('cargado'))
        {
            Cookies.set('cargado', true)
            window.location.reload();
        }
    }, [])
    
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Sidenav titulo="Selecciona el tipo de reporte que quieres consultar" />        
            <Container>
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/"}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon />
                </IconButton>
            </Link>
            <SelectReporteForm history={props.history}/>
            </Paper>
            </Container>
        </div>
    );

}

