import React, { useState, useEffect } from 'react'
import {FormControl, InputLabel, makeStyles, MenuItem, Select, Typography, Button} from '@material-ui/core';
import http from '../../http-common';
import Controls from "../../components/FormComponents/Controls"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center",
    },
    botones: {
        marginTop: theme.spacing(3),
    },
    textoLargo: {
        width: "70%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

const initialValues = {
    idJornada: ''
}

export default function SelectReporteForm (props)
{
    const [jornadas, setJornadas] = useState([]);
    const[values, setValues] = useState(initialValues);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect ( () => {

        http.get('/jornadas')
        .then(res => { setJornadas (res.data)
    })
        .catch((e) => {
            console.log(e)
        })
    }, []);

    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [tipoAnalisis, setTipoAnalisis] = useState();

    useEffect(() => {
        http.get('/beneficiarios/'+props.idBeneficiario)
            .then(res => { setBeneficiario(res.data[0])
            })
            .catch((e) => {
            console.log(e)
            })
    }, [])
    
    const handleNext = () => {
        props.history.push("/reportes/"+values.idJornada);
    }

    const reporteGeneral = () => {
        props.history.push("/reportes/general");
    }
    

    return(
        <center className={classes.root}>
            <Typography variant="h5"> Reporte por Jornada </Typography>

            <FormControl className={classes.textoLargo}>
                <Controls.SelectJornadas
                        name="idJornada"
                        label="Jornada *"
                        value={values.idJornada}
                        onChange={handleInputChange}
                        options={jornadas}
                    />
            </FormControl>
            <div className={classes.botones}>
                <Button variant="contained" color='primary' onClick={handleNext}>Siguiente</Button>
            </div>
            <br/><br/>
            <Typography variant="h5"> Reporte General </Typography>
            <div className={classes.botones}>
                <Button variant="contained" color='primary' onClick={reporteGeneral}>Ir a reporte general</Button>
            </div>

        </center>
    )
}