import React , {useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { Container, Paper, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import Sidenav from '../../components/Nav/Sidenav';
import { Link } from 'react-router-dom';
import DetalleEvaluacionValores from './DetalleEvaluacionValores';
import EliminarEvaluacion from './EliminarEvaluacion'

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
    const [eliminarOpen, setEliminarOpen] = useState(false);

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }


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
                                <Tooltip title='Editar' arrow>
                                    <Link variant="body2" to={"/beneficiarios/"+idBeneficiario+'/editarEvaluacion'+inicio}>
                                        <IconButton color="primary" aria-label="edit">
                                            <EditIcon/>
                                        </IconButton>
                                    </Link>
                                </Tooltip>

                                <Tooltip title='Eliminar' arrow>
                                    <IconButton aria-label="Eliminar" color="secondary"  onClick={handleEliminarOpen}>
                                        <RemoveCircleIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                    </div>

                    <DetalleEvaluacionValores idBeneficiario={props.match.params.idBeneficiario}/>

                    <EliminarEvaluacion
                        open={eliminarOpen}
                        handleOpen={handleEliminarOpen}
                        handleClose={handleEliminarClose}
                        history={props.history}
                        idBeneficiario={idBeneficiario}
                        tipo={inicio}
                    />
                </Paper>
            </Container>
        </div>
    )
}
