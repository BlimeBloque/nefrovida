import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Sidenav from "../../components/Nav/Sidenav";
import ConsultaNutricion from './ConsultaNutricion';
import { Paper, makeStyles, Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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
                <Button variant="contained" color="primary" className={classes.button} startIcon={<ArrowBackIcon />}
                onClick={() => props.history.push("/beneficiarios/"+detalle.idBeneficiario)}
                >
                    Regresar
                </Button>
                
                <ConsultaNutricion detalle={detalle} history={props.history}/>
            </Paper>
            </Container>
        </div>
    );

}

export default DetalleConsultaNutricion;