import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from "@material-ui/lab";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import FilterListIcon from '@material-ui/icons/FilterList';


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
    return order === 'desc'
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
    { id: 'nombreBeneficiario', numeric: false, disablePadding: true, label: 'Nombre Completo' },
    { id: 'edad', numeric: true, disablePadding: false, label: 'Edad' },
    { id: 'sexo', numeric: false, disablePadding: false, label: 'Sexo' },
    { id: 'seguimiento', numeric: false, disablePadding: false, label: 'De Seguimiento' },
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
                align='center'
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                >
                {headCell.label}
                {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1),
    },

    
    title: {
        flex: '1 1 100%',
    },
    }));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();

    return (
    <Toolbar>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        Tabla de Beneficiarios
        </Typography>
        <Tooltip title="Quitar Filtros">
            <IconButton onClick={props.sinFiltro}aria-label="filter list">
                <FilterListIcon />
            </IconButton>
        </Tooltip>
    </Toolbar>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function TablaBeneficiarios(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('');
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const sinFiltro = (event) => {
        props.sinFiltro();
        handleRequestSort(event, 'sin filtro');
    }

    let beneficiarios = props.sexo ? props.data.filter(x => x['sexo'].includes(props.sexo)) : props.data;
    
    beneficiarios = props.seguimiento != null ? beneficiarios.filter(x => x['seguimiento'] === props.seguimiento) : beneficiarios;
    
    beneficiarios = props.activo != null ? beneficiarios.filter(x => x['activo'] === props.activo) : beneficiarios;
    
    beneficiarios = props.edad ? beneficiarios.filter(x => x['edad'].toString().includes(props.edad)) : beneficiarios;

    beneficiarios = props.nombre ? beneficiarios.filter(x => x['nombreBeneficiario'].toLowerCase().includes(props.nombre.toLowerCase())) : beneficiarios;

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const setPage = (event, newPage) => {
            props.setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        props.setPage(0);
    };

    const getAge = (dateString) =>
    {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;
    }


    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
            <EnhancedTableToolbar sinFiltro={sinFiltro}/>
            <TableContainer>
            <Table
                className={classes.table}
                aria-labelledby="tableTitle"
                aria-label="enhanced table"
            >
                <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={beneficiarios.length}
                />
                <TableBody>
                {
                    beneficiarios.length === 0 && props.retrieve == 0 && (
                        <TableCell colSpan={5}>
                            <Alert severity="info">No se encontró ningún beneficiario.</Alert>
                        </TableCell>
                    )
                }
                {stableSort(beneficiarios, getComparator(order, orderBy))
                    .slice(props.page * rowsPerPage, props.page * rowsPerPage + rowsPerPage)
                    .map((beneficiario) => {

                    let edad = getAge(beneficiario.fechaNacimiento);
                    return (
                        <TableRow
                        hover
                        tabIndex={-1}
                        key={beneficiario.idBeneficiario}
                        >
                            {/*Modificar para acceder a beneficiario*/}
                            {/*Ya quedó :3*/}
                            <TableCell align="center" 
                            style={{cursor:'pointer'}} 
                            onClick={
                                () => props.url.push("/beneficiarios/" + beneficiario.idBeneficiario)
                                }>
                                {beneficiario.nombreBeneficiario}
                            </TableCell>


                            <TableCell align="center">{edad}</TableCell>
                            <TableCell align="center">{beneficiario.sexo}</TableCell>
                            <TableCell align="center">{beneficiario.seguimiento ? 'Si' : 'No'}</TableCell>
                        </TableRow>
                    );
                    })}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={beneficiarios.length}
            rowsPerPage={rowsPerPage}
            
            page={props.page}
            labelRowsPerPage="Registros por página"
            onChangePage={setPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
        </div>
    );
}