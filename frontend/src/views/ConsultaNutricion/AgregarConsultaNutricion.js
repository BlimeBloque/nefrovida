import React, { useEffect } from "react";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import ConsultaNutricionForm from './ConsultaNutricionForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';

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

    useEffect( () => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Nutriologia"))
        {
            props.history.goBack();
        }
    }, []);

    return (
        <div className={classes.container}>
            <Sidenav titulo="Registrar Consulta de Nutriología" />        
            <Container>
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+props.match.params.idBeneficiario}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
            <ConsultaNutricionForm history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
            </Paper>
            </Container>
        </div>
    );

}

export default AgregarConsultaNutricion;
