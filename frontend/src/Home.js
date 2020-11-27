import React, { useState, useEffect } from 'react';
import { withOktaAuth, useOktaAuth } from '@okta/okta-react';
import Button from '@material-ui/core/Button'
import { Container, CssBaseline, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from './components/Nav/Sidenav';
import Cookies from 'js-cookie'
import axios from 'axios'
import http from './http-common'
import {API_KEY} from './config'

const useStyles = makeStyles({
    container: {
      display: "flex",
      marginTop: "60px"
    },
    watermark: {
      opacity: "0.5"
    }
})

const Home = () => { 
  const classes = useStyles();
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const login = () => authService.login('/profile');
  const logout = () => authService.logout('/');
  
  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      http.get('/eswtrdtf')
          .then(res => {
            Cookies.set("JWT", res.data)
          })
          .catch(e => {
            console.log(e);
          })
      authService.getUser().then(info => {
        setUserInfo(info);
        console.log(info.sub)
        axios.get('https://dev-377919.okta.com/api/v1/users/'+info.sub+'/groups', {headers: {"Accept": "application/json", "Authorization": "SSWS "+API_KEY}})
              .then(res => {
                  console.log(res)
                  let roles = ""
                  res.data.forEach(grupo => {
                    if(grupo.profile.name != 'a') {
                      roles += grupo.profile.name
                      roles += ','
                      
                    }
                  });
                  console.log(roles)
                  Cookies.set("roles", roles)
                })
              .catch(err => {
                  console.log(err)
              });

      });
    }

  }, [authState, authService]); // Update if authState changes

  const button = authState.isAuthenticated ?
      <Button variant="outlined" onClick={logout}>Cerrar Sesión</Button> :
      <Button variant="outlined" onClick={login}>Iniciar Sesión</Button>;

  if( authState.isPending ) { 
    return (
      <div>Loading authentication...</div>
    );
  } else if( !authState.isAuthenticated ) { 
    return (
      <Button variant="outlined" onClick={login}>Iniciar Sesión</Button>
    );
  }
  else {
    return (
      <div className={classes.container} style={{textAlign: "center"}}>
        <CssBaseline />
        <Sidenav />
          <Container>
          
            <h3>
              Hola {userInfo && userInfo.name}. <br />
              Bienvenido a Nefrosoftware.
            </h3>
            <img className={classes.watermark} src={require("./img/blime.png")} alt="Logo de Blime" height="100px"/><br />
            <Typography>© 2020 Blime Todos los derechos reservados.</Typography>
          </Container>
      </div>
    );
  }
};
export default withOktaAuth(Home);


