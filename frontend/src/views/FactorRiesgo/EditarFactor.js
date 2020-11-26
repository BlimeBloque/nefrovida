import { Container, IconButton, Paper, makeStyles } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import React from 'react'
import { Link } from 'react-router-dom'
import Sidenav from '../../components/Nav/Sidenav'
import EditarFactorValores from './EditarFactorValores';

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

export default function EditarFactor(props) {
    const classes = useStyle();
    const idBeneficiario = props.match.params.idBeneficiario; 
    return (
        <div className={classes.container}>
            <Sidenav titulo='Editar Factor de Riesgo'/>
            <Container>
                <Paper className={classes.pageContent}>
                    <Link variant="body2" to={"/beneficiarios/"+idBeneficiario}>
                        <IconButton color="primary" aria-label="edit">
                            <ArrowBackIcon/>
                        </IconButton>
                    </Link>
                    <EditarFactorValores idBeneficiario={idBeneficiario}/>
                </Paper>
            </Container>
        </div>
    )
}