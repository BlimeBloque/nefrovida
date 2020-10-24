import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import Detalles from "./Detalles";
import SeccionConsultaNutricion from '../components/SeccionConsultaNutricion';
import SeccionConsultaMedica from '../components/SeccionConsultaMedica';
import Mensaje from '../components/Mensaje';
import TarjetaEvaluaciones from "../components/Beneficiarios/Evaluaciones/TarjetaEvaluaciones";


const useStyle = makeStyles(theme => ({
  pageContent:{
      margin: theme.spacing(5),
      padding: theme.spacing(3)
  },
  container: {
    display: "flex",
    marginTop: "40px"
  },
  consultaNutricion: {
    margin: theme.spacing(5),
    marginLeft: theme.spacing(1),
    padding: theme.spacing(3),
    float: "right",
    width: "45%",
  },
  consultaMedica: {
    margin: theme.spacing(5),
    marginRight: theme.spacing(1),
    padding: theme.spacing(3),
    float: "left",
    width: "45%",
  },
}))


const BeneficiarioDetalles = (props) => {
  const classes = useStyle();

  const args = props.location.search;

  return (
    <div className={classes.container}>
      <Sidenav titulo="Detalle de Beneficiario" />        
      <Container>
        <Paper className={classes.pageContent}>
          <Detalles idBenef={props.match.params.idBeneficiario} />
        </Paper>
        <div id="consultas">
          <Paper className={classes.consultaNutricion}>
            <SeccionConsultaNutricion history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
          </Paper>
          <Paper className={classes.consultaMedica}>
            <SeccionConsultaMedica history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
          </Paper>
        </div>
          <div id="evaluaciones">
            <Paper className={classes.consultaNutricion}>
              <TarjetaEvaluaciones idBeneficiario={props.match.params.idBeneficiario}/>
            </Paper>
          </div>
      </Container>



      {/* CONSULTA NUTRICIÓN RETRO*/}
      <Mensaje 
        success={args.includes("agregarNutricion") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la consulta de nutrición."}
        mensajeError={"Hubo un error al registrar la consulta de nutrición."}
      />

      {/* EVALUACIÓN RETRO*/}
      <Mensaje 
        success={args.includes("agregarEvaluacion") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la evaluación."}
        mensajeError={"Hubo un error al registrar la evaluación."}
      />

<Mensaje 
        success={args.includes("agregarMedica") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la consulta médica."}
        mensajeError={"Hubo un error al registrar la consulta médica"}
      />
      
    </div>
  );
};

export default BeneficiarioDetalles;
