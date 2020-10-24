import React, { Component } from "react";
import {
  FormControl,
  Tooltip,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  InputAdornment,
  Fab,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

import JornadasDataService from "../services/jornadas.service";

import TablaJornadas from "./JornadasBuscarTabla";

export default class JornadasBuscar extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.retrieveJornadas = this.retrieveJornadas.bind(this);
    this.setPage = this.setPage.bind(this);

    this.state = {
      jornadas: [],
      estados: [],
      filtrarNombre: "",
      filtrarEstado: "",
      page: 0,
      history: props.history,
      retrieve: -1,
    };
  }

  componentDidMount() {
    this.retrieveJornadas();
  }

  retrieveJornadas() {
    JornadasDataService.getAll()
      .then((jornadas) => {
        this.setState({ jornadas: jornadas.data });
        if (jornadas.data.length !== 0) {
          this.setState({ retrieve: 0 });
        } else {
          this.setState({ retrieve: 1 });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    JornadasDataService.getEstados()
      .then((estados) => {
        this.setState({ estados: estados.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  handleNombre = (event) => {
    this.setState({ filtrarNombre: event.target.value });
    this.setPage(0);
  };

  handleEstado = (event) => {
    this.setState({ filtrarEstado: event.target.value });
    this.setPage(0);
  };

  render() {
    const {
      jornadas,
      estados,
      filtrarEstado,
      filtrarNombre,
      page,
      history,
    } = this.state;

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: " 40px 40px 20px 40px",
          }}
        >
          <FormControl style={{ width: "60%" }}>
            <TextField
              label="Buscar por nombre"
              value={this.state.filtrarNombre}
              onChange={this.handleNombre}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>

          <FormControl style={{ minWidth: "20%" }}>
            <InputLabel id="buscarEstadoLabel">Buscar por estado</InputLabel>
            <Select
              labelId="buscarEstadoLabel"
              value={this.state.filtrarEstado}
              onChange={this.handleEstado}
              options={estados}
            >
              <MenuItem value="">Todos</MenuItem>
              {this.state.estados.map((estado) => (
                <MenuItem value={estado.nombre} key={estado.id}>
                  {estado.nombre}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Tooltip title="Agregar una jornada">
            <Fab
              color="primary"
              onClick={() => history.push("/jornadas/agregar")}
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        </div>
        <TablaJornadas
          data={jornadas}
          nombre={filtrarNombre}
          estado={filtrarEstado}
          setPage={this.setPage}
          page={page}
          url={history}
          retrieve={this.state.retrieve}
        />
      </div>
    );
  }
}
