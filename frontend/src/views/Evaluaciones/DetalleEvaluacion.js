import React , {useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
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
      flexTitulo: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: theme.spacing(4),
      }
}))

export default function DetalleEvaluacion(props) {
    const idBeneficiario = props.match.params.idBeneficiario
    const classes = useStyle();
    const [idEvaluacion] = useState(window.location.pathname.split("/").pop() === 'detalleEvaluacionesInicio' ? 1 : 2);
    const inicio = idEvaluacion == 1 ? 'Inicio' : 'Fin'

    return (
        <div className={classes.container}>
            <Sidenav titulo='Detalle de Evaluación'/>
            <Container>
                <Paper className={classes.pageContent}>
                        
                    <div className={classes.flexTitulo}>
                            <Link variant="body2" to={"/beneficiarios/"+idBeneficiario}>
                                <IconButton color="primary" aria-label="edit">
                                    <ArrowBackIcon/>
                                </IconButton>
                            </Link>
                            <div>
                                <Link variant="body2" to={"/beneficiarios/"+idBeneficiario+'/editarEvaluacion'+inicio}>
                                    <IconButton color="primary" aria-label="edit">
                                        <EditIcon/>
                                    </IconButton>
                                </Link>

                                {/* <Link variant="body2" to={"/beneficiarios/"+idBeneficiario+'/editarEvaluacion'+inicio}>
                                    <IconButton color="primary" aria-label="edit">
                                        <EditIcon/>
                                    </IconButton>
                                </Link> */}
                            </div>
                    </div>

                    <DetalleEvaluacionValores idBeneficiario={props.match.params.idBeneficiario}/>
                </Paper>
            </Container>
        </div>
    )
}
