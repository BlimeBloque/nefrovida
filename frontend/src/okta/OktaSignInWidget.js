import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

export default class OktaSignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      logo: 'https://static.wixstatic.com/media/e7ff7a_86ca9396460343348fe785dfa5e08832~mv2.png', //Cambiar por imagen local
      logoText: 'Logo de Nefrovida',
      i18n: { //Configuración de los texots y alertas del widget
        es: { // WIDGET EN ESPAÑOL
          'primaryauth.title': 'Iniciar Sesión',
          'primaryauth.username.placeholder': 'Correo electrónico',
          'error.username.required': 'Por favor introduzca su correo',
          'error.password.required': 'Por favor introduzca su contraseña',
        },
        en: { // WIDGET EN INGLÉS
          'primaryauth.title': 'Sign In',
          'primaryauth.email': 'email@example.com'
        }
      },
      authParams: {
        clientId: '0oa61ly4IzGGhU29v5d5',
        issuer: 'https://dev-377919.okta.com/oauth2/default',
        redirectUri: 'https://snefrovidaac.com/login/callback',
        scopes: ['openid', 'profile', 'email'],
        // If your app is configured to use the Implicit Flow 
        // instead of the Authorization Code with Proof of Code Key Exchange (PKCE)
        // you will need to uncomment the below line
        // pkce: false
      }
    });
    this.widget.renderEl({el}, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    return <div />;
  }
};