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

const DetalleQuimicaSanguinea = (props) => {
    const classes = useStyle();
    const [detalle, setDetalle] = useState([]);
    const idQuimicaSanguinea = props.match.params.idQuimicaSanguinea;
    const args = props.location.search;

    useEffect ( () => {
        http.get('/quimicaSanguinea/'+idQuimicaSanguinea)
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
        console.log(valor);
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

    const obtenerClasePorSexo = (valor, valorBajoHombre, valorAltoHombre, valorBajoMujer, valorAltoMujer) => {
        console.log(valor);
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
            <Sidenav titulo="Detalle de Química Sanguínea" />        
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
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/quimicaSanguinea/editar/"+detalle.idQuimicaSanguinea)}>
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Eliminar" arrow>
                            <IconButton aria-label="Eliminar" color="secondary">
                                <RemoveCircleIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
                <div className={classes.flex}>
                    <div className={classes.xs}></div>
                    <Typography variant="body1" className={classes.normal}><strong>Valores de Referencia</strong></Typography>
                </div>
                <div id="glucosa" className={classes.flex}>
                    <Typography variant="body1" className={obtenerClase(detalle.glucosa, detalle.valorGlucosaBajo, detalle.valorGlucosaAlto)}>
                        <strong className={classes.normal}>Glucosa: </strong>
                        {detalle.glucosa ? detalle.glucosa : "No registrado"}
                    </Typography>
                    <div id="valores" className={classes.flexCenter}>
                        <Typography variant="body1" className={detalle.valorGlucosaBajo ? classes.normal : classes.faltante}>
                            {detalle.valorGlucosaBajo ? detalle.valorGlucosaBajo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>-</Typography>
                        <Typography variant="body1" className={detalle.valorGlucosaAlto ? classes.normal : classes.faltante}>
                            {detalle.valorGlucosaAlto ? detalle.valorGlucosaAlto : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>mg/dL</Typography>
                    </div>
                </div>
                <div id="urea" className={classes.flex}>
                    <Typography variant="body1" className={obtenerClase(detalle.urea, detalle.valorUreaBajo, detalle.valorUreaAlto)}>
                        <strong className={classes.normal}>Urea: </strong>
                        {detalle.urea ? detalle.urea : "No registrado"}
                    </Typography>
                    <div id="valores" className={classes.flexCenter}>
                        <Typography variant="body1" className={detalle.valorUreaBajo ? classes.normal : classes.faltante}>
                            {detalle.valorUreaBajo ? detalle.valorUreaBajo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>-</Typography>
                        <Typography variant="body1" className={detalle.valorUreaAlto ? classes.normal : classes.faltante}>
                            {detalle.valorUreaAlto ? detalle.valorUreaAlto : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>mg/dL</Typography>
                    </div>
                </div>
                <div id="bun" className={classes.flex}>
                    <Typography variant="body1" className={obtenerClase(detalle.bun, detalle.valorBunBajo, detalle.valorBunAlto)}>
                        <strong className={classes.normal}>Bun: </strong>
                        {detalle.bun ? detalle.bun : "No registrado"}
                    </Typography>
                    <div id="valores" className={classes.flexCenter}>
                        <Typography variant="body1" className={detalle.valorBunBajo ? classes.normal : classes.faltante}>
                            {detalle.valorBunBajo ? detalle.valorBunBajo : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>-</Typography>
                        <Typography variant="body1" className={detalle.valorBunAlto ? classes.normal : classes.faltante}>
                            {detalle.valorBunAlto ? detalle.valorBunAlto : "No registrado"}
                        </Typography>
                        <Typography variant="body1" className={classes.normal}>mg/dL</Typography>
                    </div>
                </div>
                <div id="creatinina" style={{marginLeft: "2.5%"}} className={classes.flex}>
                    <Typography variant="body1"
                        className={obtenerClasePorSexo(detalle.creatinina, detalle.creatininaHombreBajo, detalle.creatininaHombreAlto, 
                                                detalle.creatininaMujerBajo, detalle.creatininaMujerAlto)}
                    >
                        <strong className={classes.normal}>Creatinina: </strong>
                        {detalle.creatinina ? detalle.creatinina : "No registrado"}
                    </Typography>
                    <div>
                        <div id="valores-mujer" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.creatininaMujerBajo ? classes.normal : classes.faltante}>
                                {detalle.creatininaMujerBajo ? detalle.creatininaMujerBajo : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.creatininaMujerAlto ? classes.normal : classes.faltante}>
                                {detalle.creatininaMujerAlto ? detalle.creatininaMujerAlto : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/dL MUJERES</Typography>
                        </div>
                        <div id="valores-hombre" className={classes.flexCenter}>
                            <Typography variant="body1" className={detalle.creatininaHombreBajo ? classes.normal : classes.faltante}>
                                {detalle.creatininaHombreBajo ? detalle.creatininaHombreBajo : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>-</Typography>
                            <Typography variant="body1" className={detalle.creatininaHombreAlto ? classes.normal : classes.faltante}>
                                {detalle.creatininaHombreAlto ? detalle.creatininaHombreAlto : "No registrado"}
                            </Typography>
                            <Typography variant="body1" className={classes.normal}>mg/dL HOMBRES</Typography>
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

        </div>
    );

}

export default DetalleQuimicaSanguinea;