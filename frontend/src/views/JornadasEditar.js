import React, { useState, useEffect } from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaEditarForm from "./JornadasAgregarForm";
import http from "../http-common";

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
  const [jornada, setJornada] = useState([]);
  const [estados, setEstados] = useState([]);
  const [retrieve, setRetrieve] = useState([false]);

  useEffect(() => {
    http
      .get("/estados")
      .then((res) => {
        setEstados(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
    http
      .get("/jornadas/" + props.match.params.idJornada)
      .then((res) => {
        setJornada(res.data[0]);
        setRetrieve(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Sidenav titulo="Editar Joranda" />
      <Container>
        <Paper className={classes.pageContent}>
          {retrieve == true && (
            <JornadaEditarForm
              history={props.history}
              idJornada={props.match.params.idJornada}
              editar={true}
              jornada={jornada}
              estados={estados}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default JornadasAgregar;
