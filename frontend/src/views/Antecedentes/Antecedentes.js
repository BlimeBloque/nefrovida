import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DetallesAntecedentesFamiliares from './seccionesDetalles/DetallesAntecedentesFamiliares';
import DetallesAntecedentesPersonales from './seccionesDetalles/DetallesAntecedentesPersonales';
import DetallesDatosVivienda from './seccionesDetalles/DetallesDatosVivienda';
import DetallesAntecedentesGinecoObstetricos from './seccionesDetalles/DetallesAntecedentesGinecoObstetricos';
import EliminarAntecedentes from './EliminarAntecedentes';
import Cookies from 'js-cookie';

const useStyle = makeStyles(theme => ({
flexTitulo:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(4),
},
flexNormal:{
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
},
flexContent:{
    marginBottom: theme.spacing(3),
},paper: {
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
tarjeta: {
    minWidth: "25%",
    margin: theme.spacing(2),
},
imcSobreBajo: {
    color: "black",
    backgroundColor: "yellow",
},
imcNormal: {
    color: "white",
    backgroundColor: "green",
},
imcObesidad: {
    color: "white",
    backgroundColor: "red",
},
table: {
    width: "50%",
}

}));

const Antecedentes = (props) => {
const detalle = props.detalle;
const classes = useStyle();
const [eliminarOpen, setEliminarOpen] = useState(false);

const handleEliminarOpen = () => {
    setEliminarOpen(true);
}

const handleEliminarClose = () => {
    setEliminarOpen(false);
}

//Dar formato a fecha
const date = new Date(detalle.created_at);
const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

return(
    <center>
        <div id="header" className={classes.flexTitulo}>
            <Typography variant="h5">{fecha}</Typography>
            <Typography variant="h3">{detalle.nombreBeneficiario}</Typography>
            <div id="botones">
            {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Medicina") ? 
                    <Tooltip title="Editar" arrow>
                        <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/consultaNutricion/editar/"+detalle.idConsultaNutricional)}>
                            <EditIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                :
                    <></>
                }
                {Cookies.get("roles").includes("Administrador") ? 
                    <Tooltip title="Eliminar" arrow>
                        <IconButton aria-label="Eliminar" color="secondary"  onClick={handleEliminarOpen}>
                            <RemoveCircleIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                :
                    <></>
                }
            </div>
        </div>
        <DetallesDatosVivienda classes={classes} detalle={detalle} />
        <DetallesAntecedentesPersonales classes={classes} detalle={detalle} />
        <DetallesAntecedentesFamiliares classes={classes} detalle={detalle} />
        <DetallesAntecedentesGinecoObstetricos classes={classes} detalle={detalle} />

        <EliminarAntecedentes
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idAntecedentes={detalle.idAntecedentes}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
        />
    </center>
)
}

export default Antecedentes;