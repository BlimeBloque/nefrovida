import React, { useState, useEffect } from 'react'
import http from '../../../http-common';
import Sidenav from "../../../components/Nav/Sidenav";
import { Paper, makeStyles, Container, Typography, Tooltip } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import Mensaje from '../../../components/Mensaje';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EliminarDepuracionCreatinina from './EliminarDepuracionCreatinina';
import Cookies from 'js-cookie';

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

const DetalleDepuracionCreatinina = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const [eliminarOpen, setEliminarOpen] = useState(false);
    const idDepuracionCreatinina = props.match.params.idDepuracionCreatinina;
    const args = props.location.search;

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }

    useEffect ( () => {
        http.get('/depuracionCreatinina/'+idDepuracionCreatinina)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);

    //Dar formato a fecha
    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    const obtenerClasePorSexo = (valor, valorBajoHombre, valorAltoHombre, valorBajoMujer, valorAltoMujer) => {
        if(valor)
        {
            if(detalle.sexo == "H")
            {
                if(Number(valor) < Number(valorBajoHombre))
                {
                    return classes.bajo
                }
                else if (Number(valor) > Number(valorAltoHombre))
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
                if(Number(valor) < Number(valorBajoMujer))
                {
                    return classes.bajo
                }
                else if (Number(valor) > Number(valorAltoMujer))
                {
                    return classes.alto
                }
                else
                {
                    return classes.normal
                }
            }
        }
        else
        {
            return classes.faltante;
        }
    }

    return(
        <div className={classes.container}>
            <Sidenav titulo="Detalle de Depuración de Creatinina en Orina de 24 Hrs" />        
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
                    {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Laboratorio") ? 
                        <Tooltip title="Editar" arrow>
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/depuracionCreatinina/editar/"+detalle.idDepuracionCreatinina)}>
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    :
                        <></>
                    }
                    {Cookies.get("roles").includes("Administrador") ? 
                        <Tooltip title="Eliminar" arrow>
                            <IconButton aria-label="Eliminar" color="secondary" onClick={handleEliminarOpen}>
                                <RemoveCircleIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    :
                        <></>
                    }
                    </div>
                </div>
                <center>
                    <Typography variant="body1" className={detalle.talla ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Talla: </strong>
                        {detalle.talla ? detalle.talla : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.peso ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Peso: </strong>
                        {detalle.peso ? detalle.peso : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.volumen ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Volumen: </strong>
                        {detalle.volumen ? detalle.volumen : "No registrado"}
                    </Typography>
                    <Typography variant="body1" className={detalle.superficieCorporal ? classes.normal : classes.faltante}>
                        <strong className={classes.normal}>Superficie Corporal: </strong>
                        {detalle.superficieCorporal ? detalle.superficieCorporal : "No registrado"}
                    </Typography>
                </center>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.normal}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="creatinina-suero" className={classes.flex}>
                    <Typography variant="body1"
                        className={obtenerClasePorSexo(detalle.creatininaEnSuero, detalle.valorCreatininaBajoHombre, detalle.valorCreatininaAltoHombre, 
                                                detalle.valorCreatininaBajoMujer, detalle.valorCreatininaAltoMujer)}
                    >
                        <strong className={classes.normal}>Creatinina en Suero: </strong>
                        {detalle.creatininaEnSuero ? detalle.creatininaEnSuero : "No registrado"}
                    </Typography>
                    <div>
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.valorCreatininaBajoMujer ? classes.normal : classes.faltante}>
                                {detalle.valorCreatininaBajoMujer ? detalle.valorCreatininaBajoMujer : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorCreatininaAltoMujer ? classes.normal : classes.faltante}>
                                {detalle.valorCreatininaAltoMujer ? detalle.valorCreatininaAltoMujer : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/dL MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.valorCreatininaBajoHombre ? classes.normal : classes.faltante}>
                                {detalle.valorCreatininaBajoHombre ? detalle.valorCreatininaBajoHombre : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorCreatininaAltoHombre ? classes.normal : classes.faltante}>
                                {detalle.valorCreatininaAltoHombre ? detalle.valorCreatininaAltoHombre : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/dL HOMBRES</Typography>
                        </div>
                    </div>
                </div>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.normal}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="depuracion-creatinina" className={classes.flex}>
                    <Typography variant="body1" 
                        className={obtenerClasePorSexo(detalle.depuracionCreatinina, detalle.valorDepuracionBajoHombre, detalle.valorDepuracionAltoHombre, 
                                                detalle.valorDepuracionBajoMujer, detalle.valorDepuracionAltoMujer)}
                    >
                        <strong className={classes.normal}>Depuración de Creatinina: </strong>
                        {detalle.depuracionCreatinina ? detalle.depuracionCreatinina : "No registrado"}
                    </Typography>
                    <div>
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.valorDepuracionBajoMujer ? classes.normal : classes.faltante}>
                                {detalle.valorDepuracionBajoMujer ? detalle.valorDepuracionBajoMujer : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorDepuracionAltoMujer ? classes.normal : classes.faltante}>
                                {detalle.valorDepuracionAltoMujer ? detalle.valorDepuracionAltoMujer : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>ml/min MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.valorDepuracionBajoHombre ? classes.normal : classes.faltante}>
                                {detalle.valorDepuracionBajoHombre ? detalle.valorDepuracionBajoHombre : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.valorDepuracionAltoHombre ? classes.normal : classes.faltante}>
                                {detalle.valorDepuracionAltoHombre ? detalle.valorDepuracionAltoHombre : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>ml/min HOMBRES</Typography>
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

            <EliminarDepuracionCreatinina
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idDepuracionCreatinina={detalle.idDepuracionCreatinina}
                nombre={detalle.nombreBeneficiario}
                fecha={fecha}
            />
            
            {/* EDITAR DEPURACION DE CREATININA RETRO*/}
            <Mensaje
                success={args.includes("editarDepuracionCreatinina") ? args.slice(-1) : -1} 
                mensajeExito={"Se actualizó la depuración de creatinina."}
                mensajeError={"Hubo un error al editar la depuración de creatinina."}
            />

        </div>
    );

}

export default DetalleDepuracionCreatinina;