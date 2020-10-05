import React, { useState, useEffect } from 'react';
import { withOktaAuth, useOktaAuth } from '@okta/okta-react';
import Button from '@material-ui/core/Button'
import { Container, CssBaseline } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from './components/Nav/Sidenav';

const useStyles = makeStyles({
    container: {
      display: "flex",
      marginTop: "60px"
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
      authService.getUser().then(info => {
        setUserInfo(info);
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
              Hola, {userInfo && userInfo.name}. <br />
              Bienvenido a Nefrosoftware.
            </h3>
            {button}
          </Container>
      </div>
    );
  }
};
export default withOktaAuth(Home);


