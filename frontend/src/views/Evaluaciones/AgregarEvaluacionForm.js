import React, {useState, useEffect} from 'react'

import {CssBaseline, FormControl, FormGroup, FormLabel, Grid, InputAdornment, makeStyles, Radio, Typography, Button} from '@material-ui/core';
import Controls from '../../components/FormComponents/Controls';
import RadioGroup from '../../components/FormComponents/RadioGroup';
import { withRouter } from 'react-router-dom';


const useStyle = makeStyles(theme => ({
    root:{
        display: 'block',
    }, 
    form: {
        textAlign: 'center',
    },
    title: {
        textAlign: 'center',
    },
    buttons: {
        display: 'inline',
        alignSelf: 'center',
    },
    back : {
        marginRight: '10px'
    },
    answer: {
        display: 'block',
        alignItems: 'center',
        '&$checked': {
            color: '#3f51b5'
        }
    },
    checked:{}

}))

const respuestasPosibles = [
    {id:'S', title: 'Sí'},
    {id:'N', title: 'No'}
]

const initialValues = {
    siNo: 'S'  
}


function AgregarEvaluacionForm(props) {
    const { history } = props;
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
                    classes={{root: classes.answer, checked: classes.checked}}
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
                <div className={classes.buttons}>
                    <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios')}>Cancelar</Button>
                    <Button variant="contained" color="primary">Completar</Button>
                </div>
            </FormControl>
            </form>
        </div>
    )
}


export default withRouter(AgregarEvaluacionForm);