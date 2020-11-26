import React from "react";
import Sidenav from "../components/Nav/Sidenav";
import { Paper, makeStyles, Container } from "@material-ui/core";
import Detalles from "./Detalles";
import SeccionConsultaNutricion from '../components/SeccionConsultaNutricion';
import SeccionNota from '../components/SeccionNota';
import SeccionConsultaMedica from '../components/SeccionConsultaMedica';
import SeccionAntecedentes from '../components/SeccionAntecedentes';
import Mensaje from '../components/Mensaje';
import SeccionEvaluacion from "../components/SeccionEvaluacion";
import TarjetaEvaluaciones from "../components/Beneficiarios/Evaluaciones/TarjetaEvaluaciones";
import SeccionAnalisisLab from "../components/SeccionAnalisisLab";
import Tamizaje from "../components/Tamizaje";
import SeccionFactor from "../components/SeccionFactor";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
    marginTop: "40px",
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
}));

const BeneficiarioDetalles = (props) => {
  const classes = useStyle();

  const args = props.location.search;

  return (
    <div className={classes.container}>
      <Sidenav titulo="Detalle de Beneficiario" />
      <Container>
        <Paper className={classes.pageContent}>
          <Detalles
            history={props.history}
            idBenef={props.match.params.idBeneficiario}
          />
        </Paper>
        <div id="antecedentes">
        <Paper className={classes.antecedentes}>
            <SeccionAntecedentes history={props.history} idBeneficiario={props.match.params.idBeneficiario} />
          </Paper>
        </div>
        <div id="consultas">
          <Paper className={classes.consultaNutricion}>
            <SeccionConsultaNutricion
              history={props.history}
              idBeneficiario={props.match.params.idBeneficiario}
            />
          </Paper>
          <Paper className={classes.consultaMedica}>
            <SeccionConsultaMedica
              history={props.history}
              idBeneficiario={props.match.params.idBeneficiario}
            />
          </Paper>
        </div>
          <div id="evaluaciones">
            <Paper className={classes.consultaNutricion}>
              <SeccionEvaluacion idBeneficiario={props.match.params.idBeneficiario} history={props.history}/>
            </Paper>
          </div>
          <div id="factores">
            <Paper className={classes.consultaNutricion}>
              <SeccionFactor idBeneficiario={props.match.params.idBeneficiario} history={props.history}/>
            </Paper>
          </div>
        <div id="notas">
          <Paper className={classes.consultaMedica}>
            <SeccionNota
              history={props.history}
              idBeneficiario={props.match.params.idBeneficiario}
            />
          </Paper>
        </div>
        <div id="analisisLab">
          <Paper className={classes.consultaNutricion}>
            <SeccionAnalisisLab history={props.history} idBeneficiario={props.match.params.idBeneficiario}/>
          </Paper>
        </div>
        <div id="tamizaje">
          <Paper className={classes.consultaMedica}>
            <Tamizaje
              history={props.history}
              idBeneficiario={props.match.params.idBeneficiario}
            />
          </Paper>
        </div>
      </Container>

      {/* ELIMINAR NOTA RETRO*/}
      <Mensaje 
        success={args.includes("eliminarNota") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó la nota correctamente."}
        mensajeError={"Hubo un error al eliminar la nota de beneficiario."}
      />


       {/* EDITAR PREGUNTAS EVALUACIÓN*/}
       <Mensaje 
        success={args.includes("editarPreguntas") ? args.slice(-1) : -1} 
        mensajeExito={"Se editaron las preguntas de la evaluación correctamente."}
        mensajeError={"Hubo un error al editar las preguntas de la evaluación."}
      />


      {/* ELIMINAR EVALUACIÓN*/}
      <Mensaje 
        success={args.includes("eliminarEvaluacion") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó la evaluación correctamente."}
        mensajeError={"Hubo un error al eliminar la evaluación."}
      />

      <Mensaje 
        success={args.includes("editarNota") ? args.slice(-1) : -1} 
        mensajeExito={"Se editó la nota correctamente."}
        mensajeError={"Hubo un error al editar la nota"}
      />

      <Mensaje 
        success={args.includes("editarBeneficiario") ? args.slice(-1) : -1} 
        mensajeExito={"Se editó el beneficiario correctamente."}
        mensajeError={"Hubo un error al editar al beneficiario"}
      />

      <Mensaje
        success={args.includes("agregarNota") ? args.slice(-1) : -1}
        mensajeExito={"Se registró la nota correctamente."}
        mensajeError={"Hubo un error al registrar la nota"}
      />

      {/* AGREGAR CONSULTA NUTRICIÓN RETRO*/}
      <Mensaje 
        success={args.includes("agregarNutricion") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la consulta de nutrición."}
        mensajeError={"Hubo un error al registrar la consulta de nutrición."}
      />

      {/* ELIMINAR CONSULTA NUTRICIÓN RETRO*/}
      <Mensaje 
        success={args.includes("eliminarNutricion") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó la consulta de nutrición."}
        mensajeError={"Hubo un error al eliminar la consulta de nutrición."}
      />

      {/* EVALUACIÓN RETRO*/}
      <Mensaje
        success={args.includes("agregarEvaluacion") ? args.slice(-1) : -1}
        mensajeExito={"Se registró la evaluación."}
        mensajeError={"Hubo un error al registrar la evaluación."}
      />

      <Mensaje
        success={args.includes("agregarFactor") ? args.slice(-1) : -1}
        mensajeExito={"Se registró el factor de riesgo."}
        mensajeError={"Hubo un error al registrar el factor de riesgo."}
      />

      <Mensaje 
        success={args.includes("eliminarFactor") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó el factor de riesgo correctamente."}
        mensajeError={"Hubo un error al eliminar el factor de riesgo."}
      />

      <Mensaje 
        success={args.includes("agregarMedica") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la consulta médica."}
        mensajeError={"Hubo un error al registrar la consulta médica"}
      />

      <Mensaje 
        success={args.includes("agregarAntecedentes") ? args.slice(-1) : -1} 
        mensajeExito={"Se registraron los antecedentes."}
        mensajeError={"Hubo un error al registrar los antecedentes"}
      />

      {/* ELIMINAR ANTECEDENTES RETRO*/}
      <Mensaje 
        success={args.includes("eliminarAntecedentes") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminaron los antecedentes."}
        mensajeError={"Hubo un error al eliminar los antecedentes."}
        success={args.includes("eliminarMedica") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó la consulta médica."}
        mensajeError={"Hubo un error al eliminar la consulta médica."}
      />
      
      {/*AGREGAR EXAMEN ORINA RETRO*/}
      <Mensaje 
        success={args.includes("agregarExamenOrina") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró el examen de orina."}
        mensajeError={"Hubo un error al registrar el examen de orina."}
      />

      {/*ELIMINAR EXAMEN ORINA RETRO*/}
      <Mensaje 
        success={args.includes("eliminarExamenOrina") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó el examen de orina."}
        mensajeError={"Hubo un error al eliminar el examen de orina."}
      />

      {/*AGREGAR DEPURACION DE CREATININA RETRO*/}
      <Mensaje 
        success={args.includes("agregarDepuracionCreatinina") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró la depuración de creatinina."}
        mensajeError={"Hubo un error al registrar la depuración de creatinina."}
      />

      {/*ELIMINAR DEPURACION DE CREATININA RETRO*/}
      <Mensaje 
        success={args.includes("eliminarDepuracionCreatinina") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó la depuración de creatinina."}
        mensajeError={"Hubo un error al eliminar la depuración de creatinina."}
      />

      {/*AGREGAR QUIMICA SANGUINEA RETRO*/}
      <Mensaje 
        success={args.includes("agregarQuimicaSanguinea") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró el análisis de química sanguínea."}
        mensajeError={"Hubo un error al registrar el análisis de química sanguínea."}
      />

      {/*ELIMINAR QUIMICA SANGUINEA RETRO*/}
      <Mensaje 
        success={args.includes("eliminarQuimicaSanguinea") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó el análisis de química sanguínea."}
        mensajeError={"Hubo un error al eliminar el análisis de química sanguínea."}
      />

      {/*AGREGAR MICROALBUMINURIA RETRO*/}
      <Mensaje 
        success={args.includes("agregarMicroalbuminuria") ? args.slice(-1) : -1} 
        mensajeExito={"Se registró el análisis de microalbuminuría."}
        mensajeError={"Hubo un error al registrar el análisis de microalbuminuría."}
      />

      {/*ELIMINAR MICROALBUMINURIA RETRO*/}
      <Mensaje 
        success={args.includes("eliminarMicroalbuminuria") ? args.slice(-1) : -1} 
        mensajeExito={"Se eliminó el análisis de microalbuminuría."}
        mensajeError={"Hubo un error al eliminar análisis de microalbuminuría."}
      />
      

      {/* Tamizaje Retro*/}
      <Mensaje
        success={args.includes("agregarTamizaje") ? args.slice(-1) : -1}
        mensajeExito={"Se registró el temizaje."}
        mensajeError={"Hubo un error al registrar el tamizaje."}
      />
      <Mensaje
        success={args.includes("editarTamizaje") ? args.slice(-1) : -1}
        mensajeExito={"Se editó el temizaje."}
        mensajeError={"Hubo un error al editar el tamizaje."}
      />
    </div>
  );
};

export default BeneficiarioDetalles;
