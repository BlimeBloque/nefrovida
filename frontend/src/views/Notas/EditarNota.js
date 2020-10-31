import React from "react";
import { Route } from "react-router-dom";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from '@material-ui/core';
import EditarNotaForm from './EditarNotaForm';

const useStyle = makeStyles(theme => ({
    pageContent:{
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    container: {
        display: "flex",
        marginTop: "40px"
    }
}))


const EditarNota = (props) => {
    const classes = useStyle();
    console.log(props);
    return (
        <div className={classes.container}>
            <Sidenav titulo="Editar Nota" />        
            <Container>
            <Paper className={classes.pageContent}>
                <EditarNotaForm history={props.history} idNota={props.match.params.idNota} />
            </Paper>
            </Container>
        </div>
    );

}

export default EditarNota;
