import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import http from "../../http-common";

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
        'Datos de Vivienda',
        'Antecedentes Personales', 
        'Antecedentes Familiares', 
        'Antecedentes Gineco-obstétricos',
    ];
}

const initialValues = {
    idBeneficiario:0,
    casa:'',
    serviciosBasicos:'',
    personalesPatologicos:'',
    personalesNoPatologicos:'',
    padreVivo:'',
    enfermedadPadre:'',
    madreVivo:'',
    enfermedadMadre:'',
    numHermanos:'',
    numHermanosVivos:'',
    enfermedadesHermanos:'',
    otrosHermanos:'',
    menarquia:'',
    ritmo:'',
    fum:new Date(),
    gestaciones:'',
    partos:'',
    abortos:'',
    cesareas:'',
    ivsa:'',
    metodosAnticonceptivos:'',
}

const initialErrorValues = {
    casa: false,
    serviciosBasicos: false,
    personalesPatologicos: false,
    personalesNoPatologicos: false,
    padreVivo: false,
    enfermedadesPadre: false,
    madreVivo: false,
    enfermedadesMadre: false,
    numHermanos: false,
    numHermanosVivos: false,
    enfermedadesHermanos: false,
    otrosHermanos: false,
    menarquia: false,
    ritmo: false,
    fum: false,
    gestaciones: false,
    partos: false,
    abortos: false,
    cesareas: false,
    ivsa: false,
    metodosAnticonceptivos: false,
}

export default function AntecedentesForm(props) {
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

        if(props.editar){
            setValues({
                idBeneficiario: props.antecedentes.idBeneficiario,
                casa: props.antecedentes.casa,
                serviciosBasicos: props.antecedentes.serviciosBasicos,
                personalesPatologicos: props.antecedentes.personalesPatologicos,
                personalesNoPatologicos: props.antecedentes.personalesNoPatologicos,
                padreVivo: props.antecedentes.padreVivo,
                enfermedadesPadre: props.antecedentes.enfermedadesPadre,
                madreVivo: props.antecedentes.madreVivo,
                enfermedadesMadre: props.antecedentes.enfermedadMadre,
                numHermanos: props.antecedentes.numHermanos,
                numHermanosVivos: props.antecedentes.numHermanosVivos,
                enfermedadesHermanos: props.antecedentes.enfermedadesHermanos,
                otrosHermanos: props.antecedentes.otrosHermanos,
                menarquia: props.antecedentes.menarquia,
                ritmo: props.antecedentes.ritmo,
                fum: props.antecedentes.fum,
                gestaciones: props.antecedentes.gestaciones,
                partos: props.antecedentes.partos,
                abortos: props.antecedentes.abortos,
                cesareas: props.antecedentes.cesareas,
                ivsa: props.antecedentes.ivsa,
                metodosAnticonceptivos: props.antecedentes.metodosAnticonceptivos,
            });
        }
        else{
            setValues({
                ...values,
                'idBeneficiario': props.idBeneficiario
            });

            http.get('/beneficiarios/'+props.idBeneficiario)
            .then(res => { setBeneficiario(res.data[0])
            })
            .catch((e) => {
            console.log(e)
            })
        }
    }, []);

    

    const handleNext = () => {
        let next = true;
        switch(activeStep)
        {
            case 0:
                if(errores.casa || errores.serviciosBasicos)
                    next = false;
                break;
            case 1:
                if(errores.personalesPatologicos || errores.personalesNoPatologicos)
                    next = false;
                break;
            case 2:
                if(errores.padreVivo || errores.enfermedadesPadre
                    || errores.madreVivo || errores.enfermedadesMadre
                    || errores.numHermanos || errores.numHermanosVivos
                    || errores.enfermedadesHermanos || errores.otrosHermanos)
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
        if(!props.editar){
            if (values.fum != null){
                let day = values.fum.getDate();
                let month = values.fum.getUTCMonth() + 1;
                let year = values.fum.getUTCFullYear();
                console.log(year);
                values.fum = year + "-" + month + "-" + day;
            }
        }
        
        let submit = true;
        if(errores.menarquia || errores.ritmo || errores.fum || errores.gestaciones
            || errores.partos || errores.abortos || errores.cesareas || errores.ivsa
            || errores.metodosAnticonceptivos)
            submit = false;
        if(submit)
        {  
            if(props.editar)
            {
                http.put('/antecedentes/'+props.antecedentes.idAntecedentes, values)
                    .then(res => {
                        console.log(res)
                        props.history.push("/antecedentes/"+props.antecedentes.idAntecedentes+"?editarAntecedentes=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/antecedentes/"+props.antecedentes.idAntecedentes+"?editarAntecedentes=0");
                    });
            }
            else{
                http.post('/antecedentes', values)
                    .then(res => {
                        console.log(res)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarAntecedentes=1");
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarAntecedentes=0");
                    });
                }
        }

        
    };

    return (
        <center className={classes.root}>
            {console.log(values)}
            <Typography variant="h5">Antecedentes de {props.editar ?  props.antecedentes.nombreBeneficiario :  beneficiario.nombreBeneficiario} 
            </Typography>

            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
                ))}
            </Stepper>

            <form>
                <Secciones.DatosVivienda
                    className={activeStep === 0 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    antecedentes={props.antecedentes}
                />

                <Secciones.AntecedentesPersonales
                    className={activeStep === 1 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    antecedentes={props.antecedentes}
                />

                <Secciones.AntecedentesFamiliares
                    className={activeStep === 2 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    antecedentes={props.antecedentes}
                />

                <Secciones.AntecedentesGinecoObstetricos
                    className={activeStep === 3 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    antecedentes={props.antecedentes}
                />

                <div className={classes.botones}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                    >
                        Regresar
                    </Button>
                    <Button variant="contained" color='primary' onClick={ activeStep === steps.length-1 ? handleSubmit : handleNext}>
                        {activeStep === steps.length - 1 ? props.editar ? 'Editar': 'Registrar' : 'Siguiente'}
                    </Button>
                </div>
            </form>
        </center>
    );
}