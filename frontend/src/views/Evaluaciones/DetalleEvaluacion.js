import React , {useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Container, Paper, makeStyles, IconButton } from '@material-ui/core';
import Sidenav from '../../components/Nav/Sidenav';
import { Link } from 'react-router-dom';
import DetalleEvaluacionValores from './DetalleEvaluacionValores';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    container: {
      display: "flex",
      marginTop: "40px"
    },
    largeIcon: {
        fontSize: '3em'
      },
}))

export default function DetalleEvaluacion(props) {
    const idBeneficiario = props.match.params.idBeneficiario
    const classes = useStyle();
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'detalleEvaluacionesInicio' ? 1 : 2);

    return (
        <div className={classes.container}>
            <Sidenav titulo='Detalle de Evaluación'/>
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/beneficiarios/"+idBeneficiario}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <DetalleEvaluacionValores idBeneficiario={props.match.params.idBeneficiario}/>
                </Paper>
            </Container>
        </div>
    )
}
