import React, { useState, useEffect } from "react";
import {
  Paper,
  makeStyles,
  Container,
  Typography,
  Tooltip,
  IconButton,
  Button,
  DialogActions,
  DialogTitle,
  Dialog,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import EditIcon from "@material-ui/icons/Edit";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Sidenav from "../../components/Nav/Sidenav";
import http from "../../http-common";
import Cookies from "js-cookie";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
    marginTop: "40px",
  },
  button: {
    margin: theme.spacing(1),
  },
  flexTitulo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(4),
  },
  flexNormal: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
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
  normal: {
    fontStyle: "normal",
    margin: theme.spacing(1),
  },
  faltante: {
    fontStyle: "italic",
    margin: theme.spacing(1),
  },
}));

const DetalleConsultaNutricion = (props) => {
  const classes = useStyle();
  const [tamizaje, setTamizaje] = useState([]);
  const idBeneficiario = props.match.params.idBeneficiario;
  const idTamizaje = props.match.params.idTamizaje;
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    http
      .get("/tamizaje/" + idBeneficiario + "/" + idTamizaje)
      .then((res) => {
        setTamizaje(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleClickOpen = (jornada) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const EliminarTamizaje = () => {
    http
      .delete("/tamizaje/" + idBeneficiario + "/" + idTamizaje)
      .then((res) => {
        props.history.push("/beneficiarios/" + idBeneficiario);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //Dar formato a fecha
  const date = new Date(tamizaje.created_at);
  const fecha =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return (
    <div className={classes.container}>
      <Sidenav titulo="Detalle de Tamizaje" />
      <Container>
        <Paper className={classes.pageContent}>
          <Link variant="body2" to={"/beneficiarios/" + idBeneficiario}>
            <IconButton color="primary" aria-label="edit">
              <ArrowBackIcon />
            </IconButton>
          </Link>

          <center>
            <div id="header" className={classes.flexTitulo}>
              <Typography variant="h5">{fecha}</Typography>
              <Typography variant="h3">
                {tamizaje.nombreBeneficiario}
              </Typography>
              
                <div id="botones">
                {(Cookies.get("roles").includes("Administrador") ||
                Cookies.get("roles").includes("Social")) && (
                  <Tooltip title="Editar" arrow>
                    <IconButton
                      aria-label="Editar"
                      color="primary"
                      onClick={() =>
                        props.history.push(
                          "/beneficiarios/" +
                            idBeneficiario +
                            "/tamizaje/" +
                            idTamizaje +
                            "/editar"
                        )
                      }
                    >
                      <EditIcon fontSize="large" />
                    </IconButton>
                    
                  </Tooltip>
                )}
                  {(Cookies.get("roles").includes("Administrador") && (
                  <Tooltip title="Eliminar" arrow>
                    <IconButton
                      aria-label="Eliminar"
                      color="secondary"
                      onClick={() => handleClickOpen()}
                    >
                      <RemoveCircleIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                    ))}
                </div>
            </div>

            <div id="datosNutrimentales">
              <Typography
                variant="body1"
                className={
                  tamizaje.presionArterial ? classes.normal : classes.faltante
                }
              >
                <strong className={classes.normal}>Presión Arterial: </strong>
                {tamizaje.presionArterial
                  ? tamizaje.presionArterial
                  : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={tamizaje.peso ? classes.normal : classes.faltante}
              >
                <strong className={classes.normal}>Peso: </strong>
                {tamizaje.peso ? tamizaje.peso : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={
                  tamizaje.circunferenciaCintura
                    ? classes.normal
                    : classes.faltante
                }
              >
                <strong className={classes.normal}>
                  Circunferencia en Cintura:{" "}
                </strong>
                {tamizaje.circunferenciaCintura
                  ? tamizaje.circunferenciaCintura
                  : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={
                  tamizaje.circunferenciaCadera
                    ? classes.normal
                    : classes.faltante
                }
              >
                <strong className={classes.normal}>
                  Circunferencia en Cadera:{" "}
                </strong>
                {tamizaje.circunferenciaCadera
                  ? tamizaje.circunferenciaCadera
                  : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={
                  tamizaje.glucosaCapilar ? classes.normal : classes.faltante
                }
              >
                <strong className={classes.normal}>Glucosa Capilar: </strong>
                {tamizaje.glucosaCapilar
                  ? tamizaje.glucosaCapilar
                  : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={tamizaje.talla ? classes.normal : classes.faltante}
              >
                <strong className={classes.normal}>Talla: </strong>
                {tamizaje.talla ? tamizaje.talla : "No registrado"}
              </Typography>
              <Typography
                variant="body1"
                className={
                  tamizaje.comentario ? classes.normal : classes.faltante
                }
              >
                <strong className={classes.normal}>Comentario: </strong>
                {tamizaje.comentario ? tamizaje.comentario : "No registrado"}
              </Typography>
            </div>
          </center>
        </Paper>
      </Container>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Seguro que desea eliminar este tamizaje?
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={() => EliminarTamizaje()} color="primary">
            Eliminar
          </Button>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DetalleConsultaNutricion;
