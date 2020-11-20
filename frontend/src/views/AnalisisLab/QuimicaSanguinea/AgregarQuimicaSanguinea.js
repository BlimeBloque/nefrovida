import React from "react";
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import QuimicaSanguineaForm from './QuimicaSanguineaForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import { useEffect } from "react";
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


const AgregarQuimicaSanguinea = (props) => {
    const classes = useStyle();

    useEffect( () => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Laboratorio"))
        {
            props.history.goBack();
        }
    }, []);

    return (
        <div className={classes.container}>
            <Sidenav titulo="Registrar Química Sanguínea" />        
            <Container>
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+props.match.params.idBeneficiario+"/agregarAnalisisLab"}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
            <QuimicaSanguineaForm history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
            </Paper>
            </Container>
        </div>
    );

}

export default AgregarQuimicaSanguinea;
