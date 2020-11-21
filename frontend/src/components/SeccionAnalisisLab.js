import { Typography, makeStyles, Paper, Tooltip } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import AddIcon from '@material-ui/icons/Add'; 
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import Cookies from 'js-cookie';
import http from '../http-common'

const useStyle = makeStyles(theme => ({
    flex:{
        display: "flex",
        justifyContent: "space-evenly",
    },
    flexContent:{
        marginBottom: theme.spacing(3),
    },paper: {
        minHeight: 140,
        width: 120,
        textAlign: "center",
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const SeccionAnalisisLab = (props) => {
    const classes = useStyle();
    const [examenOrina, setExamenOrina] = useState([]);
    const [depuracionCreatinina, setDepuracionCreatinina] = useState([]);
    const [quimicaSanguinea, setQuimicaSanguinea] = useState([]);
    const [microalbuminuria, setMicroalbuminuria] = useState([]);

    useEffect ( () => {
        http.get('/examenOrina/beneficiario/'+props.idBeneficiario)
            .then(res => { 
                    setExamenOrina(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
        http.get('/depuracionCreatinina/beneficiario/'+props.idBeneficiario)
            .then(res => { 
                    setDepuracionCreatinina(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
        http.get('/quimicaSanguinea/beneficiario/'+props.idBeneficiario)
            .then(res => { 
                    setQuimicaSanguinea(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
        http.get('/microalbuminuria/beneficiario/'+props.idBeneficiario)
            .then(res => { 
                    setMicroalbuminuria(res.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return(
        <div>
        {console.log(examenOrina)}
            <div className={classes.flex}>
                <Typography className={classes.flexContent} style={{margin: "10px 0px 0px 0px"}} variant="h6">
                <strong>Análisis de Laboratorio</strong>
                </Typography>
                {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Laboratorio") ? 
                    <Tooltip title="Agregar Análisis de Laboratorio" arrow>
                    <Fab className={classes.flexContent} color="primary" onClick={() => props.history.push("/beneficiarios/"+props.idBeneficiario+"/agregarAnalisisLab")}>
                        <AddIcon/>
                    </Fab>
                    </Tooltip>
                :
                        <></>
                }
            </div>

                <Grid container justify="center" spacing={4}>
                {
                    //CHECAR QUE NO HAYA ANALISIS
                    examenOrina.length < 1 & depuracionCreatinina.length < 1 & quimicaSanguinea.length < 1 & microalbuminuria.length < 1 ? 
                        <Typography variant="body">No hay análisis de laboratorio registrados para este beneficiario</Typography>
                    :
                        <></>
                }
                {
                    //CARDS DE EXAMEN DE ORINA
                    examenOrina.length ? 
                        examenOrina.map((analisis) => (
                        <Grid key={analisis.idExamenOrina} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/examenOrina/"+analisis.idExamenOrina)}>
                                    <BubbleChartIcon fontSize="large" />
                                </IconButton>
                                
                                {analisis.analisis} del: {(new Date(analisis.created_at)).getDate()+"/"+((new Date(analisis.created_at)).getMonth()+1)
                                                +"/"+(new Date(analisis.created_at)).getFullYear()}
                            </Paper>
                        </Grid>
                        ))
                    :
                    <></>
                }
                {
                    //CARDS DE DEPURACIÓN DE CREATININA
                    depuracionCreatinina.length ? 
                        depuracionCreatinina.map((analisis) => (
                        <Grid key={analisis.idDepuracionCreatinina} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/depuracionCreatinina/"+analisis.idDepuracionCreatinina)}>
                                    <BubbleChartIcon fontSize="large" />
                                </IconButton>
                                
                                {analisis.analisis} del: {(new Date(analisis.created_at)).getDate()+"/"+((new Date(analisis.created_at)).getMonth()+1)
                                                +"/"+(new Date(analisis.created_at)).getFullYear()}
                            </Paper>
                        </Grid>
                        ))
                    :
                    <></>
                }
                {
                    //CARDS DE QUÍMICA SANGUÍNEA
                    quimicaSanguinea.length ? 
                    quimicaSanguinea.map((analisis) => (
                        <Grid key={analisis.idQuimicaSanguinea} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/quimicaSanguinea/"+analisis.idQuimicaSanguinea)}>
                                    <BubbleChartIcon fontSize="large" />
                                </IconButton>
                                
                                {analisis.analisis} del: {(new Date(analisis.created_at)).getDate()+"/"+((new Date(analisis.created_at)).getMonth()+1)
                                                +"/"+(new Date(analisis.created_at)).getFullYear()}
                            </Paper>
                        </Grid>
                        ))
                    :
                    <></>
                }
                {
                    //CARDS DE MICROALBUMINURÍA
                    microalbuminuria.length ? 
                    microalbuminuria.map((analisis) => (
                        <Grid key={analisis.idMicroalbuminuria} item>
                            <Paper className={classes.paper}>
                                <IconButton aria-label="Consultar" className={classes.margin} onClick={() => props.history.push("/microalbuminuria/"+analisis.idMicroalbuminuria)}>
                                    <BubbleChartIcon fontSize="large" />
                                </IconButton>
                                
                                {analisis.analisis} del: {(new Date(analisis.created_at)).getDate()+"/"+((new Date(analisis.created_at)).getMonth()+1)
                                                +"/"+(new Date(analisis.created_at)).getFullYear()}
                            </Paper>
                        </Grid>
                        ))
                    :
                    <></>
                }
                </Grid>
        </div>
    );
}

export default SeccionAnalisisLab;