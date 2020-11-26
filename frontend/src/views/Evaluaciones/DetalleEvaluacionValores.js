import React, {useState, useEffect } from 'react'
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider } from '@material-ui/core'
import http from '../../http-common'

const useStyle = makeStyles(theme => ({
    root:{
        display: 'block'
    }, 
    form: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    },
    centerItem: {
        textAlign: 'center',
    },
    divider: {
        marginTop: '10px',
        marginBottom: '20px',
    },
    back : {
        marginRight: '10px'
    }
}))

export default function DetalleEvaluacionValores(props) {
    const classes = useStyle();
    const [valoresInicio, setValoresInicio] = useState();
    const [valoresFin, setValoresFin] = useState();
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'detalleEvaluacionesInicio' ? 1 : 2);

    useEffect (() => {
        if(idEvaluacion == 1) {
            http.get('/detallesEvaluacionesInicio/'+ props.idBeneficiario)
            .then(res => { 
                setValoresInicio(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        } else {
            http.get('/detallesEvaluacionesFin/'+ props.idBeneficiario)
            .then(res => { 
                setValoresFin(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
        }
        

    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Typography variant="h4" className={classes.centerItem}>Formulario de Evaluación</Typography>
            {
                // Definir Título de formulario
                idEvaluacion == 1 ? 
                <div className={classes.centerItem}>
                    <Typography variant="overline" >Inicial</Typography><br />
                </div> :  

                <div className={classes.centerItem}>
                    <Typography variant="overline">Final</Typography><br />
                </div>
            }
            <Divider className={classes.divider}/>
            {
                valoresInicio ? // Cuando regrese el json, mapearlo
                    valoresInicio.map((valor) => (
                        <>
                            {
                                // Numerar preguntas
                                valor.idOpcionEvaluacion == 1 ?
                                    <Typography variant="h5">Área médica</Typography>:
                                    <></>
                            }
                            {  
                                // Numerar preguntas
                                valor.idOpcionEvaluacion == 4  ?
                                    <Typography variant="h5">Área de nutriología</Typography>:
                                    <></>
                            }
                            {  
                                // Numerar preguntas
                                valor.idOpcionEvaluacion == 7  ?
                                    <Typography variant="h5">Área de psicología</Typography>:
                                    <></>
                            }
                            <Typography variant="h6">{valor.idOpcionEvaluacion}.- {valor.evaluacionPregunta}</Typography>
                            <Typography variant="body1">Respuesta: <em><strong>{valor.respuestasPosibles}</strong></em></Typography> <br/>
                        </>
                    )) :
                <div/>
            }
            {
                 valoresFin ?
                 valoresFin.map((valor) => (
                    <>
                            {
                                // Numerar preguntas
                                 valor.idOpcionEvaluacion == 10 ?
                                    <Typography variant="h5">Área médica</Typography>:
                                    <></>
                            }
                            {  
                                // Numerar preguntas
                                valor.idOpcionEvaluacion == 13 ?
                                    <Typography variant="h5">Área de nutriología</Typography>:
                                    <></>
                            }
                            {  
                                // Numerar preguntas
                                valor.idOpcionEvaluacion == 16 ?
                                    <Typography variant="h5">Área de psicología</Typography>:
                                    <></>
                            }
                            <Typography variant="h6">{valor.idOpcionEvaluacion-9}.- {valor.evaluacionPregunta}</Typography>
                            <Typography variant="body1">Respuesta: <em><strong>{valor.respuestasPosibles}</strong></em></Typography> <br/>
                        </>
                 )) :                  
                <div/>
            }
            
        </div>
    )
}
