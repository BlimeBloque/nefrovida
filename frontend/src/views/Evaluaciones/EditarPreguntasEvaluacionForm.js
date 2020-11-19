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

function EditarPreguntasEvaluacionForm(props) {
    const {history} = props;
    const classes = useStyle();
    const [valoresPreguntas, setValoresPreguntas] = useState([]);
    const [nuevasPreguntas, setNuevasPreguntas] = useState([]);
    const [disabled, setDisabled] = useState(false);


    useEffect (() => {
        http.get('/evaluacionesPreguntas/')
            .then(res => { 
                setValoresPreguntas(res.data.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, []);

    const handleChange = (e) => {
        const item = e.target
        setNuevasPreguntas({
            ...nuevasPreguntas,
            [item.id-1]: item.value
             
        })
    }

    const handleSubmit = (event) => {
        setDisabled(true);
        let arrayPreguntas = []
        let valuePregunta = {}
        let preguntaFinal = valoresPreguntas.map((e) => (e.pregunta))

        for (let i = 0; i < 9; i++) {
            console.log(nuevasPreguntas[i])
            valuePregunta = {
                idEvaluacionPregunta: i+1,
                evaluacionPregunta: nuevasPreguntas[i] != undefined ? nuevasPreguntas[i] : preguntaFinal[i]
            }
            arrayPreguntas[i] = valuePregunta;
        }
        
        arrayPreguntas.forEach(element => {
            http.put('/evaluacionesPreguntas/'+props.match.params.idBeneficiario, element)
                .then(res => {
                    props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?editarPreguntas=1");

                })
                .catch(err => {
                    console.log(err)
                    props.history.push("/beneficiarios/"+props.match.params.idBeneficiario+"?editarPreguntas=0");
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
                valoresPreguntas && valoresPreguntas.map((e) => (
                    
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
                    fullWidth variant="outlined"
                    id={e.id}
                    label={"Pregunta no. "+e.id}
                    defaultValue={e.pregunta}
                    onChange={handleChange}
                />
                    <br /><br />

            </form>
            ))
            }
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
