
import {makeStyles, CssBaseline, Typography, Stepper, Step, Grid, IconButton, Tooltip} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Controls from "../../components/FormComponents/Controls";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Button from '../../components/FormComponents/Button';
import { formatDuration } from 'date-fns';
import http from "../../http-common"
import { Link } from 'react-router-dom';



const useStyle = makeStyles(theme => ({
    root:{
       '& .MuiFormControl-root' :{
           width: '50%',
           margin: theme.spacing(1),
       } 
    }, 
    comment:{
        '& .MuiFormControl-root' :{
            width: '100%',
            margin: theme.spacing(1),
        } 
     },
    form: {
            display: 'flex',
            justifyContent: 'space-evenly'
    },
    input: {
        display: 'none',
      }

}))

const initialFValues = {
    idBeneficiario: '',
    idTipoNota: '',
    comentario: '',
    url_archivo: '',
}

const initialFileValues = {
    archivo: null,
    archivoNombre: '',
    archivoURL: '',
}



export default function AgregarNotaForm(props) {

    const[values, setValues] = useState(initialFValues);
    const [tiposNotas, setTiposNotas]  = useState([]);
    const[errors, setErrors] = useState({});
    const classes = useStyle();
    const [beneficiario, setBeneficiario] = useState([]);
    const [archivo, setArchivo] = useState(initialFileValues);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect ( () => {

        http.get('/tiponota')
        .then(res => { setTiposNotas (res.data.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);


   useEffect ( () => {

    http.get('/beneficiarios/'+props.idBeneficiario)
        .then(res => { setBeneficiario(res.data[0])
    })
        .catch((e) => {
        console.log(e)
    })
}, []);

   console.log(tiposNotas)


   const validate = () => {
    let temp = {}
    temp.tipoNota = values.idTipoNota?"":"Este campo es requerido"
    temp.comentaio = values.comentario?"":"Este campo es requerido"
    setErrors({
        ...temp
    })

    return Object.values(temp).every(x => x == "")
}


const fileSelectedHandler = (e) => {
    setArchivo({
        archivo: e.target.files[0],
        archivoNombre: e.target.files[0].name   
    })
}


const onSubmit = e => {
    console.log('submit');
    values.idBeneficiario = props.idBeneficiario;
    console.log(archivo);

    e.preventDefault();

    if(validate()){

        if (archivo.archivo === null) {

        } else {
            const fd = new FormData();
            fd.append('file', archivo.archivo, archivo.archivoNombre);
            http.post('/upload', fd, {
                onUploadProgress: progressEvent => {
                    console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total *100) + "%");
                }
            })
                 .then(res => {
                     console.log(res.data.result);
                     values.url_archivo = res.data.result;
                     console.log(values);
                        http.post('/nota', values)
                        .then(res => {
                            console.log(res)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNota=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNota=0");
                        });

                                })
        }
                    
    } else {
       
    }
}


    return (
        <div >
            <Link variant="body2" to={"/beneficiarios/" + props.idBeneficiario}>
            <IconButton color="primary" aria-label="edit">
                <ArrowBackIcon/>
              </IconButton>
              </Link>
            <div className={classes.form}>
            <Typography variant="h5" gutterBottom>Nota para {beneficiario.nombreBeneficiario}</Typography>
            </div>
            <br></br><br></br>
            <CssBaseline/>
            <form>
                <div className={classes.root}>
                <Grid container justify="space-between" spacing="3">
                    <Grid item xs={8}>
                        <Controls.Select
                            name="idTipoNota"
                            label="Tipo de nota *"
                            value={values.idTipoNota}
                            onChange={handleInputChange}
                            options={tiposNotas}
                            error={errors.tipoNota}
                            />
                    </Grid>
                    <Grid item xs={1}>
                        <input
                            className={classes.input}
                            id="contained-button-file"
                            type="file"
                            onChange={fileSelectedHandler}
                        />
                        <label htmlFor="contained-button-file">
                            <Tooltip title ="Adjuntar archivo">
                                <IconButton color="primary" component="span">
                                    <AttachFileIcon fontSize="large"/>
                                </IconButton>
                            </Tooltip>
                        </label>
                        
                    </Grid>
                </Grid>
                <Grid container justify="flex-end" direction="row">
                    <Grid item xs={3}>
                            <Typography color="primary">{archivo.archivoNombre}</Typography>
                    </Grid>
                </Grid>
                </div>
                <div className={classes.comment}>
                <Grid>
                    <Grid item xs={12}>
                    <Controls.InputMultiline
                            name="comentario" 
                            label="Comentario *" 
                            value={values.comentario}
                            onChange = {handleInputChange}
                            error={errors.comentaio}
                        />
                    </Grid>
                </Grid>
                <Grid container justify="flex-end">
                    <Grid item xs={1}>
                        <Controls.Button
                            text="Aceptar"
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            onClick={onSubmit}
                            />
                    </Grid>
                </Grid>
                </div>
            </form>
        </div>
    )
}
