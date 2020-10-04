import React from 'react'
import { withRouter } from "react-router-dom";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ArchiveIcon from '@material-ui/icons/Archive';
import NoteIcon from '@material-ui/icons/Note';

const useStyles = makeStyles({
    drawer: {
      width: "250px"
    }
  })
  

const Sidenav = props => {
    const { history } = props;
    const classes = useStyles();
    const itemsNav = [{
        texto: 'Beneficiarios',
        icono: <FolderSharedIcon />,
        onClick: () => history.push("/beneficiarios")
    },
    {
        texto: 'Jornadas',
        icono: <ScheduleIcon />,
        onClick: () => history.push("/jornadas")
    },
    {
        texto: 'Reportes',
        icono: <ArchiveIcon />,
        onClick: () => history.push("/reportes")
    }];
    return (
        <Drawer variant="permanent" className={classes.drawer}>
            <List>
            {itemsNav.map((item, index) => {
                const { texto, icono, onClick } = item;
                return(
                    <ListItem button key={texto} onClick={onClick}>
                    {<ListItemIcon>{icono}</ListItemIcon>}
                    <ListItemText primary={texto} />
                    </ListItem>
            )})}
            </List>
        </Drawer>
    )
}

export default withRouter(Sidenav);