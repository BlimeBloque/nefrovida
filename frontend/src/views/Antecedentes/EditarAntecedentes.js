import React, { useState, useEffect } from 'react'
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Typography } from '@material-ui/core';
import AntecedentesForm from './AntecedentesForm';
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


const EditarAntecedentes = (props) => {
    const classes = useStyle();
    const [antecedentes, setAnte] = useState();

    useEffect ( () => {

        http.get('/antecedentes/'+props.match.params.idAntecedentes)
            .then(res => { 
                setAnte(res.data[0]);
                
            })
            .catch((e) => {
            console.log(e)
            })

    }, []);

    return (
        <div className={classes.container}>
            
        
            <Sidenav titulo="Editar Antecedentes" />        
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/antecedentes/"+props.match.params.idAntecedentes}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    {antecedentes ?
                    <AntecedentesForm editar={true} history={props.history} antecedentes={antecedentes} idBeneficiario={antecedentes.idBeneficiario} />
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

export default EditarAntecedentes;