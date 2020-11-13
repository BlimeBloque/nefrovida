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

function isKiloCaloria(input)
{
    return /^\d{1,5}\.\d{1,2}$/.test(input);
}

function isPorcentaje(input)
{
    return /^\d{1,2}\.\d{1,2}$|^\d{3}\.[0]{1,2}$/.test(input);
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
    input: {
        display: "none",
    }
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
        'Plan de Alimentación'
    ];
}

const initialValues = {
    idBeneficiario:0,
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
    nota: '',
    url_archivo: '',
}

const initialFileValues = {
    archivo: null,
    archivoNombre: '',
    archivoURL: '',
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
    nota: false,
    url_archivo: false,
}

export default function ConsultaNutricionForm(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();
    const [beneficiario, setBeneficiario] = useState([]);
    const [values, setValues] = useState(initialValues);
    const [errores, setErrores] = useState(initialErrorValues);
    const [archivo, setArchivo] = useState(initialFileValues);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const removeFile = () => {
        setArchivo({
            archivo: null,
            archivoNombre: null,
            archivoURL: null,
        })
        setValues({
            ...values,
            url_archivo: null,
        })
        console.log(archivo);
    }

    const fileSelectedHandler = (e) => {
        console.log(e.target.files)
        setArchivo({
            archivo: e.target.files[0] ? e.target.files[0] : null,
            archivoNombre: e.target.files[0] ? e.target.files[0].name : null,
        })
        console.log(archivo);
    }

    const getFileName = () => {
        archivo.archivoNombre = props.consulta.url_archivo ? 'archivo' : null;
    }

    useEffect ( () => {

        

        if(props.editar)
        {
            setValues({
                idBeneficiario: props.consulta.idBeneficiario,
                ocupacion: props.consulta.ocupacion,
                horariosComida: props.consulta.horariosComida,
                cantidadDestinadaAlimentos: props.consulta.cantidadDestinadaAlimentos,
                apetito: props.consulta.apetito,
                distension: props.consulta.distension,
                estreñimiento: props.consulta.estreñimiento,
                flatulencias: props.consulta.flatulencias,
                vomitos: props.consulta.vomitos,
                caries: props.consulta.caries,
                edema: props.consulta.edema, 
                mareo: props.consulta.mareo,
                zumbido: props.consulta.zumbido,
                cefaleas: props.consulta.cefaleas,
                disnea: props.consulta.disnea,
                poliuria: props.consulta.poliuria,
                actividadFisica: props.consulta.actividadFisica,
                horasSueño: props.consulta.horasSueño,
                comidasAlDia: props.consulta.comidasAlDia,
                lugarComida: props.consulta.lugarComida,
                preparaComida: props.consulta.preparaComida,
                comeEntreComidas: props.consulta.comeEntreComidas,
                alimentosPreferidos: props.consulta.alimentosPreferidos,
                alimentosOdiados: props.consulta.alimentosOdiados,
                suplementos: props.consulta.suplementos,
                medicamentosActuales: props.consulta.medicamentosActuales,
                consumoAguaNatural: props.consulta.consumoAguaNatural,
                recordatorioDesayuno: props.consulta.recordatorioDesayuno,
                recordatorioColacionMañana: props.consulta.recordatorioColacionMañana,
                recordatorioComida: props.consulta.recordatorioComida,
                recordatorioColacionTarde: props.consulta.recordatorioColacionTarde,
                recordatorioCena: props.consulta.recordatorioCena,
                peso: props.consulta.peso,
                altura: props.consulta.altura,
                tipoDieta: props.consulta.tipoDieta,
                kilocaloriasTotales: props.consulta.kilocaloriasTotales,
                porcentajeHidratosCarbono: props.consulta.porcentajeHidratosCarbono,
                kilocaloriasHidratosCarbono: props.consulta.kilocaloriasHidratosCarbono,
                porcentajeProteinas: props.consulta.porcentajeProteinas,
                porcentajeGrasas: props.consulta.porcentajeGrasas,
                diagnostico: props.consulta.diagnostico,
                nota: props.consulta.nota,
                url_archivo: props.consulta.url_archivo,
            });
            getFileName();
        }
        else
        {
            setValues({
                ...values,
                'idBeneficiario': props.idBeneficiario
            });
            archivo.archivoNombre = '';

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
                if(errores.ocupacion || errores.horariosComida || errores.cantidadDestinadaAlimentos)
                    next = false;
                break;
            case 1:
                if(errores.apetito || errores.edema || errores.distension || errores.mareo || errores.estreñimiento
                    || errores.zumbido || errores.flatulencias || errores.cefaleas || errores.vomitos || errores.disnea
                    || errores.caries || errores.poliuria)
                    next = false;
                break;
            case 2:
                if(errores.actividadFisica || errores.horasSueño)
                    next = false;
                break;
            case 3:
                if(errores.comidasAlDia || errores.lugarComida || errores.preparaComida || errores.comeEntreComidas
                    || errores.alimentosPreferidos || errores.alimentosOdiados || errores.suplementos || errores.medicamentosActuales
                    || errores.consumoAguaNatural)
                    next = false;
                break;
            case 4:
                if(errores.recordatorioDesayuno || errores.recordatorioColacionMañana || errores.recordatorioComida
                    || errores.recordatorioColacionTarde || errores.recordatorioCena)
                    next = false;
                break;
            case 5:
                if(errores.peso || errores.altura || errores.diagnostico)
                    next = false;
                break;
            case 6:
                if(errores.tipoDieta || errores.kilocaloriasTotales || errores.porcentajeHidratosCarbono 
                    || errores.kilocaloriasHidratosCarbono || errores.porcentajeGrasas || errores.porcentajeProteinas)
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
        if(errores.nota || errores.url_archivo)
            submit = false;
        if(submit)
        {
            console.log(values);

            if(props.editar)
            {
                if(archivo.archivo === null)
                {
                    http.put('/consultaNutricion/'+props.consulta.idConsultaNutricional, values)
                        .then(res => {
                            console.log(res)
                            props.history.push("/consultaNutricion/"+props.consulta.idConsultaNutricional+"?editarNutricion=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/consultaNutricion/"+props.consulta.idConsultaNutricional+"?editarNutricion=0");
                        });
                }
                else
                {
                    const fd = new FormData();
                    fd.append('file', archivo.archivo, archivo.archivoNombre);
                    http.post('/upload', fd, {
                        onUploadProgress: progressEvent => {
                            console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total *100) + "%");
                        }
                    })
                    .then(res => {
                        console.log(res.data.result);
                        values.url_archivo = res.data.result;
                        console.log(values);
                        http.put('/consultaNutricion/'+props.consulta.idConsultaNutricional, values)
                        .then(res => {
                            console.log(res)
                            props.history.push("/consultaNutricion/"+props.consulta.idConsultaNutricional+"?editarNutricion=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/consultaNutricion/"+props.consulta.idConsultaNutricional+"?editarNutricion=0");
                        });
                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.idBeneficiario+"?editarNutricion=0");
                    });
                }
            }
            else
            {
                if(archivo.archivo === null)
                {
                    http.post('/consultaNutricion', values)
                        .then(res => {
                            console.log(res)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNutricion=1");
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNutricion=0");
                        });
                }
                else
                {
                    const fd = new FormData();
                    fd.append('file', archivo.archivo, archivo.archivoNombre);
                    http.post('/upload', fd, {
                        onUploadProgress: progressEvent => {
                            console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total *100) + "%");
                        }
                    })
                        .then(res => {
                            console.log(res.data.result);
                            values.url_archivo = res.data.result;
                            console.log(values);
                            http.post('/consultaNutricion', values)
                            .then(res => {
                                console.log(res)
                                props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNutricion=1");
                            })
                            .catch(err => {
                                console.log(err)
                                props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNutricion=0");
                            });
                        })
                        .catch(err => {
                            console.log(err)
                            props.history.push("/beneficiarios/"+props.idBeneficiario+"?agregarNutricion=0");
                        });
                }
            }
        }
    };

    return (
        <center className={classes.root}>
            <Typography variant="h5">Consulta Nutricional de {props.editar ?  props.consulta.nombreBeneficiario :  beneficiario.nombreBeneficiario} 
            </Typography>

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
                    consulta={props.consulta}
                />

                <Secciones.DatosClinicos
                    className={activeStep === 1 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.EstiloVida
                    className={activeStep === 2 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.DatosDieteticos
                    className={activeStep === 3 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.Recordatorios
                    className={activeStep === 4 ? classes.show : classes.hide}
                    classes={classes}
                    hasNumber={hasNumber}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.DatosAntropometricos
                    className={activeStep === 5 ? classes.show : classes.hide}
                    classes={classes}
                    isNullOrWhitespace={isNullOrWhitespace}
                    isDecimal={isDecimal}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.Necesidades
                    className={activeStep === 6 ? classes.show : classes.hide}
                    classes={classes}
                    isNullOrWhitespace={isNullOrWhitespace}
                    isPorcentaje={isPorcentaje}
                    isKiloCaloria={isKiloCaloria}
                    values={values}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                />

                <Secciones.PlanAlimentacion
                    className={activeStep === 7 ? classes.show : classes.hide}
                    classes={classes}
                    isNullOrWhitespace={isNullOrWhitespace}
                    values={values}
                    archivo={archivo}
                    removeFile={removeFile}
                    fileSelectedHandler={fileSelectedHandler}
                    handleInputChange={handleInputChange}
                    errores={errores}
                    setErrores={setErrores}
                    consulta={props.consulta}
                    editar={props.editar}
                />

                <div className={classes.botones}>
                    <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                        color="primary"
                        variant="contained"
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
