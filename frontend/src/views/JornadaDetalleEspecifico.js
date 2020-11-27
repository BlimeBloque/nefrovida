import React, { Component } from "react";
import { API } from "../config";
import { Fab, Grid, Tooltip, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import http from "../http-common";


export default class JornadaDetalleEspecifico extends Component {
  constructor(props) {
    super(props);

    this.getDetallesJornada = this.getDetallesJornada.bind(this);

    this.state = {
      detalles: [],
      retrieve: -1,
    };
  }

  componentDidMount() {
    this.getDetallesJornada();
  }

  getDetallesJornada() {
    http
      .get("/jornadas/" + this.props.idJornada)
      .then((detalles) => {
        console.log(detalles.data);
        console.log(detalles.data.length !== 0);
        this.setState({ detalles: detalles.data });
        if (detalles.data.length !== 0) {
          this.setState({ retrieve: 0 });
        } else {
          this.setState({ retrieve: 1 });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    console.log(this.state.detalles);
    if (this.state.retrieve === 1) {
      return (
        <Typography variant="h4" gutterBottom align="center">
          ERROR 404 | Jornada no encontrada
        </Typography>
      );
    } else {
      return (
        <div>
          {this.state.detalles.map((detalle) => (
            <div key="detalle.idJornada">
              <Grid container spacing="3" justify="space-between">
                <Grid item xs={6}>
                  <Typography variant="h3" gutterBottom>
                    {detalle.nombre}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography variant="h3" gutterBottom>
                    {detalle.idJornada}
                  </Typography>
                </Grid>
              </Grid>
              <br></br>
              <br></br>
              <Grid container spacing="1">
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Estado: {detalle.nombreEstado} ({detalle.siglas})
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Municipio: {detalle.municipio}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Localidad: {detalle.localidad}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" gutterBottom>
                    Fecha: {detalle.fecha}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container justify="flex-end" spacing="3">
                <Grid item xs={1}>
                  <a
                    href={
                      "/jornadas/" + detalle.idJornada + "/agregarBeneficiario"
                    }
                  >
                    <Tooltip title="agregar beneficiario a jornada" arrow>
                      <Fab color="primary">
                        <AddIcon />
                      </Fab>
                    </Tooltip>
                  </a>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>
      );
    }
  }
}
