import React, { Component } from "react";

class JornadaEditar extends Component {
  render() {
    return (
      <div>
        {this.props.location.id == null && (
          <div>Error: Seleccione una Jornada</div>
        )}
        {this.props.location.id > 0 && (
          <div>
            <p>Id: {this.props.location.id}</p>
            <p>Nombre: {this.props.location.nombre}</p>
          </div>
        )}
      </div>
    );
  }
}

export default JornadaEditar;
