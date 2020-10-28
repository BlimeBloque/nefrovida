import { makeStyles, Typography, IconButton, Tooltip, Card, CardContent, Paper, Table, TableBody, TableCell, 
    TableContainer, TableHead, TableRow} from '@material-ui/core';
import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

export default function Nota(props) {

    const detalle = props.detalle;
    console.log(detalle);

    const date = new Date(detalle.created_at);
    const fecha = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();

    return (
        <div>
            
        </div>
    )
}
