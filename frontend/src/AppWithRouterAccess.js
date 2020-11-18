import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Home from "./Home";
import Login from "./okta/Login";
import Beneficiarios from "./views/Beneficiarios";
import Jornadas from "./views/Jornadas";
import JornadasAgregar from "./views/JornadasAgregar";
import JornadasEditar from "./views/JornadasEditar";

import Reportes from "./views/Reportes";
import SelectReporte from "./views/Reportes/SelectReporte";
import ReportesPorJornada from "./views/Reportes/ReportesPorJornada";

import AgregarBeneficiario from "./views/AgregarBeneficiario";
import EditarBeneficiario from "./views/EditarBeneficiario";
import AgregarConsultaNutricion from './views/ConsultaNutricion/AgregarConsultaNutricion';
import BeneficiarioDetalles from "./views/BeneficiarioDetalles";
import JornadaDetalles from './views/JornadaDetalles';
import AgregarEvaluacion from './views/Evaluaciones/AgregarEvaluacion';
import DetalleConsultaNutricion from "./views/ConsultaNutricion/DetalleConsultaNutricion";
import EditarConsultaNutricion from "./views/ConsultaNutricion/EditarConsultaNutricion";
import AgregarNota from './views/Notas/AgregarNota';
import DetalleNota from './views/Notas/DetalleNota';
import EditarNota from './views/Notas/EditarNota';
import AgregarConsultaMedica from './views/ConsultaMedica/AgregarConsultaMedica';
import DetalleConsultaMedica from './views/ConsultaMedica/DetalleConsultaMedica';
import EditarConsultaMedica from "./views/ConsultaMedica/EditarConsultaMedica";
import AgregarAntecedentes from './views/Antecedentes/AgregarAntecedentes';
import DetalleAntecedentes from './views/Antecedentes/DetalleAntecedentes';
import EditarAntecedentes from './views/Antecedentes/EditarAntecedentes';
import DetalleEvaluacion from "./views/Evaluaciones/DetalleEvaluacion";
import AgregarAnalisisLab from './views/AnalisisLab/AgregarAnalisisLab';
import AgregarExamenOrina from "./views/AnalisisLab/ExamenOrina/AgregarExamenOrina";
import EditarExamenOrina from "./views/AnalisisLab/ExamenOrina/EditarExamenOrina";
import AgregarDepuracionCreatinina from "./views/AnalisisLab/DepuracionCreatinina/AgregarDepuracionCreatinina";
import AgregarQuimicaSanguinea from "./views/AnalisisLab/QuimicaSanguinea/AgregarQuimicaSanguinea";
import AgregarMicroalbuminuria from "./views/AnalisisLab/Microalbuminuria/AgregarMicroalbuminuria";
import AgregarTamizaje from "./views/Tamizaje/TamizajeAgregar";
import EditarTamizaje from "./views/Tamizaje/TamizajeEditar"
import DetalleTamizaje from "./views/Tamizaje/TamizajeDetalle";
import DetalleExamenOrina from './views/AnalisisLab/ExamenOrina/DetalleExamenOrina';
import DetalleDepuracionCreatinina from './views/AnalisisLab/DepuracionCreatinina/DetalleDepuracionCreatinina';
import EditarDepuracionCreatinina from './views/AnalisisLab/DepuracionCreatinina/EditarDepuracionCreatinina';
import DetalleQuimicaSanguinea from './views/AnalisisLab/QuimicaSanguinea/DetalleQuimicaSanguinea';
import DetalleMicroalbuminuria from './views/AnalisisLab/Microalbuminuria/DetalleMicroalbuminuria';
import EditarMicroalbuminuria from './views/AnalisisLab/Microalbuminuria/EditarMicroalbuminuria';
import EditarEvaluacion from "./views/Evaluaciones/EditarEvaluacion";
import EditarQuimicaSanguinea from "./views/AnalisisLab/QuimicaSanguinea/EditarQuimicaSanguinea";


export default withRouter(
  class AppWithRouterAccess extends Component {
    constructor(props) {
      super(props);
      this.onAuthRequired = this.onAuthRequired.bind(this);
    }

    onAuthRequired() {
      this.props.history.push("/login");
    }

  render() {
    return (
      <div>
          <Security issuer='https://dev-377919.okta.com/oauth2/default'
                    clientId='0oa61ly4IzGGhU29v5d5'
                    redirectUri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={this.onAuthRequired} >
            <SecureRoute path='/' exact={true} component={Home} />
            <SecureRoute path='/beneficiarios' exact={true} component={Beneficiarios} />
            <SecureRoute path='/jornadas' exact={true} component={Jornadas} />
            <SecureRoute path='/jornadas/:idJornada([0-9]*)' exact={true} component={JornadaDetalles} />

            <SecureRoute path='/reportes' exact={true} component={SelectReporte} />
            <SecureRoute path='/reportes/general' exact={true} component={Reportes} />
            <SecureRoute path='/reportes/:idJornada([0-9]*)' exact={true} component={ReportesPorJornada} />

            <SecureRoute path='/jornadas/:idJornada([0-9]*)/agregarBeneficiario' exact={true} component={AgregarBeneficiario}/>

            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarConsultaNutricion' exact={true} component={AgregarConsultaNutricion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarEvaluacionInicio' exact={true} component={AgregarEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarEvaluacionFin' exact={true} component={AgregarEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarAntecedentes' exact={true} component={AgregarAntecedentes}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/detalleEvaluacionesInicio' exact={true} component={DetalleEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/detalleEvaluacionesFin' exact={true} component={DetalleEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/editarEvaluacionInicio' exact={true} component={EditarEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/editarEvaluacionFin' exact={true} component={EditarEvaluacion}/>
            
            {/* Tamizaje */}
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/tamizaje/agregar' exact={true} component={AgregarTamizaje}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/tamizaje/:idTamizaje([0-9]*)/editar' exact={true} component={EditarTamizaje}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/tamizaje/:idTamizaje([0-9]*)' exact={true} component={DetalleTamizaje}/>

            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/editar' exact={true} component={EditarBeneficiario}/>
            <SecureRoute path='/consultaNutricion/:idConsultaNutricion([0-9]*)' exact={true} component={DetalleConsultaNutricion}/>
            <SecureRoute path='/consultaNutricion/editar/:idConsultaNutricion([0-9]*)' exact={true} component={EditarConsultaNutricion}/>
          
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarAnalisisLab' exact={true} component={AgregarAnalisisLab}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarExamenOrina' exact={true} component={AgregarExamenOrina}/>
            <SecureRoute path='/examenOrina/:idExamenOrina([0-9]*)' exact={true} component={DetalleExamenOrina}/>
            <SecureRoute path='/examenOrina/editar/:idExamenOrina([0-9]*)' exact={true} component={EditarExamenOrina}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarDepuracionCreatinina' exact={true} component={AgregarDepuracionCreatinina}/>
            <SecureRoute path='/depuracionCreatinina/:idDepuracionCreatinina([0-9]*)' exact={true} component={DetalleDepuracionCreatinina}/>
            <SecureRoute path='/depuracionCreatinina/editar/:idDepuracionCreatinina([0-9]*)' exact={true} component={EditarDepuracionCreatinina}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarQuimicaSanguinea' exact={true} component={AgregarQuimicaSanguinea}/>
            <SecureRoute path='/quimicaSanguinea/:idQuimicaSanguinea([0-9]*)' exact={true} component={DetalleQuimicaSanguinea}/>
            <SecureRoute path='/quimicaSanguinea/editar/:idQuimicaSanguinea([0-9]*)' exact={true} component={EditarQuimicaSanguinea}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarMicroalbuminuria' exact={true} component={AgregarMicroalbuminuria}/>
            <SecureRoute path='/microalbuminuria/:idMicroalbuminuria([0-9]*)' exact={true} component={DetalleMicroalbuminuria}/>
            <SecureRoute path='/microalbuminuria/editar/:idMicroalbuminuria([0-9]*)' exact={true} component={EditarMicroalbuminuria}/>


            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarNota' exact={true} component={AgregarNota}/>
            <SecureRoute path='/nota/editar/:idNota([0-9]*)' exact={true} component={EditarNota}/>

            <SecureRoute path='/nota/:idConsultaMedica([0-9]*)' exact={true} component={DetalleNota}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarConsultaMedica' exact={true} component={AgregarConsultaMedica}/>
            <SecureRoute path='/consultaMedica/:idConsultaMedica([0-9]*)' exact={true} component={DetalleConsultaMedica}/>
            <SecureRoute path='/consultaMedica/editar/:idConsultaMedica([0-9]*)' exact={true} component={EditarConsultaMedica}/>

            <SecureRoute path='/antecedentes/:idAntecedentes([0-9]*)' exact={true} component={DetalleAntecedentes}/>
            <SecureRoute path='/antecedentes/editar/:idAntecedentes([0-9]*)' exact={true} component={EditarAntecedentes}/>

            <Route path='/login' render={() => <Login baseUrl='https://dev-377919.okta.com' />} />
            <Route path='/implicit/callback' component={LoginCallback} />
            <SecureRoute
              path="/beneficiarios/:idBeneficiario([0-9]*)"
              exact={true}
              component={BeneficiarioDetalles}
            />
            <SecureRoute
              path="/jornadas/agregar"
              exact={true}
              component={JornadasAgregar}
            />
            <SecureRoute
              path="/jornadas/editar/:idJornada([0-9]*)"
              exact={true}
              component={JornadasEditar}
            />
          </Security>
        </div>
      );
    }
  }
);
