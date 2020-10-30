import React, { useState, useEffect } from 'react'
import {FormControl, Input, InputLabel, makeStyles, MenuItem, Select, Typography, Button, FormHelperText} from '@material-ui/core';
import http from '../../../http-common';
import {hasNumber, isNullOrWhitespace, isDecimal} from '../../../components/utils';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center",
    },
    botones: {
        marginTop: theme.spacing(3),
    },
    hide: {
        display: "none",
        visibility: "hidden",
    },
    show: {
        display: "block",
        visibility: "visible",
    },
    textoLargo: {
        width: "70%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    textoCorto: {
        width: "30%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    flex: {
        display: "flex",
        justifyContent: "space-evenly",
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
}));

const initialValues = {
    idBeneficiario: 0,
    color: '',
    aspecto: '',
    ph: '',
    densidad: '',
    nitritos: '',
    glucosa: '',
    proteinas: '',
    hemoglobina: '',
    cuerposCetonicos: '',
    bilirribuna: '',
    urobilinogeno: '',
    leucocitos: '',
    eritrocitosIntactos: '',
    eritrocitosCrenados: '',
    observacionLeucocitos: '',
    cristales: '',
    cilindros: '',
    celulasEpiteliales: '',
    bacterias: '',
    nota: '',
    metodo: 'Colorimétrico',
}

const initialErrorValues = {
    idBeneficiario: false,
    color: false,
    aspecto: false,
    ph: false,
    densidad: false,
    nitritos: false,
    glucosa: false,
    proteinas: false,
    hemoglobina: false,
    cuerposCetonicos: false,
    bilirribuna: false,
    urobilinogeno: false,
    leucocitos: false,
    eritrocitosIntactos: false,
    eritrocitosCrenados: false,
    observacionLeucocitos: false,
    cristales: false,
    cilindros: false,
    celulasEpiteliales: false,
    bacterias: false,
    nota: false,
    metodo: false,
}

export default function ExamenOrinaForm (props)
{
    const classes = useStyles();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    useEffect(() => {
        http.get('/beneficiarios/'+props.idBeneficiario)
            .then(res => { setBeneficiario(res.data[0])
            })
            .catch((e) => {
            console.log(e)
            })
    }, [])

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const handleColorChange = (event) => {
        handleInputChange(event);
        validateColor(event.target.value);
    }

    const validateColor = (color) => {
        if(hasNumber(color) |  (color.length > 0 & isNullOrWhitespace(color)))
        {
            setErrores({
                ...errores,
                'color': true
            });
        }
        else
        {
            setErrores({
                ...errores,
                'color': false
            });
        }
    }

    return(
        <center className={classes.root}>
            <Typography variant="h5">Examen de Orina de {beneficiario.nombreBeneficiario} </Typography>
            <form>
                <Typography variant="h6">Examen Macroscópico</Typography>
                <FormControl error={errores.color} className={classes.textoCorto}>
                    <InputLabel htmlFor="color">Color</InputLabel>
                    <Input
                    id="color"
                    value={values.color}
                    name="color"
                    onChange={handleColorChange}
                    aria-describedby="component-error-text"
                    />
                    <FormHelperText style={{display: errores.color ? "block" : "none"}} id="component-error-text">
                        Escribe un color válido (no puede tener números).
                    </FormHelperText>
                </FormControl>
            </form>
        </center>
    )
}