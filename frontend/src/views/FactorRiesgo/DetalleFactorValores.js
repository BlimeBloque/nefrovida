import React, {useState, useEffect } from 'react'
import { CssBaseline, Typography, makeStyles, CircularProgress, Divider } from '@material-ui/core'
import http from "../../http-common";

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

export default function DetalleFactorValores(props) {
    const classes = useStyle();
    const [valoresFactor, setValoresFactor] = useState();

    useEffect (() => {
        http.get('detalles/'+ props.idBeneficiario)
        .then(res => { 
            setValoresFactor(res.data)
        })
        .catch((e) => {
            console.log(e)
        })
    }, []);


    return (
        <div className={classes.root}>
            <CssBaseline />
            <Typography variant="h4" className={classes.centerItem}>Formulario de Factor de Riesgo</Typography> 
                <div className={classes.centerItem}>
                    <Typography variant="overline" >Ponderación: {
                        valoresFactor ? 
                            valoresFactor.reduce((acc, pond) => acc + pond.ponderacion, 0)
                        : 0
                    }</Typography><br />
                 </div>
            <Divider className={classes.divider}/>
            {
                valoresFactor ? // Cuando regrese el json, mapearlo
                    valoresFactor.map((valor) => (
                        <>
                            <Typography variant="h6">{valor.idOpcionFormulario}.- {valor.pregunta}</Typography>
                            <Typography variant="body1">Respuesta: <em><strong>{valor.respuesta}</strong></em></Typography> <br/>
                        </>
                    )) :
                <div/>
            } 
        </div>
    )
}
