import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Message } from "semantic-ui-react";

import { API } from "../config";

import "../css/JornadasTabla.css";

class JornadasTabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jornadas: null,
      isLoading: null,
    };
  }

  componentDidMount() {
    this.getJornadas();
  }

  async getJornadas() {
    if (!this.state.jornadas) {
      try {
        this.setState({ isLoading: true });
        const response = await fetch(API + "/jornadas", {
          headers: {},
        });
        const ListJornadas = await response.json();
        this.setState({ jornadas: ListJornadas.data, isLoading: false });
      } catch (err) {
        this.setState({ isLoading: false });
        console.error(err);
      }
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Message info header="Cargando Jornadas..." />}
        {this.state.jornadas && (
          <div>
            <Link to="jornadas/agregar">
              <Button>Agregar</Button>
            </Link>
            <Table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Localidad</th>
                  <th>Municipio</th>
                  <th>idEstado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.jornadas.map((jornada) => (
                  <tr id={jornada.id} key={jornada.id}>
                    <td>{jornada.nombre}</td>
                    <td>{jornada.fecha}</td>
                    <td>{jornada.localidad}</td>
                    <td>{jornada.municipio}</td>
                    <td className="center">{jornada.idEstado}</td>
                    <td className="center">
                      <Link
                        to={{
                          pathname: "/jornadas/editar",
                          id: jornada.id,
                          nombre: jornada.nombre,
                        }}
                      >
                        <Button>Editar</Button>
                      </Link>
                      <Link to="/jornadas/eliminar">
                        <Button>Eliminar</Button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>Nombre</th>
                  <th>Fecha</th>
                  <th>Localidad</th>
                  <th>Municipio</th>
                  <th>idEstado</th>
                  <th>Acciones</th>
                </tr>
              </tfoot>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default JornadasTabla;
