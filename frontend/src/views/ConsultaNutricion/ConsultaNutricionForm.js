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
}));


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

const initialValues = {
    idBeneficiario: 0,
    ocupacion: '',
    horariosComida: '',
    cantidadDestinadaAlimentos: '',
    apetito: '',
    distension: '',
    estreñimiento: '',
    flatulencias: '',
    vomitos: '',
    caries: '',
    edema: '', 
    mareo: '',
    zumbido: '',
    cefaleas: '',
    disnea: '',
    poliuria: '',
    actividadFisica: '',
    horasSueño: '',
    comidasAlDia: '',
    lugarComida: '',
    preparaComida: '',
    comeEntreComidas: '',
    alimentosPreferidos: '',
    alimentosOdiados: '',
    suplementos: '',
    medicamentosActuales: '',
    consumoAguaNatural: '',
    recordatorioDesayuno: '',
    recordatorioColacionMañana: '',
    recordatorioComida: '',
    recordatorioColacionTarde: '',
    recordatorioCena: '',
    peso: '',
    altura: '',
    tipoDieta: '',
    kilocaloriasTotales: '',
    porcentajeHidratosCarbono: '',
    kilocaloriasHidratosCarbono: '',
    porcentajeProteinas: '',
    porcentajeGrasas: '',
    diagnostico: '',
}

const initialErrorValues = {
    ocupacion: false,
    horariosComida: false,
    cantidadDestinadaAlimentos: false,
    apetito: false,
    distension: false,
    estreñimiento: false,
    flatulencias: false,
    vomitos: false,
    caries: false,
    edema: false, 
    mareo: false,
    zumbido: false,
    cefaleas: false,
    disnea: false,
    poliuria: false,
    actividadFisica: false,
    horasSueño: false,
    comidasAlDia: false,
    lugarComida: false,
    preparaComida: false,
    comeEntreComidas: false,
    alimentosPreferidos: false,
    alimentosOdiados: false,
    suplementos: false,
    medicamentosActuales: false,
    consumoAguaNatural: false,
    recordatorioDesayuno: false,
    recordatorioColacionMañana: false,
    recordatorioComida: false,
    recordatorioColacionTarde: false,
    recordatorioCena: false,
    peso: false,
    altura: false,
    tipoDieta: false,
    kilocaloriasTotales: false,
    porcentajeHidratosCarbono: false,
    kilocaloriasHidratosCarbono: false,
    porcentajeProteinas: false,
    porcentajeGrasas: false,
    diagnostico: false,
}

export default function ConsultaNutricionForm(props) {
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
            ['idBeneficiario']: props.idBeneficiario
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
                if(errores.ocupacion | errores.horariosComida | errores.cantidadDestinadaAlimentos)
                    next = false;
            default:

        }
        if(next)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);

        console.log(values);
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
                <Secciones.DatosNutrimentales
                    className={activeStep === 0 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
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
