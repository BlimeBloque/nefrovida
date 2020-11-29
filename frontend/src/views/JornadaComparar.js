import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
import { getAge } from "../components/utils";
import Cookies from 'js-cookie'

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

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const JornadaComparar = () => {
  const classes = useStyle();
  const [seleccionado, setSeleccionado] = useState([]);
  const [jornadas, setJornadas] = useState([]);
  const [retrieve, setRetrieve] = useState(true);
  const [searching, setSearching] = useState(true);
  const [selected, setSelected] = useState([]);
  const [infSocioDemografico, setInfSocioDemografico] = useState([]);
  const [infoobesidad, setInfoObesidad] = useState([]);
  const [infodiabetes, setInfoDiabetes] = useState([]);
  const [infohiper, setInfoHiper] = useState([]);

  useEffect(() => {
    if(!Cookies.get('cargado'))
    {
      Cookies.set('cargado', true)
      window.location.reload();
    }
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
        res.data.SocioDemografico.map(function (e) {
          e[0].map(function (i) {
            i.fecha = getAge(i.fecha);
          });
        });
        let obj;

        //? SocioDemografico
        {
          obj = [];
          obj.push({
            ...{ title: "Total de Beneficiarios" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                return e[0].length;
              }),
            },
          });
          obj.push({
            ...{ title: "Número de Hombres" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let sum = 0;
                e[0].map(function (i) {
                  if (i.sexo === "H") {
                    sum++;
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Número de Mujeres" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let sum = 0;
                e[0].map(function (i) {
                  if (i.sexo === "M") {
                    sum++;
                  }
                });
                return sum;
              }),
            },
          });

          obj.push({
            ...{ title: "Total de Seguimiento" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let sum = 0;
                e[0].map(function (i) {
                  if (i.seguimiento === 1) {
                    sum++;
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Número de Hombres de Seguimiento" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let sum = 0;
                e[0].map(function (i) {
                  if (i.seguimiento === 1 && i.sexo === "H") {
                    sum++;
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Número de Mujeres de Seguimiento" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let sum = 0;
                e[0].map(function (i) {
                  if (i.seguimiento === 1 && i.sexo === "M") {
                    sum++;
                  }
                });
                return sum;
              }),
            },
          });

          obj.push({
            ...{ title: "Porcentaje de Hombres" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let total = e[0].length;
                if (total === 0) {
                  return 0 + "%";
                }
                let sum = 0;
                e[0].map(function (i) {
                  if (i.sexo === "H") {
                    sum++;
                  }
                });
                return (
                  ((sum * 100) / total)
                    .toString()
                    .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "%"
                );
              }),
            },
          });
          obj.push({
            ...{ title: "Porcentaje de Mujeres" },
            ...{
              data: res.data.SocioDemografico.map(function (e) {
                let total = e[0].length;
                if (total === 0) {
                  return 0 + "%";
                }
                let sum = 0;
                e[0].map(function (i) {
                  if (i.sexo === "M") {
                    sum++;
                  }
                });
                return (
                  ((sum * 100) / total)
                    .toString()
                    .match(/^-?\d+(?:\.\d{0,2})?/)[0] + "%"
                );
              }),
            },
          });
          setInfSocioDemografico(obj);
        }

        //? Obesidad
        {
          obj = [];
          /*
          //* Valores de referencia
          //<18,5	      Peso insuficiente
          //18,5-24,9	  Normopeso
          //25-26,9	    Sobrepeso grado I
          //27-29,9	    Sobrepeso grado II (preobesidad)
          //30-34,9	    Obesidad de tipo I
          //35-39,9	    Obesidad de tipo II
          //40-49,9	    Obesidad de tipo III (mórbida)
          >50	        Obesidad de tipo IV (extrema)
        */
          obj.push({
            ...{ title: "Total Peso Insuficiente" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (imc < 18.5) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Peso Normal" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (18.5 <= imc && imc <= 24.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Sobrepeso grado I" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (25 <= imc && imc <= 26.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Sobrepeso grado II" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (27 <= imc && imc <= 29.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Obesidad Tipo I" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (30 <= imc && imc <= 34.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Obesidad Tipo II" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (35 <= imc && imc <= 39.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Obesidad Tipo III" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (40 <= imc && imc <= 49.9) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Obesidad Tipo IV" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let imc = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    imc = i[0].peso / i[0].talla;
                    if (50 <= imc) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          setInfoObesidad(obj);
        }

        //? Diabetes
        {
          obj = [];
          /*
          //* Valores de referencia
          //<140        Normal
          //140 - 199   prediabetes
          //>200        diabetes tipo 2
          */
          obj.push({
            ...{ title: "Total Normal" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    if (i[0].glucosaCapilar < 140) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Prediabetes" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    if (
                      140 <= i[0].glucosaCapilar &&
                      i[0].glucosaCapilar <= 199
                    ) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Diabetes Tipo 2" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                e.map(function (i) {
                  if (i.length != 0) {
                    if (200 <= i[0].glucosaCapilar) {
                      sum++;
                    }
                  }
                });
                return sum;
              }),
            },
          });
          setInfoDiabetes(obj);
        }

        //? Hipertension
        {
          obj = [];
          /*
          //* Valores de referencia
          >120 y >80          Normal
          120 - 129  y >80    Elevada
          130-139 o 80-89     Presion Arterial Alta Nivel 1
          >140  o >90         Presion Arterial Alta Nivel 2
          */
          obj.push({
            ...{ title: "Total Normal" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let valueRegex = /^([0-9]*)\/([0-9]*$)/gm;
                let sisdia;
                e.map(function (i) {
                  if (i.length != 0) {
                    if (valueRegex.test(i[0].glucosaCapilar)) {
                      sisdia = i[0].glucosaCapilar.toString().split("/");
                      if (
                        parseInt(sisdia[0]) < 120 &&
                        parseInt(sisdia[1]) < 80
                      ) {
                        sum++;
                      }
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Elevada" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let valueRegex = /^([0-9]*)\/([0-9]*$)/gm;
                let sisdia;
                let pass;
                e.map(function (i) {
                  if (i.length != 0) {
                    pass = valueRegex.test(i[0].presionArterial);
                    if (pass) {
                      sisdia = i[0].presionArterial.toString().split("/");
                      if (
                        120 <= parseInt(sisdia[0]) &&
                        parseInt(sisdia[0]) < 129 &&
                        parseInt(sisdia[1]) < 80
                      ) {
                        sum++;
                      }
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Presion Arterial Alta Nivel 1" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let valueRegex = /^([0-9]*)\/([0-9]*$)/gm;
                let sisdia;
                let pass;
                e.map(function (i) {
                  if (i.length != 0) {
                    pass = valueRegex.test(i[0].presionArterial);
                    if (pass) {
                      sisdia = i[0].presionArterial.toString().split("/");
                      if (
                        (130 <= parseInt(sisdia[0]) &&
                          parseInt(sisdia[0]) < 139) ||
                        (80 <= parseInt(sisdia[1]) && parseInt(sisdia[1]) < 89)
                      ) {
                        sum++;
                      }
                    }
                  }
                });
                return sum;
              }),
            },
          });
          obj.push({
            ...{ title: "Total Presion Arterial Alta Nivel 2" },
            ...{
              data: res.data.Tamizaje.map(function (e) {
                let sum = 0;
                let valueRegex = /^([0-9]*)\/([0-9]*$)/gm;
                let sisdia;
                let pass;
                e.map(function (i) {
                  if (i.length != 0) {
                    pass = valueRegex.test(i[0].presionArterial);
                    if (pass) {
                      sisdia = i[0].presionArterial.toString().split("/");
                      if (
                        140 <= parseInt(sisdia[0]) ||
                        90 <= parseInt(sisdia[1])
                      ) {
                        sum++;
                      }
                    }
                  }
                });
                return sum;
              }),
            },
          });
          setInfoHiper(obj);
        }

        setSearching(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function TableInfo(args) {
    let text = args.text;
    let info = args.info;
    let key = 0; //? Just to fix key warning

    return (
      <div>
        <h1>{text}</h1>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Parámetros</StyledTableCell>
                {selected.map((cell) => (
                  <StyledTableCell align="center" key={cell}>
                    {cell}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {info.map((row) => (
                <StyledTableRow key={row.title}>
                  <StyledTableCell component="th" scope="row">
                    {row.title}
                  </StyledTableCell>
                  {row.data.map((e) => (
                    <StyledTableCell align="center" key={++key}>
                      {e}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }

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
            <TableInfo
              text="Informacion Sociodemográfica"
              info={infSocioDemografico}
            />
            <TableInfo text="Obesidad" info={infoobesidad} />
            <TableInfo text="Diabetes" info={infodiabetes} />
            <TableInfo text="Hipertensión" info={infohiper} />
          </Paper>
        )}
      </Container>
    </div>
  );
};

export default JornadaComparar;
