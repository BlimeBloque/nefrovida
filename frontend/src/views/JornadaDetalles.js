import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import JornadaDetalleEspecifico from "./JornadaDetalleEspecifico";
import Mensaje from "../components/Mensaje";
import JornadaBeneficiarios from "./JornadaBeneficiarios";

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

const JornadaDetalles = (props) => {

  const classes = useStyle();
  const args = props.location.search;

  return (
    <div className={classes.container}>
      <Sidenav titulo="Detalle de Jornada" />
      <Container>
        <Paper className={classes.pageContent}>
          <JornadaDetalleEspecifico history={props.history} idJornada={props.match.params.idJornada} />
        </Paper>
          <JornadaBeneficiarios idJornada={props.match.params.idJornada}/>
      </Container>

      <Mensaje 
        success={args.includes("agregarBeneficiario") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró el beneficiario correctamente a la jornada."}
        mensajeError={"Hubo un error al registrar al beneficiario"}
      />

    </div>
  );
};

export default JornadaDetalles;
