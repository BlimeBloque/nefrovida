import React , {useState } from 'react'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { Container, Paper, makeStyles, IconButton, Tooltip } from '@material-ui/core';
import Sidenav from '../../components/Nav/Sidenav';
import { Link } from 'react-router-dom';
import DetalleFactorValores from './DetalleFactorValores';
import Cookies from 'js-cookie';
//import EliminarEvaluacion from './EliminarEvaluacion'

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

export default function DetalleFactor(props) {
    const idBeneficiario = props.match.params.idBeneficiario
    const classes = useStyle();
    const [eliminarOpen, setEliminarOpen] = useState(false);

    const handleEliminarOpen = () => {
        setEliminarOpen(true);
    }

    const handleEliminarClose = () => {
        setEliminarOpen(false);
    }


    return (
        <div className={classes.container}>
            <Sidenav titulo='Detalle de Factor de Riesgo'/>
            <Container>
                <Paper className={classes.pageContent}>
                        
                    <div className={classes.flexTitulo}>
                            <Link variant="body2" to={"/beneficiarios/"+idBeneficiario}>
                                <IconButton color="primary" aria-label="edit">
                                    <ArrowBackIcon/>
                                </IconButton>
                            </Link>
                            <div>
                            {Cookies.get("roles").includes("Administrador") || Cookies.get("roles").includes("Social") ? 
                                <Tooltip title='Editar' arrow>
                                    <Link variant="body2" to={"/beneficiarios/"+idBeneficiario+'/editarFactor'}>
                                        <IconButton color="primary" aria-label="edit">
                                            <EditIcon/>
                                        </IconButton>
                                    </Link>
                                </Tooltip>
                                :
                                <></>
                            }
                            {Cookies.get("roles").includes("Administrador") ? 
                                <Tooltip title='Eliminar' arrow>
                                    <IconButton aria-label="Eliminar" color="secondary"  onClick={handleEliminarOpen}>
                                        <RemoveCircleIcon fontSize="large" />
                                    </IconButton>
                                </Tooltip>
                                :
                                <></>
                            }
                            </div>
                    </div>

                    <DetalleFactorValores idBeneficiario={props.match.params.idBeneficiario}/>

                    {/*<EliminarEvaluacion
                        open={eliminarOpen}
                        handleOpen={handleEliminarOpen}
                        handleClose={handleEliminarClose}
                        history={props.history}
                        idBeneficiario={idBeneficiario}
                        tipo={inicio}
                    />*/}
                </Paper>
            </Container>
        </div>
    )
}
