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
        this.setState({ jornadas: ListJornadas, isLoading: false });
        console.log(this.state.jornadas);
      } catch (err) {
        this.setState({ isLoading: false });
        console.error(err);
      }
    }
  }

  async deleteJornada(e) {
    e.preventDefault();
    const response = await fetch(API + "/jornadas/" + this.state.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true",
      },
    });

    await response;
    this.props.onDelete(this.state.id);
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
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {this.state.jornadas.map((jornada) => (
                  <tr id={jornada.idJornada} key={jornada.idJornada}>
                    <td><a href={'/jornadas/'+jornada.idJornada}> {jornada.nombre}</a></td>
                    <td>{jornada.fecha}</td>
                    <td>{jornada.localidad}</td>
                    <td>{jornada.municipio}</td>
                    <td>{jornada.nombreEstado}</td>
                    <td className="center">
                      <Link
                        to={{
                          pathname: "/jornadas/editar/"+jornada.idJornada,
                          id: jornada.idJornada,
                          nombre: jornada.nombre,
                          fecha: jornada.fecha,
                          localidad: jornada.localidad,
                          municipio: jornada.municipio,
                          idEstado: jornada.idEstado,
                        }}
                      >
                        <Button>Editar</Button>
                      </Link>
                      <Link
                        to="#"
                        onClick={() => console.log(jornada.idJornada)}
                      >
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
                  <th>Estado</th>
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
