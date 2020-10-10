import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Home from './Home';
import Login from './okta/Login';
import Beneficiarios from './views/Beneficiarios';
import Jornadas from './views/Jornadas';
import Reportes from './views/Reportes';
import AgregarBeneficiario from './views/AgregarBeneficiario';
import JornadaDetalles from './views/JornadaDetalles';

export default withRouter(class AppWithRouterAccess extends Component {
  
  constructor(props) {
    super(props);
    this.onAuthRequired = this.onAuthRequired.bind(this);
  }

  onAuthRequired() {
    this.props.history.push('/login')
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
            <SecureRoute path='/jornadas/:idJornada' exact={true} component={JornadaDetalles} />
            <SecureRoute path='/reportes' exact={true} component={Reportes} />
            <SecureRoute path='/beneficiarios/agregar' exact={true} component={AgregarBeneficiario}/>
            
            <Route path='/login' render={() => <Login baseUrl='https://dev-377919.okta.com' />} />
            <Route path='/implicit/callback' component={LoginCallback} />

          </Security>
      </div>
    );
  }
});