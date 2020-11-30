import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  makeStyles,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import http from "../http-common";

const useStyle = makeStyles((theme) => ({
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

const initialFValues = {
  nombre: "",
  fecha: new Date(),
  localidad: "",
  municipio: "",
  idEstado: "",
};

export default function JornadasAgregarForm(props) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState([]);
  const classes = useStyle();
  const [EstadosCollection, setEstados] = useState([]);
  const [wait, setWait] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  useEffect(() => {
    if (props.editar) {
      var date = new Date(Date.parse(props.jornada.fecha));
      date.setDate(date.getDate() + 1);
      props.jornada.fecha = date;
      setValues(props.jornada);
    }
    setEstados(props.estados);
    setWait(true);
  }, []);

  const validateFront = () => {
    let val = {};
    val.nombre = values.nombre ? "" : "Este campo es requerido";
    val.localidad = values.localidad ? "" : "Este campo es requerido";
    val.municipio = values.municipio ? "" : "Este campo es requerido";
    val.idEstado = values.idEstado ? "" : "Este campo es requerido";
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

  const handleDateAtOnChange = (event) => {
    setValues({ ...values, fecha: event });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFront()) {
      let day = values.fecha.getDate();
      let month = values.fecha.getMonth() + 1;
      let year = values.fecha.getFullYear();
      let date = year + "-" + month + "-" + day;
      values.fecha = date;
      //setValues({ ...values, fecha: date });
      if (props.editar) {
        http
          .post("/jornadas/" + props.idJornada, values)
          .then((res) => {
            props.history.push("/jornadas");
          })
          .catch((err) => {
            validateBack(err.response.data.errors);
          });
      } else {
        http
          .post("/jornadas", values)
          .then((res) => {
            props.history.push("/jornadas");
          })
          .catch((err) => {
            validateBack(err.response.data.errors);
          });
      }
    }
  };

  return (
    <div className={classes.form}>
      <CssBaseline />
      {wait && (
        <form className={classes.root}>
          <Grid container spacing={3}>
            <Grid item sm={12} md={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="nombre"
                label="Nombre"
                value={values.nombre}
                onChange={handleInputChange}
                error={
                  typeof errors.nombre !== "undefined" && errors.nombre !== ""
                }
                helperText={errors.nombre}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
                  margin="normal"
                  name="fecha"
                  label="Fecha"
                  value={values.fecha}
                  onChange={handleDateAtOnChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item sm={12} md={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="localidad"
                label="Localidad"
                value={values.localidad}
                onChange={handleInputChange}
                error={
                  typeof errors.localidad !== "undefined" &&
                  errors.localidad !== ""
                }
                helperText={errors.localidad}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <TextField
                id="outlined-basic"
                variant="outlined"
                name="municipio"
                label="Municipio"
                value={values.municipio}
                onChange={handleInputChange}
                error={
                  typeof errors.municipio !== "undefined" &&
                  errors.municipio !== ""
                }
                helperText={errors.municipio}
              />
            </Grid>

            <Grid item sm={12} md={6}>
              <FormControl style={{ minWidth: 120 }}>
                <InputLabel id="LEstado">Estado</InputLabel>
                <Select
                  labelId="LEstado"
                  width="50%"
                  variant="outlined"
                  name="idEstado"
                  label="Estado"
                  value={values.idEstado}
                  onChange={handleInputChange}
                  error={
                    typeof errors.municipio !== "undefined" &&
                    errors.idEstado !== ""
                  }
                >
                  {EstadosCollection.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleSubmit}
              >
                {props.editar ? "Editar" : "Agregar"} Jornada
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
}
