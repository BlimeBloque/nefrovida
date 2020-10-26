import { Typography, makeStyles, Paper, Tooltip } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import RestaurantIcon from "@material-ui/icons/Restaurant";

const useStyle = makeStyles((theme) => ({
  flex: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  flexContent: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    height: 140,
    width: 100,
    textAlign: "center",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const SeccionNota = (props) => {
  const classes = useStyle();
  const [notas, setNotas] = useState([]);

  /* useEffect ( () => {
        axios.get('http://localhost:8000/api/consultaNutricion/beneficiario/'+props.idBeneficiario)
            .then(res => { setConsultas(res.data)
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);*/

  return (
    <div>
      {console.log(notas)}
      <div className={classes.flex}>
        <Typography
          className={classes.flexContent}
          style={{ margin: "10px 0px 0px 0px" }}
          variant="h6"
        >
          <strong>Tamizaje</strong>
        </Typography>
        <Tooltip title="Agregar tamizaje" arrow>
          <Fab
            className={classes.flexContent}
            color="primary"
            onClick={() =>
              props.history.push(
                "/beneficiarios/" + props.idBeneficiario + "/agregarTamizaje"
              )
            }
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>

      <Grid container justify="center" spacing={4}>
        {notas.length ? (
          notas.map((consulta) => (
            <Grid key={consulta.idConsultaNutricional} item>
              <Paper className={classes.paper}>
                <IconButton
                  aria-label="Consultar"
                  className={classes.margin}
                  onClick={() =>
                    props.history.push(
                      "/consultaNutricion/" + consulta.idConsultaNutricional
                    )
                  }
                >
                  <RestaurantIcon fontSize="large" />
                </IconButton>
                Nota hecha el:{" "}
                {new Date(consulta.created_at).getDate() +
                  "/" +
                  (new Date(consulta.created_at).getMonth() + 1) +
                  "/" +
                  new Date(consulta.created_at).getFullYear()}
              </Paper>
            </Grid>
          ))
        ) : (
          <Typography variant="body">
            No hay notas registradas para este beneficiario
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default SeccionNota;
