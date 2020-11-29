import React, { useState, useEffect } from "react";
import Sidenav from "../../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import TamizajeForm from "./TamizajeForm";
import http from "../../http-common";
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

const TamizajeEditar = (props) => {
  const classes = useStyle();
  const [tamizaje, setTamizaje] = useState([]);
  const [retrieve, setRetrieve] = useState([false]);

  useEffect(() => {
    if (
      !Cookies.get("roles").includes("Administrador") &&
      !Cookies.get("roles").includes("Medico")
    ) {
      props.history.goBack();
    }

    http
      .get(
        "/tamizaje/" +
          props.match.params.idBeneficiario +
          "/" +
          props.match.params.idTamizaje
      )
      .then((res) => {
        setTamizaje(res.data[0]);
        setRetrieve(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className={classes.container}>
      <Sidenav titulo="Editar Tamizaje" />
      <Container>
        <Paper className={classes.pageContent}>
          {retrieve === true && (
            <TamizajeForm
              history={props.history}
              idBeneficiario={props.match.params.idBeneficiario}
              editar={true}
              tamizaje={tamizaje}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default TamizajeEditar;
