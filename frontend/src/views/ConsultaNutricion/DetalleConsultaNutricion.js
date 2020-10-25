import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Sidenav from "../../components/Nav/Sidenav";
import ConsultaNutricion from './ConsultaNutricion';
import { Paper, makeStyles, Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Mensaje from '../../components/Mensaje'

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

const DetalleConsultaNutricion = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const idConsultaNutricion = props.match.params.idConsultaNutricion;
    const args = props.location.search;

    useEffect ( () => {
        axios.get('http://localhost:8000/api/consultaNutricion/'+idConsultaNutricion)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);


    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Consulta de Nutrición" />        
            <Container>
            
            <Paper className={classes.pageContent}>
                <Link variant="body2" to={"/beneficiarios/"+detalle.idBeneficiario}>
                    <IconButton color="primary" aria-label="edit">
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                
                <ConsultaNutricion detalle={detalle} history={props.history}/>
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

export default DetalleConsultaNutricion;