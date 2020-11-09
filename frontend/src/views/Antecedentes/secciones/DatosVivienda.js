import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export default function DatosVivienda(props)
{
    const classes = props.classes;
    const values = props.values;
    const handleInputChange = props.handleInputChange;
    const errores = props.errores;
    const setErrores = props.setErrores;
    const [value, setValue] = React.useState();

    const handleCasaChange = (event) => {
        handleInputChange(event);
        setErrores({
            ...errores,
            'casa': false
        })
    }

    const handleServiciosBasicosChange = (event) => {
        Number.parseInt(event);
        handleInputChange(event);
        setErrores({
            ...errores,
            'serviciosBasicos': false
        })
    }
    
    return(
        <div className={props.className}>
            <div className={classes.flex}>
                <FormControl error={errores.casa} className={classes.xs}>
                    <FormLabel htmlFor="component-error">Vive en:</FormLabel>
                    <RadioGroup aria-label="casa" name="casa" value={values.casa} onChange={handleCasaChange} >
                        <FormControlLabel value="propia" control={<Radio />} label="Casa Propia" />
                        <FormControlLabel value="rentada" control={<Radio />} label="Rentada" />
                        <FormControlLabel value="prestada" control={<Radio />} label="Prestada" />
                    </RadioGroup>
                </FormControl>
            </div>
                <FormControl error={errores.serviciosBasicos} className={classes.xs}>
                    <FormLabel htmlFor="component-error">Servicios Básicos:</FormLabel>
                    <RadioGroup aria-label="serviciosBasicos" name="serviciosBasicos" value={values.serviciosBasicos} onChange={handleServiciosBasicosChange}>
                        <FormControlLabel value="1" control={<Radio />} label="Sí" />
                        <FormControlLabel value="0" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>

        </div>
    );
}