import React, { Component } from 'react';
import { withOktaAuth } from '@okta/okta-react';
import Button from '@material-ui/core/Button'
import Sidenav from './components/Sidenav';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    //this.logout();
    if (this.props.authState.isPending) return null;

    const button = this.props.authState.isAuthenticated ?
      <Button variant="outlined" onClick={this.logout}>Cerrar Sesión</Button> :
      <Button variant="outlined" onClick={this.login}>Iniciar Sesión</Button>;

    return (
      <div>
        <Sidenav />
        {button}
      </div>
    );
  }
});