import React from "react";
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import ExamenOrinaForm from './ExamenOrinaForm';
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


const AgregarExamenOrina = (props) => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <Sidenav titulo="Registrar Examen de Orina" />        
            <Container>
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+props.match.params.idBeneficiario+"/agregarAnalisisLab"}>
                <IconButton color="primary" aria-label="edit">
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
            <ExamenOrinaForm history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
            </Paper>
            </Container>
        </div>
    );

}

export default AgregarExamenOrina;
