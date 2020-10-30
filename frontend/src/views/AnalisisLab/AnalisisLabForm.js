import React, { useState, useEffect } from 'react'
import {FormControl, InputLabel, makeStyles, MenuItem, Select, Typography, Button} from '@material-ui/core';
import http from '../../http-common';

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

export default function AnalisisLabForm (props)
{
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

    const handleChange = (event) => {
        setTipoAnalisis(event.target.value);
    };
    
    const handleNext = () => {
        switch(tipoAnalisis)
        {
            case 1:
                props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarExamenOrina");
            break;
            case 2:
                props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarDepuracionCreatinina");
            break;
            case 3:
                props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarQuimicaSanguinea");
            break;
            case 4:
                props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarMicroalbuminuria");
            break;
        }
    }

    return(
        <center className={classes.root}>
            <Typography variant="h5">Análisis de Laboratorio para {beneficiario.nombreBeneficiario} </Typography>

            <FormControl className={classes.textoLargo}>
                <InputLabel htmlFor="tipo-analisis-select">Selecciona el análisis de laboratorio que deseas registrar</InputLabel>
                <Select
                id="tipo-analisis-select"
                value={tipoAnalisis}
                onChange={handleChange}
                >
                <MenuItem value={1}>Examen General de Orina</MenuItem>
                <MenuItem value={2}>Depuración de Creatinina en Orina de 24 Hrs</MenuItem>
                <MenuItem value={3}>Química Sanguínea</MenuItem>
                <MenuItem value={4}>Microalbuminuría</MenuItem>
                </Select>
            </FormControl>
            <div className={classes.botones}>
            <Button variant="contained" color='primary' onClick={handleNext}>Siguiente</Button>
            </div>
        </center>
    )
}