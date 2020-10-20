import React, {useState, useEffect} from 'react'

import axios from 'axios'

import {CssBaseline, FormControl, FormLabel, makeStyles, Typography, Button, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import { withRouter } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    root:{
        display: 'block',
        textAlign: 'center'
      
    }, 
    form: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    },
    formItems: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
    },
    back : {
        marginRight: '10px'
    }
}))

function AgregarEvaluacionForm(props) {
    const { history } = props;
    const classes = useStyle();
    const [value, setValue] = useState('');
    const[opciones, setOpciones] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect (() => {
        axios.get('http://127.0.0.1:8000/api/evaluacionesPreguntas')
        .then(res => { setOpciones (res.data.data /*.nombreProp (para incio/fin) */)
        })
        .catch((e) => {
            console.log(e)
        })
        
    }, []);

    submitForm(() => {
        
    })
    
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Typography variant="h4" className={classes.title}></Typography><br />
            <form className={classes.form}>   
                {
                    opciones.map((opcion) => (
                    <>
                        <FormLabel component="legend">{opcion.evaluacionPregunta}</FormLabel>
                        <RadioGroup row aria-label="respuestas" name="pregunta-respuestas" onChange={handleChange}>
                            <FormControlLabel value="Sí" control={<Radio />} label="Sí" />
                            <FormControlLabel value="No" control={<Radio />} label="No" />
                        </RadioGroup> <br/>
                    </>
                    ))
                }
                <div className={classes.formItems}>
                    <Button color="default" className={classes.back} onClick={() => history.goBack()}>Cancelar</Button>
                    <Button variant="contained" color="primary" onClick={submitForm}>Completar</Button>
                </div>
              
            </form>
        </div>
    )
}


export default withRouter(AgregarEvaluacionForm);