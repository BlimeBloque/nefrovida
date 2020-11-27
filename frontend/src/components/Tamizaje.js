import {
  Typography,
  makeStyles,
  Paper,
  Tooltip,
  Fab,
  Grid,
  IconButton,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconTamizaje from "@material-ui/icons/Accessibility";
import http from "../http-common";
import Cookies from "js-cookie";

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

const Tamizaje = (props) => {
  const classes = useStyle();
  const [tamizajes, setTamizaje] = useState([]);

  useEffect(() => {
    http
      .get("/tamizaje/" + props.idBeneficiario)
      .then((res) => {
        setTamizaje(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className={classes.flex}>
        <Typography
          className={classes.flexContent}
          style={{ margin: "10px 0px 0px 0px" }}
          variant="h6"
        >
          <strong>Tamizaje</strong>
        </Typography>
        {(Cookies.get("roles").includes("Administrador") ||
          Cookies.get("roles").includes("Medico")) && (
          <Tooltip title="Agregar tamizaje" arrow>
            <Fab
              className={classes.flexContent}
              color="primary"
              onClick={() =>
                props.history.push(
                  "/beneficiarios/" + props.idBeneficiario + "/tamizaje/agregar"
                )
              }
            >
              <AddIcon />
            </Fab>
          </Tooltip>
        )}
      </div>

      <Grid container justify="center" spacing={4}>
        {tamizajes.length ? (
          tamizajes.map((tamizaje) => (
            <Grid key={tamizaje.idTamizaje} item>
              <Paper className={classes.paper}>
                <IconButton
                  aria-label="Consultar"
                  className={classes.margin}
                  onClick={() =>
                    props.history.push(
                      "/beneficiarios/" +
                        props.idBeneficiario +
                        "/tamizaje/" +
                        tamizaje.idTamizaje
                    )
                  }
                >
                  <IconTamizaje fontSize="large" />
                </IconButton>
                Tamizaje hecho el:{" "}
                {new Date(tamizaje.created_at).getDate() +
                  "/" +
                  (new Date(tamizaje.created_at).getMonth() + 1) +
                  "/" +
                  new Date(tamizaje.created_at).getFullYear()}
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

export default Tamizaje;
