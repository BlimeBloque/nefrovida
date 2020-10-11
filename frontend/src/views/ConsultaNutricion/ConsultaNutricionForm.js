import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

function hasNumber(myString) {
	return /\d/.test(myString);
}
function isNullOrWhitespace( input ) {
	return !input || !input.trim();
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
    texto: {
        width: "70%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

function DatosNutrimentales(props)
{
    const classes = useStyles();
    const handleOcupacionChange = (event) => {
        props.setOcupacion(event.target.value);
        validateOcupacion(event.target.value);
    }

    const handleHorariosComidaChange = (event) => {
        props.setHorariosComida(event.target.value);
        validateHorariosComida(event.target.value);
    }

    const handleCantidadDestinadaAlimentosChange = (event) => {
        props.setCantidadDestinadaAlimentos(event.target.value);
        validateCantidadDestinadaAlimentos(event.target.value);
    }

    const validateOcupacion = (ocupacion) =>
    {
        if(hasNumber(ocupacion) | (ocupacion.length > 0 & isNullOrWhitespace(ocupacion)))
        {
            props.setOcupacionError(true);
        }
        else
        {
            props.setOcupacionError(false);
        }
    }

    const validateHorariosComida = (horariosComida) =>
    {
        if(horariosComida.length > 0 & isNullOrWhitespace(horariosComida))
        {
            props.setHorariosComidaError(true);
        }
        else
        {
            props.setHorariosComidaError(false);
        }
    }

    const validateCantidadDestinadaAlimentos = (cantidadDestinadaAlimentos) =>
    {
        if(cantidadDestinadaAlimentos.length > 0 & isNullOrWhitespace(cantidadDestinadaAlimentos))
        {
            props.setCantidadDestinadaAlimentos(true);
        }
        else
        {
            props.setCantidadDestinadaAlimentos(false);
        }
    }
    
    return(
        <div className={props.className}>
            <FormControl error={props.ocupacionError} className={classes.texto}>
                <InputLabel htmlFor="component-error">Ocupación</InputLabel>
                <Input
                id="component-error"
                value={props.ocupacion}
                onChange={handleOcupacionChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: props.ocupacionError ? "block" : "none"}} id="component-error-text">
                    Escribe una ocupación válida (no puede tener números).
                </FormHelperText>
            </FormControl>

            <FormControl error={props.horariosComidaError} className={classes.texto}>
                <InputLabel htmlFor="component-error">Horarios de comida</InputLabel>
                <Input
                id="component-error"
                value={props.horariosComida}
                onChange={handleHorariosComidaChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: props.horariosComidaError ? "block" : "none"}} id="component-error-text">
                    Escribe un horario de comida válido.
                </FormHelperText>
            </FormControl>

            <FormControl error={props.cantidadDestinadaAlimentosError} className={classes.texto}>
                <InputLabel htmlFor="component-error">Cantidad destinada a alimentos</InputLabel>
                <Input
                id="component-error"
                value={props.cantidadDestinadaAlimentos}
                onChange={handleCantidadDestinadaAlimentosChange}
                aria-describedby="component-error-text"
                />
                <FormHelperText style={{display: props.cantidadDestinadaAlimentosError ? "block" : "none"}} id="component-error-text">
                    Escribe una cantidad de alimentos válida.
                </FormHelperText>
            </FormControl>

        </div>
    );
}

function getSteps() {
    return [
        'Datos Nutrimentales',
        'Datos Clínicos', 
        'Estilo de Vida', 
        'Datos Dietéticos', 
        'Recordatorio de 24 Horas', 
        'Datos Antropométricos',
        'Necesidades Energéticas y Nutrimentales',
    ];
}


export default function ConsultaNutricionForm(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [beneficiario, setBeneficiario] = useState([]);

    const [ocupacion, setOcupacion] = useState('');
    const [ocupacionError, setOcupacionError] = useState(false);
    const [horariosComida, setHorariosComida] = useState('');
    const [horariosComidaError, setHorariosComidaError] = useState(false);
    const [cantidadDestinadaAlimentos, setCantidadDestinadaAlimentos] = useState('');
    const [cantidadDestinadaAlimentosError, setCantidadDestinadaAlimentosError] = useState(false);

    useEffect ( () => {

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
                if(ocupacionError | horariosComidaError | cantidadDestinadaAlimentosError)
                    next = false;
            default:

        }
        if(next)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        setActiveStep(0);
    };

    return (
        <center className={classes.root}>
            <Typography variant="h5">Consulta Nutricional de {beneficiario.nombreBeneficiario} </Typography>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>

            <form>
                <DatosNutrimentales
                    className={activeStep === 0 ? classes.show : classes.hide}
                    ocupacion={ocupacion}
                    setOcupacion={setOcupacion}
                    ocupacionError={ocupacionError}
                    setOcupacionError={setOcupacionError}

                    horariosComida={horariosComida}
                    setHorariosComida={setHorariosComida}
                    horariosComidaError={horariosComidaError}
                    setHorariosComidaError={setHorariosComidaError}

                    cantidadDestinadaAlimentos={cantidadDestinadaAlimentos}
                    setCantidadDestinadaAlimentos={setCantidadDestinadaAlimentos}
                    cantidadDestinadaAlimentosError={cantidadDestinadaAlimentosError}
                    setCantidadDestinadaAlimentosError={setCantidadDestinadaAlimentosError}
                />

                <div className={classes.botones}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        Regresar
                    </Button>
                    <Button variant="contained" color="primary" onClick={ activeStep === steps.length-1 ? handleSubmit : handleNext}>
                        {activeStep === steps.length - 1 ? 'Registrar' : 'Siguiente'}
                    </Button>
                </div>
            </form>
        </center>
    );
}
