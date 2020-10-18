import React, {useState, useEffect} from 'react'

import {CssBaseline, FormControl, FormGroup, FormLabel, Grid, InputAdornment, makeStyles, Radio, Typography} from '@material-ui/core';
import Controls from '../../components/FormComponents/Controls';
import RadioGroup from '../../components/FormComponents/RadioGroup';


const useStyle = makeStyles(theme => ({
    root:{
        display: 'block',
    }, 
    form: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
    }

}))

const respuestasPosibles = [
    {id:'S', title: 'Sí'},
    {id:'N', title: 'No'}
]

const initialValues = {
    siNo: 'S'  
}



export default function AgregarEvaluacionForm() {
    const classes = useStyle();
    const[values, setValues] = useState(initialValues);

    const handleInputChange= e => {
        const {name , value} = e.target;
        setValues({
            ...values,
            [name]:value 
        })
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Typography variant="h4" className={classes.title}>Formulario de Evaluación</Typography><br />
            <form className={classes.form}>  
            <FormControl component='fieldset'>
                <FormLabel component="legend">HC ¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?</FormLabel>
                <Controls.RadioGroup 
                    className={classes.answer}
                    name='pregunta1'
                    label=''
                    value={values.siNo}
                    items={respuestasPosibles}
                    onChange={handleInputChange}
                /> <br />  

                <FormLabel component="legend">HC ¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?</FormLabel>
                <Controls.RadioGroup 
                    name='pregunta2'
                    label=''
                    value={values.siNo}
                    items={respuestasPosibles}
                    onChange={handleInputChange}
                /> <br />

                <FormLabel component="legend">HC ¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?</FormLabel>
                <Controls.RadioGroup 
                    name='pregunta3'
                    label=''
                    value={values.siNo}
                    items={respuestasPosibles}
                    onChange={handleInputChange}
                /> <br />
                <FormLabel component="legend">HC ¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?</FormLabel>
                <Controls.RadioGroup 
                    name='pregunta4'
                    label=''
                    value={values.siNo}
                    items={respuestasPosibles}
                    onChange={handleInputChange}
                /> <br />
                <FormLabel component="legend">HC ¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?</FormLabel>
                <Controls.RadioGroup 
                    name='pregunta5'
                    label=''
                    value={values.siNo}
                    items={respuestasPosibles}
                    onChange={handleInputChange}
                /> 
            </FormControl>
            </form>
        </div>
    )
}
