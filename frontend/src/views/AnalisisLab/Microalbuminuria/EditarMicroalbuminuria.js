import React, { useState, useEffect } from 'react'
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import http from "../../../http-common";
import MicroalbuminuriaForm from "./MicroalbuminuriaForm";
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


const EditarMicroalbuminuria = (props) => {
    const classes = useStyle();
    const [analisis, setAnalisis] = useState();

    useEffect ( () => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Laboratorio"))
        {
            props.history.goBack();
        }
        http.get('/microalbuminuria/'+props.match.params.idMicroalbuminuria)
            .then(res => { 
                setAnalisis(res.data[0]);
                
            })
            .catch((e) => {
            console.log(e)
            })

    }, []);

    return (
        <div className={classes.container}>
            
        
            <Sidenav titulo="Editar  Microalbuminuría" />        
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/microalbuminuria/"+props.match.params.idMicroalbuminuria}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    {analisis ?
                    <MicroalbuminuriaForm editar={true} history={props.history} analisis={analisis} idBeneficiario={analisis.idBeneficiario} />
                    :
                    <center>
                        <Typography variant="h4">Cargando...</Typography>
                    </center>
                    }
                </Paper>
            </Container>
        </div>
    );

}

export default EditarMicroalbuminuria;
