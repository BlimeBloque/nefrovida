import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, TextField, Grid } from "@material-ui/core";
import http from "../../http-common";
import Cookies from "js-cookie";

function hasNumber(myString) {
  return /\d/.test(myString);
}
function isNullOrWhitespace(input) {
  return !input || !input.trim();
}

function isDecimal(input) {
  return /^\d{1,3}\.\d{1,2}$/.test(input);
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: theme.spacing(1),
    },
  },

  TextField: {
    width: "100%",
  },

  form: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const initialValues = {
  idBeneficiario: 0,
  presionArterial: "",
  peso: "",
  circunferenciaCintura: "",
  circunferenciaCadera: "",
  glucosaCapilar: "",
  talla: "",
  comentario: "",
};

export default function TamizajeAgregarForm(props) {
  const classes = useStyles();
  const [beneficiario, setBeneficiario] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(e.target);
  };

  useEffect(() => {
    if (
      !Cookies.get("roles").includes("Administrador") &&
      !Cookies.get("roles").includes("Medico")
    ) {
      props.history.goBack();
    }
    if (props.editar) {
      setValues(props.tamizaje);
    } else {
      setValues({
        ...values,
        idBeneficiario: props.idBeneficiario,
      });

      http
        .get("/beneficiarios/" + props.idBeneficiario)
        .then((res) => {
          setBeneficiario(res.data[0]);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, []);

  const validateFront = () => {
    let val = {};
    val.presionArterial = values.presionArterial
      ? ""
      : "Este campo es requerido";
    val.peso = values.peso ? "" : "Este campo es requerido";
    val.circunferenciaCintura = values.circunferenciaCintura
      ? ""
      : "Este campo es requerido";
    val.circunferenciaCadera = values.circunferenciaCadera
      ? ""
      : "Este campo es requerido";
    val.glucosaCapilar = values.glucosaCapilar ? "" : "Este campo es requerido";
    val.talla = values.talla ? "" : "Este campo es requerido";
    val.comentario = values.comentario ? "" : "Este campo es requerido";
    setErrors({
      ...val,
    });
    return Object.values(val).every((x) => x === "");
  };

  const validateBack = (backResponse) => {
    setErrors({
      ...backResponse,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFront) {
      if (props.editar) {
        http
          .post(
            "/tamizaje/" +
              props.idBeneficiario +
              "/" +
              props.tamizaje.idTamizaje,
            values
          )
          .then((res) => {
            props.history.push(
              "/beneficiarios/" + values.idBeneficiario + "?agregarTamizaje=1"
            );
          })
          .catch((err) => {
            validateBack(err.response.data.errors);
          });
      } else {
        http
          .post("/tamizaje", values)
          .then((res) => {
            props.history.push(
              "/beneficiarios/" + values.idBeneficiario + "?agregarTamizaje=1"
            );
          })
          .catch((err) => {
            validateBack(err.response.data.errors);
          });
      }
    }
  };

  return (
    <center className={classes.root}>
      <Typography variant="h5">
        Tamizaje de{" "}
        {props.editar
          ? props.tamizaje.nombreBeneficiario
          : beneficiario.nombreBeneficiario}{" "}
      </Typography>

      <form>
        <Grid container spacing={3}>
          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="presionArterial"
              label="Presión Arterial"
              value={values.presionArterial}
              onChange={handleInputChange}
              error={typeof errors.presionArterial !== "undefined"}
              helperText={errors.presionArterial}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="circunferenciaCintura"
              label="Circunferencia en Cintura"
              value={values.circunferenciaCintura}
              onChange={handleInputChange}
              error={typeof errors.circunferenciaCintura !== "undefined"}
              helperText={errors.circunferenciaCintura}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="peso"
              label="Peso (Kg)"
              value={values.peso}
              onChange={handleInputChange}
              error={typeof errors.peso !== "undefined"}
              helperText={errors.peso}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="circunferenciaCadera"
              label="Circunferencia en Cadera"
              value={values.circunferenciaCadera}
              onChange={handleInputChange}
              error={typeof errors.circunferenciaCadera !== "undefined"}
              helperText={errors.circunferenciaCadera}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="glucosaCapilar"
              label="Glucosa Capilar"
              value={values.glucosaCapilar}
              onChange={handleInputChange}
              error={typeof errors.glucosaCapilar !== "undefined"}
              helperText={errors.glucosaCapilar}
            />
          </Grid>

          <Grid item sm={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="talla"
              label="Talla (m)"
              value={values.talla}
              onChange={handleInputChange}
              error={typeof errors.talla !== "undefined"}
              helperText={errors.talla}
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              name="comentario"
              label="Comentario"
              value={values.comentario}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item sm={12} style={{ textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleSubmit}
            >
              {props.editar ? "Editar" : "Registrar"} Tamizaje
            </Button>
          </Grid>
        </Grid>
      </form>
    </center>
  );
}
