import React, { useState, useEffect } from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaAgregarForm from "./JornadasAgregarForm";
import http from "../http-common";
import Cookies from "js-cookie";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
    marginTop: "40px",
  },
}));

const JornadasAgregar = (props) => {
  const classes = useStyle();
  const [estados, setEstados] = useState([]);
  const [retrieve, setRetrieve] = useState([false]);

  useEffect(() => {
    //Roles
    if (
      !Cookies.get("roles").includes("Administrador") &&
      !Cookies.get("roles").includes("Medico")
    ) {
      props.history.goBack();
    }

    http
      .get("/estados")
      .then((res) => {
        setEstados(res.data);
        setRetrieve(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Sidenav titulo="Registrar Jornada" />
      <Container>
        <Paper className={classes.pageContent}>
          {retrieve == true && (
            <JornadaAgregarForm
              history={props.history}
              editar={false}
              estados={estados}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default JornadasAgregar;
