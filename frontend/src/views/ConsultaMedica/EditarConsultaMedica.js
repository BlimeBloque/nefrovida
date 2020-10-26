import React, { useState, useEffect } from 'react'
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import ConsultaMedicaForm from './ConsultaMedicaForm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import http from "../../http-common";

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


const EditarConsultaMedica = (props) => {
    const classes = useStyle();
    const [consulta, setConsulta] = useState();

    useEffect ( () => {

        http.get('/consultaMedica/'+props.match.params.idConsultaMedica)
            .then(res => { 
                setConsulta(res.data[0]);
                
            })
            .catch((e) => {
            console.log(e)
            })

    }, []);

    return (
        <div className={classes.container}>
            
        
            <Sidenav titulo="Editar Consulta Médica" />        
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/consultaMedica/"+props.match.params.idConsultaMedica}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    {consulta ?
                    <ConsultaMedicaForm editar={true} history={props.history} consulta={consulta} idBeneficiario={consulta.idBeneficiario} />
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

export default EditarConsultaMedica;