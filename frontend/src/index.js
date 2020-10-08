import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { esES } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, esES);

ReactDOM.render(
<<<<<<< HEAD
 
    <App />,

=======
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
>>>>>>> ae4857dd5f4fa4a6982e50aef44e33f3a58aa8c3
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
