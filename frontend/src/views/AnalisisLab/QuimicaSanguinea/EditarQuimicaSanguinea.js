import React, { useState, useEffect } from 'react'
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import http from "../../../http-common";
import QuimicaSanguineaForm from "./QuimicaSanguineaForm";

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


const EditarQuimicaSanguinea = (props) => {
    const classes = useStyle();
    const [analisis, setAnalisis] = useState();

    useEffect ( () => {

        http.get('/quimicaSanguinea/'+props.match.params.idQuimicaSanguinea)
            .then(res => { 
                setAnalisis(res.data[0]);
                
            })
            .catch((e) => {
            console.log(e)
            })

    }, []);

    return (
        <div className={classes.container}>
            
        
            <Sidenav titulo="Editar Química Sanguínea" />        
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/quimicaSanguinea/"+props.match.params.idQuimicaSanguinea}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    {analisis ?
                    <QuimicaSanguineaForm editar={true} history={props.history} analisis={analisis} idBeneficiario={analisis.idBeneficiario} />
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

export default EditarQuimicaSanguinea;
