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
            <SecureRoute path='/reportes' exact={true} component={Reportes} />
            <SecureRoute path='/beneficiarios/agregar' exact={true} component={AgregarBeneficiario}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarConsultaNutricion' exact={true} component={AgregarConsultaNutricion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarEvaluacionInicio' exact={true} component={AgregarEvaluacion}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarEvaluacionFin' exact={true} component={AgregarEvaluacion}/>
            
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/editar' exact={true} component={EditarBeneficiario}/>
            <SecureRoute path='/consultaNutricion/:idConsultaNutricion([0-9]*)' exact={true} component={DetalleConsultaNutricion}/>
            <SecureRoute path='/consultaNutricion/editar/:idConsultaNutricion([0-9]*)' exact={true} component={EditarConsultaNutricion}/>

            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarNota' exact={true} component={AgregarNota}/>
            <SecureRoute path='/nota/editar/:idNota([0-9]*)' exact={true} component={EditarNota}/>

            <SecureRoute path='/nota/:idConsultaMedica([0-9]*)' exact={true} component={DetalleNota}/>
            <SecureRoute path='/beneficiarios/:idBeneficiario([0-9]*)/agregarConsultaMedica' exact={true} component={AgregarConsultaMedica}/>
            <SecureRoute path='/consultaMedica/:idConsultaMedica([0-9]*)' exact={true} component={DetalleConsultaMedica}/>
            <SecureRoute path='/consultaMedica/editar/:idConsultaMedica([0-9]*)' exact={true} component={EditarConsultaMedica}/>

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
