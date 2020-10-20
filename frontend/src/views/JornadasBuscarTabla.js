import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import EditIcon from "@material-ui/icons/Edit";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "nombre",
    numeric: false,
    disablePadding: true,
    label: "Nombre",
  },
  { id: "fecha", numeric: false, disablePadding: false, label: "Fecha" },
  {
    id: "localidad",
    numeric: false,
    disablePadding: false,
    label: "Localidad",
  },
  {
    id: "municipio",
    numeric: false,
    disablePadding: false,
    label: "Municipio",
  },
  {
    id: "nombreEstado",
    numeric: false,
    disablePadding: false,
    label: "Estado",
  },
  { id: "opciones", numeric: false, disablePadding: false, label: "Opciones" },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },

  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Tabla de Jornadas
      </Typography>
    </Toolbar>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function JornadasBuscarTabla(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log(props);

  let jornadas = props.estado
    ? props.data.filter((x) => x["nombreEstado"].includes(props.estado))
    : props.data;

  jornadas = props.nombre
    ? jornadas.filter((x) =>
        x["nombre"].toLowerCase().includes(props.nombre.toLowerCase())
      )
    : jornadas;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const setPage = (event, newPage) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    props.setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={jornadas.length}
            />
            <TableBody>
              {stableSort(jornadas, getComparator(order, orderBy))
                .slice(
                  props.page * rowsPerPage,
                  props.page * rowsPerPage + rowsPerPage
                )
                .map((jornada) => {
                  return (
                    <TableRow hover tabIndex={-1} key={jornada.idJornada}>
                      {/*Modificar para acceder a jornada*/}
                      {/*Ya quedó :3*/}
                      <TableCell
                        align="center"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          props.url.push("/jornadas/" + jornada.idJornada)
                        }
                      >
                        {jornada.nombre}
                      </TableCell>

                      <TableCell align="center">{jornada.fecha}</TableCell>
                      <TableCell align="center">{jornada.localidad}</TableCell>
                      <TableCell align="center">{jornada.municipio}</TableCell>
                      <TableCell align="center">
                        {jornada.nombreEstado}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Editar" arrow>
                          <IconButton
                            color="primary"
                            aria-label="edit"
                            onClick={() =>
                              props.url.push(
                                "/jornadas/editar/" + jornada.idJornada
                              )
                            }
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={jornadas.length}
          rowsPerPage={rowsPerPage}
          page={props.page}
          labelRowsPerPage="Jornadas por página"
          onChangePage={setPage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
