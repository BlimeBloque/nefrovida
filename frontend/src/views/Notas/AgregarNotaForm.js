
import {makeStyles, CssBaseline, Typography, Stepper, Step, Grid, IconButton, Tooltip} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Controls from "../../components/FormComponents/Controls";
import AttachFileIcon from '@material-ui/icons/AttachFile';



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
    }

}))

const initialFValues = {
    idBeneficiario: '',
    idTipoNota: '',
    comentario: '',
    urlArchivo: '',
}


export default function AgregarNotaForm(props) {

    const[values, setValues] = useState(initialFValues);
    const [tiposNotas, setTiposNotas]  = useState([]);
    const[errors, setErrors] = useState({});
    const classes = useStyle();
    const [beneficiario, setBeneficiario] = useState([]);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect ( () => {

        axios.get('http://127.0.0.1:8000/api/tiponota')
        .then(res => { setTiposNotas (res.data.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);


   useEffect ( () => {

    axios.get('http://localhost:8000/api/beneficiarios/'+props.idBeneficiario)
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

const onSubmit = e => {
    console.log('submit');
    values.idBeneficiario = props.idBeneficiario;
    console.log(values);

    e.preventDefault();

    if(validate()){

        axios.post('http://localhost:8000/api/nota', values, {headers: {"Accept": "application/json"}})
        .then(res => {
            console.log(res)
            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNota=1");
        })
        .catch(err => {
            console.log(err)
            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNota=0");
        });


    } else {
       
    }
}


    return (
        <div >
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
                        <Tooltip title="Adjuntar archivo">
                            <IconButton color="primary">
                                <AttachFileIcon fontSize="large"/>
                            </IconButton>
                        </Tooltip>
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
