import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';
import React from 'react'

export default function Checkbox(props) {

    const {name, label,  onChange, value} = props;

    return (
        <FormControl>
            <FormControlLabel
            control={<MuiCheckbox
                name =  {name}
                color = "primary"
                checked={value}
                onChange={onChange}
                />}
                    label={label}
                />

          
        </FormControl>
    )
}
