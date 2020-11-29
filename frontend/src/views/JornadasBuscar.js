import React, { Component } from "react";
import {
  FormControl,
  Tooltip,
  TextField,
  InputAdornment,
  Fab,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";

import JornadasDataService from "../services/jornadas.service";

import TablaJornadas from "./JornadasBuscarTabla";
import Cookies from "js-cookie";

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
      filtrarLoc: "",
      page: 0,
      history: props.history,
      retrieve: -1,
    };
  }

  componentDidMount() {
    if(!Cookies.get('cargado'))
    {
      Cookies.set('cargado', true)
      window.location.reload();
    }
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
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  handleNombre = (event) => {
    this.setState({ filtrarNombre: event.target.value });
    this.setPage(0);
  };

  handleLoc = (event) => {
    this.setState({ filtrarLoc: event.target.value });
    this.setPage(0);
  };

  render() {
    const { jornadas, filtrarLoc, filtrarNombre, page, history } = this.state;

    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: " 40px 40px 20px 40px",
          }}
        >
          <FormControl style={{ width: "40%" }}>
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

          <FormControl style={{ width: "40%" }}>
            <TextField
              label="Buscar por localidad"
              value={this.state.filtrarLoc}
              onChange={this.handleLoc}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
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
          localidad={filtrarLoc}
          setPage={this.setPage}
          page={page}
          url={history}
          retrieve={this.state.retrieve}
        />
      </div>
    );
  }
}
