import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { makeStyles } from "@material-ui/core/styles";

import Home from './Home';
import Login from './okta/Login';
import Drawer from './components/Sidenav';
import Sidenav from './components/Sidenav';

import Beneficiarios from './pages/Beneficiarios';
import Jornadas from './pages/Jornadas';
import Reportes from './pages/Reportes';
import Evaluaciones from './pages/Evaluaciones';

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
            <SecureRoute path='/beneficiarios' component={Beneficiarios} />
            <SecureRoute path='/jornadas' component={Jornadas} />
            <SecureRoute path='/reportes' component={Reportes} />
            <SecureRoute path='/evaluaciones' component={Evaluaciones} />
            
            <Route path='/login' render={() => <Login baseUrl='https://dev-377919.okta.com' />} />
            <Route path='/implicit/callback' component={LoginCallback} />
          </Security>
      </div>
    );
  }
});