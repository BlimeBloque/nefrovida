import React from "react";
import { Route } from "react-router-dom";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import ConsultaNutricionForm from './ConsultaNutricionForm';

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


const AgregarConsultaNutricion = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Sidenav titulo="Registrar Consulta de Nutriología" />        
            <Container>
            <Paper className={classes.pageContent}>
            <ConsultaNutricionForm idBeneficiario={props.match.params.idBeneficiario} />
            </Paper>
            </Container>
        </div>
    );

}

export default AgregarConsultaNutricion;
