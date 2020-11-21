import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Sidenav from "../../components/Nav/Sidenav";
import Antecedentes from './Antecedentes';
import { Paper, makeStyles, Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import Mensaje from '../../components/Mensaje';
import IconButton from '@material-ui/core/IconButton';
import http from '../../http-common'

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    container: {
        display: "flex",
        marginTop: "40px"
    },
    button: {
        margin: theme.spacing(1),
    },
}))

const DetalleAntecedentes = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const idAntecedentes = props.match.params.idAntecedentes;
    const args = props.location.search;

    useEffect ( () => {
        http.get('/antecedentes/'+idAntecedentes)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);


    return(
        <div className={classes.container}>
            <Sidenav titulo="Antecedentes" />        
            <Container>
            
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+detalle.idBeneficiario}>
                    <IconButton color="primary" aria-label="edit">
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                
                <Antecedentes detalle={detalle} history={props.history}/>
            </Paper>
            </Container>

            <Mensaje 
                success={args.includes("editarAntecedentes") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizaron los antecedentes."}
                mensajeError={"Hubo un error al editar los antecedentes."}
            />
        </div>
    );

}

export default DetalleAntecedentes;