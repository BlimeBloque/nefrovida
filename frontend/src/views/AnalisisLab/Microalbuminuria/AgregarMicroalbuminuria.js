import React from "react";
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import MicroalbuminuriaForm from './MicroalbuminuriaForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from "react";

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


const AgregarMicroalbuminuria = (props) => {
    const classes = useStyle();

    useEffect( () => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Laboratorio"))
        {
            props.history.goBack();
        }
    }, []);

    return (
        <div className={classes.container}>
            <Sidenav titulo="Registrar Microalbuminuría" />        
            <Container>
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+props.match.params.idBeneficiario+"/agregarAnalisisLab"}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
            <MicroalbuminuriaForm history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
            </Paper>
            </Container>
        </div>
    );

}

export default AgregarMicroalbuminuria;
