import { makeStyles, Typography, IconButton, Tooltip} from '@material-ui/core';
import React, {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EliminarConsultaMedica from './EliminarConsultaMedica';
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
table: {
    width: "50%",
}

}));


const ConsultaMedica = (props) => {
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
            {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Medico") ? 
                    <Tooltip title="Editar" arrow>
                        <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/consultaMedica/editar/"+detalle.idConsultaMedica)}>
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
        <div id="datosMedicos">
            <Typography variant="h5"  className={classes.subtitulo}>Datos Médicos</Typography>
            <Typography variant="body1" className={detalle.padecimientoActual ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Padecimiento Actual: </strong>
                {detalle.padecimientoActual ? detalle.padecimientoActual : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.taDerecho ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>T.A. Brazo Derecho: </strong>
                {detalle.taDerecho ? detalle.taDerecho : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.taIzquierdo ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>T.A. Brazo Izquierdo: </strong>
                {detalle.taIzquierdo ? detalle.taIzquierdo : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.frecuenciaCardiaca ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Frecuencia Cardíaca: </strong>
                {detalle.frecuenciaCardiaca ? detalle.frecuenciaCardiaca : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.frecuenciaRespiratoria ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Frecuencia Respiratoria: </strong>
                {detalle.frecuenciaRespiratoria ? detalle.frecuenciaRespiratoria : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.temperatura ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Temperatura: </strong>
                {detalle.temperatura ? detalle.temperatura : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.peso ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Peso: </strong>
                {detalle.peso ? detalle.peso : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.talla ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Talla: </strong>
                {detalle.talla ? detalle.talla : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.cabezaCuello ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Cabeza y Cuello: </strong>
                {detalle.cabezaCuello ? detalle.cabezaCuello : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.torax ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Tórax: </strong>
                {detalle.torax ? detalle.torax : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.abdomen ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Abdomen: </strong>
                {detalle.abdomen ? detalle.abdomen : "No registrado"}
            </Typography>
            <Typography variant="body1" className={detalle.extremidades ? classes.normal : classes.faltante}>
                <strong className={classes.normal}>Extremidades: </strong>
                {detalle.extremidades ? detalle.extremidades : "No registrado"}
            </Typography>
        </div>
        <div id="datosOtros">
            <Typography variant="h5"  className={classes.subtitulo}>Observaciones</Typography>
            <div className={classes.flexNormal}>
                <div>
                    <Typography variant="body1" className={detalle.neurologicoEstadoMental ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Neurológico y Estado Mental: </strong>
                        {detalle.neurologicoEstadoMental ? detalle.neurologicoEstadoMental : "No registrado"}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body1" className={detalle.otros ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Otros: </strong>
                        {detalle.otros ? detalle.otros : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.diagnosticos ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Diagnósticos: </strong>
                        {detalle.diagnosticos ? detalle.diagnosticos : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.planDeTratamiento ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Plan de Tratamiento: </strong>
                        {detalle.planDeTratamiento ? detalle.planDeTratamiento : "No registrado"}
                    </Typography>
                </div>
            </div>
            <EliminarConsultaMedica
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idConsultaMedica={detalle.idConsultaMedica}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
            />
        </div>
    </center>
)
}

export default ConsultaMedica;