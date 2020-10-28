import React, {useState, useEffect} from 'react'
import {makeStyles, CssBaseline, Typography, Stepper, Step, Grid, IconButton, Tooltip} from '@material-ui/core';
import http from "../../http-common"
import Controls from "../../components/FormComponents/Controls";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from '../../components/FormComponents/Button';
import { formatDuration } from 'date-fns';
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
      }, 
      botones: {
        '& > *': {
          margin: theme.spacing(1),
          float: "right",
        },
    }

}))

const initialFValues = {
    idBeneficiario: '',
    idTipoNota: '',
    comentario: '',
    url_archivo: '',
    nombreArchivo: ''
}

const initialFileValues = {
    archivo: null,
    archivoNombre: '',
    archivoURL: '',
}



export default function EditarNotaForm(props) {

    const[values, setValues] = useState(initialFValues);
    const classes = useStyle();
    const [tiposNotas, setTiposNotas]  = useState([]);
    const[errors, setErrors] = useState({});
    const [archivo, setArchivo] = useState(initialFileValues);
    const [editedValues, setEditedValues] = useState({});

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }


    console.log(props.idNota);

    useEffect ( () => {

        http.get('/nota/'+ props.idNota)
        .then(res => { setValues (res.data[0])
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);

   useEffect ( () => {

    http.get('/tiponota')
    .then(res => { setTiposNotas (res.data.data)
})
    .catch((e) => {
        console.log(e)
    })
}, []);

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

const removeFile = () => {
    setArchivo({
        archivo: null,
        archivoNombre: null   
    })
    values.url_archivo = null;
}

const getFileName = () => {
    editedValues.nombreArchivo = values.url_archivo.split('/');
}


const onSubmit = e => {
    e.preventDefault();
 
    editedValues.idBeneficiario = values.idBeneficiario
    editedValues.idTipoNota =  values.idTipoNota
    editedValues.comentario =  values.comentario
    editedValues.url_archivo =  values.url_archivo

 
    console.log("submit")

    if(validate()){

        if (archivo.archivo === null) {
            http.put('/nota/'+values.idNota, editedValues)
            .then(res => {
                console.log(res)
                props.history.push("/beneficiarios/"+values.idBeneficiario+"?editarNota=1");
            })
            .catch(err => {
                console.log(err)
                props.history.push("/beneficiarios/"+values.idBeneficiario+"?editarNota=0");
            });
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
                     editedValues.url_archivo = res.data.result;
                     console.log(editedValues);
                        http.put('/nota/'+values.idNota, editedValues)
                        .then(res => {
                            console.log(res)
                            props.history.push("/beneficiarios/"+values.idBeneficiario+"?editarNota=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/beneficiarios/"+values.idBeneficiario+"?editarNota=0");
                        });

                                })
        }
                    
    } else {
       
    }
}

   console.log(values);


    return (
        <div>
             <Link variant="body2" to={"/beneficiarios/" + values.idBeneficiario}>
            <IconButton color="primary" aria-label="edit">
                <ArrowBackIcon/>
              </IconButton>
              </Link>
            <div className={classes.form}>
            <Typography variant="h5" gutterBottom>Nota para {values.nombreBeneficiario}</Typography>
            </div>
            <div className={classes.botones}>
            <Tooltip title ="Eliminar archivo adjunto">
                <IconButton color="secondary" component="span" onClick={removeFile}>
                    <RemoveCircleOutlineIcon fontSize="small"/>
                </IconButton>
             </Tooltip>
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
