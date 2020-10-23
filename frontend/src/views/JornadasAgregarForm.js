import React, { useState, useEffect } from "react";
import { CssBaseline, makeStyles } from "@material-ui/core";
import axios from "axios";

import Controls from "../components/FormComponents/Controls";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "47%",
      margin: theme.spacing(1),
    },
  },
  form: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const initialFValues = {
  nombre: "",
  fecha: new Date(),
  localidad: "",
  municipio: "",
  idEstado: "",
};

const ErrorDValues = {
  nombre: "",
  fecha: new Date(),
  localidad: "",
  municipio: "",
  idEstado: "",
};

export default function JornadasAgregarForm() {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState(ErrorDValues);
  const classes = useStyle();
  const [EstadosCollection, setEstados] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(e.target);
    console.log(values);
  };

  const validateFront = () => {
    let val = {};
    val.nombre = values.nombre ? "" : "Este campo es requerido";
    val.localidad = values.localidad ? "" : "Este campo es requerido";
    val.municipio = values.municipio ? "" : "Este campo es requerido";
    val.idEstado =
      values.idEstado.length !== 0 ? "" : "Este campo es requerido";
    setErrors({
      ...val,
    });

    return Object.values(val).every((x) => x === "");
  };

  const validateBack = (backResponse) => {
    if (typeof backResponse === "undefined") {
      window.location.replace("http://localhost:3000/jornadas");
    } else {
      let val = {};
      val.nombre =
        typeof backResponse.nombre === "undefined"
          ? ""
          : "Este campo es requerido";
      val.localidad =
        typeof backResponse.localidad === "undefined"
          ? ""
          : "Este campo es requerido";
      val.municipio =
        typeof backResponse.municipio === "undefined"
          ? ""
          : "Este campo es requerido";
      val.idEstado =
        typeof backResponse.idEstado === "undefined"
          ? ""
          : "Este campo es requerido";

      setErrors({
        ...val,
      });
    }
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/estados")
      .then((res) => {
        setEstados(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const onSubmit = (e) => {
    console.log(errors);
    e.preventDefault();
    //? Front validation
    if (validateFront()) {
      let day = values.fecha.getUTCDay();
      let month = values.fecha.getUTCMonth() + 1;
      let year = values.fecha.getUTCFullYear();
      fetch("http://localhost:8000/api/jornadas", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000/",
          "Access-Control-Allow-Credentials": "true",
          Accept: "application/json",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nombre: values.nombre,
          fecha: year + "/" + month + "/" + day,
          localidad: values.localidad,
          municipio: values.municipio,
          idEstado: values.idEstado,
        }),
      })
        .then((response) => response.json())
        .then((data) => validateBack(data.errors));
    }
  };
  return (
    <div className={classes.form}>
      <CssBaseline />
      <form className={classes.root}>
        <Controls.Input
          name="nombre"
          label="Nombre"
          value={values.nombre}
          onChange={handleInputChange}
          error={errors.nombre}
        />
        <Controls.DatePicker
          name="fecha"
          label="Fecha"
          value={values.fecha}
          onChange={handleInputChange}
        />
        <Controls.Input
          name="localidad"
          label="Localidad"
          value={values.localidad}
          onChange={handleInputChange}
          error={errors.localidad}
        />
        <Controls.Input
          name="municipio"
          label="Municipio"
          value={values.municipio}
          onChange={handleInputChange}
          error={errors.municipio}
        />
        <Controls.Select
          name="idEstado"
          label="Estado"
          value={values.idEstado}
          onChange={handleInputChange}
          options={EstadosCollection}
          error={errors.idEstado}
        />
        <Controls.Button
          text="Submit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}
