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
import EliminarMicroalbuminuria from './EliminarMicroalbuminuria';

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
    bajo: {
        fontStyle: "normal",
        margin: theme.spacing(1),
        backgroundColor: "cyan",
    },
    alto: {
        fontStyle: "normal",
        margin: theme.spacing(1),
        backgroundColor: "red",
        color: "white",
    },
    anormal: {
        fontStyle: "normal",
        margin: theme.spacing(1),
        backgroundColor: "yellow",
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
    flex: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center",
    },
    xs: {
        width: "15%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    m: {
        width: "50%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}))

const DetalleMicroalbuminuria = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const [eliminarOpen, setEliminarOpen] = useState(false);
    const idMicroalbuminuria = props.match.params.idMicroalbuminuria;
    const args = props.location.search;

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }

    useEffect ( () => {
        http.get('/microalbuminuria/'+idMicroalbuminuria)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    //Dar formato a fecha
    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();


    

    const obtenerClase = (valor, valorBajo, valorAlto) => {
        if(valor)
        {
            if(Number(valor) < Number(valorBajo))
            {
                return classes.bajo
            }
            else if (Number(valor) > Number(valorAlto))
            {
                return classes.alto
            }
            else
            {
                return classes.normal
            }
        }
        else
        {
            return classes.faltante;
        }
    }

    const obtenerClaseRelacion = (valor, valorAnormal, valorAlto) => {
        console.log(valorAnormal+","+valor+","+valorAlto)
        if(valor)
        {
            if(Number(valorAnormal) < Number(valor) & Number(valor) < Number(valorAlto))
            {
                return classes.anormal
            }
            else if (Number(valor) > Number(valorAlto))
            {
                return classes.alto
            }
            else
            {
                return classes.normal
            }
        }
        else
        {
            return classes.faltante;
        }
    }

    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Microalbuminuría" />        
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
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/microalbuminuria/editar/"+detalle.idMicroalbuminuria)}>
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
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.normal}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="microalbumina" className={classes.flex}>
                    <Typography variant="body1" className={obtenerClase(detalle.microAlbumina, detalle.valorMicroAlbuminaBajo, detalle.valorMicroAlbuminaAlto)}>
                        <strong className={classes.normal}>Micro Albumina: </strong>
                        {detalle.microAlbumina ? detalle.microAlbumina : "No registrado"}
                    </Typography>
                    <div id="valores" className={classes.flexCenter}>
                        <Typography variant="body1" className={detalle.valorMicroAlbuminaBajo ? classes.normal : classes.faltante}>
                            {detalle.valorMicroAlbuminaBajo ? detalle.valorMicroAlbuminaBajo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>-</Typography>
                        <Typography variant="body1" className={detalle.valorMicroAlbuminaAlto ? classes.normal : classes.faltante}>
                            {detalle.valorMicroAlbuminaAlto ? detalle.valorMicroAlbuminaAlto : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>mg/dL</Typography>
                    </div>
                </div>
                <div id="creatinina" className={classes.flex}>
                    <Typography variant="body1" className={obtenerClase(detalle.creatinina, detalle.valorCreatininaBajo, detalle.valorCreatininaAlto)}>
                        <strong className={classes.normal}>Creatinina: </strong>
                        {detalle.creatinina ? detalle.creatinina : "No registrado"}
                    </Typography>
                    <div id="valores" className={classes.flexCenter}>
                        <Typography variant="body1" className={detalle.valorCreatininaBajo ? classes.normal : classes.faltante}>
                            {detalle.valorCreatininaBajo ? detalle.valorCreatininaBajo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>-</Typography>
                        <Typography variant="body1" className={detalle.valorCreatininaAlto ? classes.normal : classes.faltante}>
                            {detalle.valorCreatininaAlto ? detalle.valorCreatininaAlto : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>mg/dL</Typography>
                    </div>
                </div>
                <div id="relacion" style={{marginLeft: "2.5%"}} className={classes.flex}>
                    <Typography variant="body1"
                        className={obtenerClaseRelacion(detalle.relacion, detalle.valorRelacionAnormalBajo, detalle.valorRelacionAnormalAlto)}>
                        <strong className={classes.normal}>Relación Micro Albumina / Creatinina: </strong>
                        {detalle.relacion ? detalle.relacion : "Faltan datos por registrar"}
                    </Typography>
                    <div>
                        <div id="valores-normal" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.normal}>NORMAL = </Typography>
                            <Typography variant="body1" className={detalle.valorRelacionNormalBajo ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionNormalBajo ? detalle.valorRelacionNormalBajo : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorRelacionNormalAlto ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionNormalAlto ? detalle.valorRelacionNormalAlto : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/g</Typography>
                        </div>
                        <div id="valores-anormal" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.normal}>ANORMAL = </Typography>
                            <Typography variant="body1" className={detalle.valorRelacionAnormalBajo ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionAnormalBajo ? detalle.valorRelacionAnormalBajo : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorRelacionAnormalAlto ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionAnormalAlto ? detalle.valorRelacionAnormalAlto : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/g</Typography>
                        </div>
                        <div id="valores-anormal-alto" className={classes.flexCenter}>
                            <Typography variant="body1" className={classes.normal}>ANORMAL ALTO = </Typography>
                            <Typography variant="body1" className={detalle.valorRelacionAnormalAltoBajo ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionAnormalAltoBajo ? detalle.valorRelacionAnormalAltoBajo : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorRelacionAnormalAltoAlto ? classes.normal : classes.faltante}>
                                {detalle.valorRelacionAnormalAltoAlto ? detalle.valorRelacionAnormalAltoAlto : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/g</Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <Typography variant="body1" className={detalle.metodo ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Método: </strong>
                        {detalle.metodo ? detalle.metodo : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.nota ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Nota: </strong>
                        <Paper className={classes.nota}>
                            {detalle.nota ? detalle.nota : "No registrado"}
                        </Paper>
                    </Typography>
                </div>
            </Paper>
            </Container>

            <EliminarMicroalbuminuria
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idMicroalbuminuria={detalle.idMicroalbuminuria}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
            />

            {/* EDITAR MICROALBUMINURIA RETRO*/}
            <Mensaje
                success={args.includes("editarMicroalbuminuria") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizó la micralbuminuría."}
                mensajeError={"Hubo un error al editar la micralbuminuría."}
            />
        </div>
    );

}

export default DetalleMicroalbuminuria;