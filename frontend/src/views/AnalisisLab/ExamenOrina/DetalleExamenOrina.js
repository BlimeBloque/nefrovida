import React, { useState, useEffect } from 'react'
import http from '../../../http-common';
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Button, Typography, Tooltip } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Mensaje from '../../../components/Mensaje';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EliminarExamenOrina from './EliminarExamenOrina';

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
    flexTitulo:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        marginBottom: theme.spacing(4),
    },
    paper: {
        height: 140,
        width: 100,
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
    normal: {
        fontStyle: "normal",
        margin: theme.spacing(1),
    },
    faltante: {
        fontStyle: "italic",
        margin: theme.spacing(1),
    },
    subtitulo: {
        margin: theme.spacing(2),
        fontWeight: "bold",
        textDecoration: "underline"
    },
    nota: {
        minHeight: 100,
    },
}))

const DetalleExamenOrina = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const [eliminarOpen, setEliminarOpen] = useState(false);
    const idExamenOrina = props.match.params.idExamenOrina;
    const args = props.location.search;

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }

    useEffect ( () => {
        http.get('/examenOrina/'+idExamenOrina)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    //Dar formato a fecha
    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();


    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Examen General de Orina" />        
            <Container>
            
            <Paper className={classes.pageContent}>
                <Link variant="body2" to={"/beneficiarios/"+detalle.idBeneficiario}>
                    <IconButton color="primary" aria-label="edit">
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
                <div id="header" className={classes.flexTitulo}>
                    <Typography variant="h5">{fecha}</Typography>
                    <Typography variant="h3">{detalle.nombreBeneficiario}</Typography>
                    <div id="botones">
                        <Tooltip title="Editar" arrow>
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/examenOrina/editar/"+detalle.idExamenOrina)}>
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" arrow>
                            <IconButton aria-label="Eliminar" color="secondary" onClick={handleEliminarOpen}>
                                <RemoveCircleIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <center id="examen-macroscopico">
                    <Typography variant="h5"  className={classes.subtitulo}>Examen Macroscópico</Typography>
                    <Typography variant="body1" className={detalle.color ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Color: </strong>
                        {detalle.color ? detalle.color : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.aspecto ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Aspecto: </strong>
                        {detalle.aspecto ? detalle.aspecto : "No registrado"}
                    </Typography>
                </center>
                <center id="examen-quimico">
                    <Typography variant="h5"  className={classes.subtitulo}>Examen Químico</Typography>
                    <Typography variant="body1" className={detalle.ph ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>PH: </strong>
                        {detalle.ph ? detalle.ph : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.densidad ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Densidad: </strong>
                        {detalle.densidad ? detalle.densidad : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.nitritos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Nitritos: </strong>
                        {detalle.nitritos ? detalle.nitritos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.glucosa ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Glucosa: </strong>
                        {detalle.glucosa ? detalle.glucosa : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.proteinas ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Proteinas: </strong>
                        {detalle.proteinas ? detalle.proteinas : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.hemoglobina ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Hemoglobina: </strong>
                        {detalle.hemoglobina ? detalle.hemoglobina : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.cuerposCetonicos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Cuerpos Cetónicos: </strong>
                        {detalle.cuerposCetonicos ? detalle.cuerposCetonicos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.bilirribuna ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Bilirribuna: </strong>
                        {detalle.bilirribuna ? detalle.bilirribuna : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.urobilinogeno ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Urobilinogeno: </strong>
                        {detalle.urobilinogeno ? detalle.urobilinogeno : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.leucocitos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Leucocitos: </strong>
                        {detalle.leucocitos ? detalle.leucocitos : "No registrado"}
                    </Typography>
                </center>
                <center id="observaciones-microscopicas">
                    <Typography variant="h5"  className={classes.subtitulo}>Observaciones Microscópicas</Typography>
                    <Typography variant="body1" className={detalle.eritrocitosIntactos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Eritrocitos Intactos: </strong>
                        {detalle.eritrocitosIntactos ? detalle.eritrocitosIntactos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.eritrocitosCrenados ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Eritrocitos Crenados: </strong>
                        {detalle.eritrocitosCrenados ? detalle.eritrocitosCrenados : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.observacionLeucocitos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Observación Leucocitos: </strong>
                        {detalle.observacionLeucocitos ? detalle.observacionLeucocitos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.cristales ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Cristales: </strong>
                        {detalle.cristales ? detalle.cristales : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.cilindros ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Cilindros: </strong>
                        {detalle.cilindros ? detalle.cilindros : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.celulasEpiteliales ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Células Epiteliales: </strong>
                        {detalle.celulasEpiteliales ? detalle.celulasEpiteliales : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.bacterias ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Bacterias: </strong>
                        {detalle.bacterias ? detalle.bacterias : "No registrado"}
                    </Typography>
                </center>
                <div>
                    <Typography variant="body1" className={detalle.nota ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Nota: </strong>
                        <Paper className={classes.nota}>
                            {detalle.nota ? detalle.nota : "No registrado"}
                        </Paper>
                    </Typography>
                </div>
            </Paper>
            </Container>

            <EliminarExamenOrina
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idExamenOrina={detalle.idExamenOrina}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
            />

            {/* EDITAR EXAMEN ORINA RETRO*/}
            <Mensaje
                success={args.includes("editarExamenOrina") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizó el examen de orina."}
                mensajeError={"Hubo un error al editar el examen de orina."}
            />

        </div>
    );

}

export default DetalleExamenOrina;