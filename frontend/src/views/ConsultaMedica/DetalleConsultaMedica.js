import React, { useState, useEffect } from 'react'
import http from "../../http-common";
import Sidenav from "../../components/Nav/Sidenav";
import ConsultaMedica from './ConsultaMedica';
import { Paper, makeStyles, Container, Button } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from "react-router-dom";
import Mensaje from '../../components/Mensaje';
import IconButton from '@material-ui/core/IconButton';

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

const DetalleConsultaMedica = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const idConsultaMedica = props.match.params.idConsultaMedica;
    const args = props.location.search;

    useEffect ( () => {
        http.get('consultaMedica/'+idConsultaMedica)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);


    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Consulta Médica" />        
            <Container>
            
            <Paper className={classes.pageContent}>
            <Link variant="body2" to={"/beneficiarios/"+detalle.idBeneficiario}>
                    <IconButton color="primary" aria-label="edit">
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                
                <ConsultaMedica detalle={detalle} history={props.history}/>
            </Paper>
            </Container>

            <Mensaje 
                success={args.includes("editarMedica") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizó la consulta médica."}
                mensajeError={"Hubo un error al editar la consulta médica."}
            />
        </div>
    );

}

export default DetalleConsultaMedica;