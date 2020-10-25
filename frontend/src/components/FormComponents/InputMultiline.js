import React from 'react'
import {TextField } from '@material-ui/core';


export default function InputMultiline(props) {

    const {name, label, value, error=null, onChange} = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange = {onChange}
            multiline
            rows={10}
            {...(error && {error:true, helperText:error})}
         />
    )
}
