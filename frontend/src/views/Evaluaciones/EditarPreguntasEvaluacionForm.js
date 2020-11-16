import React, {useState, useEffect } from 'react'
import http from '../../http-common';
import { withRouter } from 'react-router-dom';
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider, FormControl, Radio, RadioGroup, FormControlLabel, Button, TextField } from '@material-ui/core'


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
}))

const initialFValues = {
    id: '1',
    pregunta: 'a',
}

function EditarPreguntasEvaluacionForm(props) {
    const {history} = props;
    const classes = useStyle();
    const [valoresPreguntas, setValoresPreguntas] = useState([]);
    const [disabled, setDisabled] = useState(false);


    useEffect (() => {
        http.get('/evaluacionesPreguntas/')
            .then(res => { 
                setValoresPreguntas(res.data.data)
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, []);

    const handleChange = (e) => {
        const {name , value} = e.target
        setValoresPreguntas({
            ...valoresPreguntas,
            [name]:value 
        })
        
    }

    const handleSubmit = (event) => {
        setDisabled(true);
        let arrayPreguntas = []
        let valuePregunta = {}

        valoresPreguntas.forEach(e => {
            valuePregunta = {
                idEvaluacionPregunta: e.id,
                evaluacionPregunta: e.pregunta
            }
            arrayPreguntas.push(valuePregunta)
        });
        arrayPreguntas.forEach(element => {
                http.put('/evaluacionesPreguntas/'+props.match.params.idBeneficiario, element)
                    .then(res => {
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=1");

                    })
                    .catch(err => {
                        console.log(err)
                        props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?agregarEvaluacion=0");
                    });
        });
        
    }

    return (
        <div>
            <Typography variant="h4" align="center">Editar Preguntas</Typography>
            <div className={classes.centerItem}>
                <Typography variant="overline">Evaluación</Typography>
            </div>
            <Divider className={classes.divider}/>
            {
            valoresPreguntas.map((e) => (
            <form>
                {e.id == 1 ?
                    <>
                        <Typography variant="h5">Área médica</Typography>
                        <br />
                    </>:<></>
                }
                {e.id == 4 ?
                    <>
                        <Typography variant="h5">Área de nutrición</Typography>
                        <br />
                    </>:<></>
                }
                {e.id == 7 ?
                    <>
                        <Typography variant="h5">Área de psicología</Typography>
                        <br />
                    </>:<></>
                }
                <TextField 
                    id={e.id} 
                    label={"Pregunta no. "+e.id} 
                    defaultValue={e.pregunta} 
                    fullWidth variant="outlined"
                    onChange={handleChange}
                />
                    <br /><br />

            </form>
            ))}
            <div className={classes.formItems}>
                    <Button color="default" className={classes.back} onClick={() => history.push('/beneficiarios/'+props.match.params.idBeneficiario)}>Cancelar</Button>
                    <Button 
                        disabled={disabled} 
                        variant="contained" 
                        color="primary" 
                        onClick={handleSubmit}
                    >
                        {disabled ? <CircularProgress size={24} /> : 'Guardar'}
                    </Button>
            </div>
        </div>
    )
}

export default withRouter(EditarPreguntasEvaluacionForm)
