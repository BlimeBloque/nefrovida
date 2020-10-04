import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <Link to="/">Home</Link>
        <Link to="/beneficiarios">Beneficiarios</Link>
        <Link to="/jornadas">Jornadas</Link>
        <Link to="/reportes">Reportes</Link>
        <Link to="/evaluaciones">Evaluaciones</Link>
        <Link to="/cuentas">Cuentas</Link>
      </div>
    );
  }
}

export default Sidebar;
