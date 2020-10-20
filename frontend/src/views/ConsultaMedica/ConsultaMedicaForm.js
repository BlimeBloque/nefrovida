import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import Secciones from './secciones/Secciones';

function hasNumber(myString) {
	return /\d/.test(myString);
}
function isNullOrWhitespace( input ) {
	return !input || !input.trim();
}

function isDecimal(input)
{
    return /^\d{1,3}\.\d{1,2}$/.test(input);
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        alignItems: "center",
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
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


function getSteps() {
    return [
        'Padecimiento Actual',
        'Exploración Física', 
        'Neurológico y Estado Mental', 
        'Otros', 
        'Diagnósticos y Plan de Tratamiento', 
    ];
}

const initialValues = {
    idBeneficiario:0,
    padecimientoActual:'',
    taDerecho:'',
    taIzquierdo:'',
    frecuenciaCardiaca:'',
    frecuenciaRespiratoria:'',
    temperatura:'',
    peso:'',
    talla:'',
    cabezaCuello:'',
    torax:'',
    abdomen:'',
    extremidades:'',
    neurologicoEstadoMental:'',
    otros:'',
    diagnosticos:'',
    planDeTratamiento:'',
}

const initialErrorValues = {
    padecimientoActual:false,
    taDerecho:false,
    taIzquierdo:false,
    frecuenciaCardiaca:false,
    frecuenciaRespiratoria:false,
    temperatura:false,
    peso:false,
    talla:false,
    cabezaCuello:false,
    torax:false,
    abdomen:false,
    extremidades:false,
    neurologicoEstadoMental:false,
    otros:false,
    diagnosticos:false,
    planDeTratamiento:false,
}

export default function ConsultaMedicaForm(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }
    useEffect ( () => {

        setValues({
            ...values,
            'idBeneficiario': props.idBeneficiario
        });

        

        axios.get('http://localhost:8000/api/beneficiarios/'+props.idBeneficiario)
            .then(res => { setBeneficiario(res.data[0])
        })
            .catch((e) => {
            console.log(e)
        })
    }, []);

    

    const handleNext = () => {
        let next = true;
        switch(activeStep)
        {
            case 0:
                if(errores.padecimientoActual)
                    next = false;
                break;
            case 1:
                if(errores.taDerecho || errores.taIzquierdo || errores.frecuenciaCardiaca || errores.frecuenciaRespiratoria
                    || errores.temperatura || errores.peso || errores.talla || errores.cabezaCuello || errores.torax
                    || errores.abdomen || errores.extremidades)
                    next = false;
                break;
            case 2:
                if(errores.neurologicoEstadoMental)
                    next = false;
                break;
            case 3:
                if(errores.otros)
                    next = false;
                break;
        }
        if(next)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);

        console.log(values);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        let submit = true;
        if(errores.diagnosticos || errores.planDeTratamiento)
            submit = false;
        if(submit)
        {
            console.log(values);

            axios.post('http://localhost:8000/api/consultaMedica', values, {headers: {"Accept": "application/json"}})
                .then(res => {
                    console.log(res)
                    props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarMedica=1");
                })
                .catch(err => {
                    console.log(err)
                    props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarMedica=0");
                });

            
        }

        
    };

    return (
        <center className={classes.root}>
            <Typography variant="h5">Consulta Médica de {beneficiario.nombreBeneficiario} </Typography>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>

            <form>
                <Secciones.PadecimientoActual
                    className={activeStep === 0 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                />

                <Secciones.ExploracionFisica
                    className={activeStep === 1 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    isDecimal={isDecimal}
                />

                <Secciones.Neurologico
                    className={activeStep === 2 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                />

                <Secciones.Otros
                    className={activeStep === 3 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                />

                <Secciones.DiagnosticoTratamiento
                    className={activeStep === 4 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                />*

                <div className={classes.botones}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        Regresar
                    </Button>
                    <Button variant="contained" color='primary' onClick={ activeStep === steps.length-1 ? handleSubmit : handleNext}>
                        {activeStep === steps.length - 1 ? 'Registrar' : 'Siguiente'}
                    </Button>
                </div>
            </form>
        </center>
    );
}