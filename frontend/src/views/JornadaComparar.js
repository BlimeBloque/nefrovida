import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidenav from "../components/Nav/Sidenav";
import MultiSelect from "react-multi-select-component";
import {
  Container,
  Paper,
  Button,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import http from "../http-common";

const useStyle = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  container: {
    display: "flex",
    marginTop: "40px",
  },
}));

const JornadaComparar = () => {
  const classes = useStyle();
  const [seleccionado, setSeleccionado] = useState([]);
  const [jornadas, setJornadas] = useState([]);
  const [retrieve, setRetrieve] = useState(true);
  const [searching, setSearching] = useState(true);
  const [selected, setSelected] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    http
      .get("/jornada/comparar")
      .then((res) => {
        setJornadas(res.data);
        setRetrieve(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const comparar = () => {
    setSearching(true);
    setSelected(
      seleccionado
        .sort((a, b) => (a.value > b.value ? 1 : -1))
        .map(function (e) {
          return e.label;
        })
    );

    let ids = "";
    for (let i = 0; i < 5; i++) {
      if (i < seleccionado.length) {
        ids += seleccionado[i].value;
      } else {
        ids += "-1";
      }
      if (i != 4) {
        ids += "/";
      }
    }
    http
      .get("/comparar/" + ids)
      .then((res) => {
        console.log(res.data);
        console.log("comparar -> res.data", res.data);
        let obj = [];
        obj.push({
          ...{ title: "Fecha" },
          ...{
            data: res.data.Fecha.map(function (e) {
              return e.fecha;
            }),
          },
        });

        obj.push({
          ...{ title: "Localidad" },
          ...{
            data: res.data.Localidad.map(function (e) {
              return e.localidad;
            }),
          },
        });

        setInfo(obj);
        setSearching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className={classes.container}>
      <Sidenav titulo="Comparar Jornadas" />
      <Container>
        <Paper className={classes.pageContent}>
          <MultiSelect
            options={jornadas}
            value={seleccionado}
            onChange={setSeleccionado}
            labelledBy={"Seleccionar"}
            isLoading={retrieve}
            hasSelectAll={false}
            overrideStrings={{
              selectSomeItems: "Seleccionar hasta cinco jornadas.",
              search: "Buscar Jornada",
            }}
          />
          <Tooltip
            title={
              seleccionado.length < 2
                ? "Se debe seleccionar al menos dos jornadas."
                : seleccionado.length > 5
                ? "Solo se pueden seleccionar hasta cinco jornadas."
                : ""
            }
          >
            <span>
              <Button
                variant="contained"
                color="primary"
                disabled={seleccionado.length < 2 || seleccionado.length > 5}
                onClick={() => {
                  comparar();
                }}
              >
                Comparar Jornadas
              </Button>
            </span>
          </Tooltip>
        </Paper>
        {!searching && (
          <Paper className={classes.pageContent}>
            <TableContainer component={Paper}>
              <Table className={classes.table} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    {selected.map((cell) => (
                      <TableCell align="center">{cell}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map(
                    (row) => (
                      console.log(row),
                      (
                        <TableRow key={row.title}>
                          <TableCell component="th" scope="row">
                            {row.title}
                          </TableCell>
                          {row.data.map((e) => (
                            <TableCell align="center">{e}</TableCell>
                          ))}
                        </TableRow>
                      )
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default JornadaComparar;
