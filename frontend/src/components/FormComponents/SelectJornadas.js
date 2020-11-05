import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import React from 'react'

export default function SelectJornadas(props) {

    const {name, label, value, onChange, error=null, options} = props;
    return (
        <FormControl
        variant="outlined"
        {...(error && {error:true})}>
            <InputLabel>{label}</InputLabel>
            <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>
                <MenuItem value="">Ninguno</MenuItem>
                {
                    
                    options.map(
                    item => (<MenuItem key={item.idJornada} value={item.idJornada}>{item.nombre}</MenuItem>)
                    )
                }
            </MuiSelect>
            {error &&  <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
