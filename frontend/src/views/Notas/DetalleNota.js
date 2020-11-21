import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Mensaje from '../../components/Mensaje'
import Nota from './Nota'
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

const DetalleNota = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const idNota = props.match.params.idConsultaMedica;
    const args = props.location.search;

    console.log(props)

    useEffect ( () => {
        http.get('/nota/'+ idNota)
            .then(res => { setDetalle(res.data[0]); console.log(res)
                })
                    .catch((e) => {
                    console.log(e)

                });
    }, []);


    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Nota" />        
            <Container>
            
            <Paper className={classes.pageContent}>
                <Link variant="body2" to={"/beneficiarios/"+detalle.idBeneficiario}>
                    <IconButton color="primary" aria-label="edit">
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                
                <Nota detalle={detalle} history={props.history}/>
            </Paper>
            </Container>


            {/* CONSULTA NUTRICIÓN RETRO*/}
            <Mensaje 
                success={args.includes("editarNutricion") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizó la consulta de nutrición."}
                mensajeError={"Hubo un error al editar la consulta de nutrición."}
            />
        </div>
    );

}

export default DetalleNota;