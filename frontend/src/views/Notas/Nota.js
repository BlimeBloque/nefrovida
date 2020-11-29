import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow} from '@material-ui/core';
import React , { useState, useEffect }from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios'
import EliminarNota from './EliminarNota'
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


function download(props){

    axios({
        url: 'http://127.0.0.1:8000/api/download/' + props, //your url
        method: 'GET',
        responseType: 'blob', // important
      }).then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         const arr = props.split('.');
         console.log(arr);
         link.setAttribute('download', 'archivo.'+arr[1]); //or any other extension
         document.body.appendChild(link);
         link.click();
      });

}

function ArchivoAdjunto(props) {

    const classes = useStyle();

    if(props.url === null){
        return (<div></div>)
    } else {
        return (
            <div>
                 <Tooltip title="Descargar archivo adjunto" arrow>
                    <IconButton aria-label="Eliminar" color="primary"  onClick={() => download(props.url)}>
                        <GetAppIcon fontSize="large" />
                    </IconButton>
                </Tooltip>
            </div>
            
        )
    }
}


export default function Nota(props) {

    

    const detalle = props.detalle;
    const classes = useStyle();
    console.log(detalle);
    const [eliminarOpen, setEliminarOpen] = useState(false);

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }

    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    
    return (
        
        <div>
            <div id="header" className={classes.flexTitulo} >
                <Typography variant="h5"></Typography>
                    <div id="botones">
                        <Tooltip title="Editar" arrow>
                            <IconButton aria-label="Editar" color="primary"  onClick={() => props.history.push("/nota/editar/"+detalle.idNota)}>
                                <EditIcon fontSize="large" />
                            </IconButton>
                        </Tooltip>
                    {Cookies.get("roles").includes("Administrador")  ? 
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
            <Typography align="center" variant="h4">{detalle.tituloNota}</Typography>
            <Typography  variant="h6">{detalle.nombre}</Typography>

            <div id="contenido">
                <br></br><br></br>
                <Typography variant="h6" className={classes.subtitulo}>Comentario: </Typography>
                <Typography className= {classes.normal}> {detalle.comentario} </Typography>
                <br></br><br></br>
                <ArchivoAdjunto url ={detalle.url_archivo}/>
            </div>

            <EliminarNota
                open={eliminarOpen}
                handleOpen={handleEliminarOpen}
                handleClose={handleEliminarClose}
                history={props.history}
                idBeneficiario={detalle.idBeneficiario}
                idNota={detalle.idNota}
                nombre={detalle.nombreBeneficiario}
                archivo={detalle.url_archivo}
                fecha={fecha}
            />
        </div>
       
    )
}
