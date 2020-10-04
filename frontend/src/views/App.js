import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "../css/App.css";

import Jornadas from "./Jornadas";
import Sidebar from "./Sidebar";

function App() {
  return (
    <Router>
      <Container>
        <Sidebar />
        <div className="main">
          <Route exact path="/" component={Home} />
          <Route path="/beneficiarios" component={Beneficiarios} />
          <Route path="/jornadas" component={Jornadas} />
          <Route path="/reportes" component={Reportes} />
          <Route path="/evaluaciones" component={Evaluaciones} />
          <Route path="/cuentas" component={Cuentas} />
        </div>
      </Container>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Beneficiarios() {
  return (
    <div>
      <h1>Beneficiarios</h1>
    </div>
  );
}

function Reportes() {
  return (
    <div>
      <h1>Reportes</h1>
    </div>
  );
}

function Evaluaciones() {
  return (
    <div>
      <h1>Evaluaciones</h1>
    </div>
  );
}

function Cuentas() {
  return (
    <div>
      <h1>Cuentas</h1>
    </div>
  );
}

export default App;
