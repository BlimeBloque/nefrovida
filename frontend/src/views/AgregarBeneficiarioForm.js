import {makeStyles} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { Grid } from 'semantic-ui-react';

import Controls from "../components/FormComponents/Controls";
import * as serviciosBeneficiarios from "./BeneficiariosServices/GetEscolaridades"

const genderItems = [
    {id:'hombre', title: 'Hombre'},
    {id:'mujer', title: 'Mujer'}
]
    


const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root' : {
            width: '40%',
            margin: theme.spacing(1)
        }
    }
}))

const initialFValues = {
    id: 0,
    nombre: '',
    edad: '',
    idEscolaridad: '',
    sexo: '',
    telefono: '',
    direccion: '',
    activo: true,
    fechaNacimiento: new Date()
}

export default function AgregarBeneficiarioForm() {

    const[values, setValues] = useState(initialFValues);
    const classes = useStyle();

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    const onSubmit = e => {

        e.preventDefault();
        const Nuevobeneficiario = {
            nombre: values.nombre,
            edad: values.edad,
            idEscolaridad: values.idEscolaridad,
            sexo: values.sexo, 
            telefono: values.telefono,
            direccion: values.direccion,
            activo: values.activo,
            fechaNacimiento: values.fechaNacimiento
        }

        try{

            

        } catch (e) {
            console.log(e);
        }

    }

    return (
        <form className={classes.root} autoComplete="off">
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Controls.Input 
                        name="nombre" 
                        label="Nombre Completo" 
                        value={values.nombre}
                        onChange = {handleInputChange}
                    />
                        <Controls.Input 
                        variant="outlined"
                        label="Edad"
                        name="edad"
                        value={values.edad}
                        onChange = {handleInputChange}
                        />
                        <Controls.Input 
                        variant="outlined"
                        label="Numero de Teléfono"
                        name="telefono"
                        value={values.telefono}
                        onChange = {handleInputChange}
                        />
                        <Controls.Input 
                        variant="outlined"
                        label="Dirección"
                        name="direccion"
                        value={values.direccion}
                        onChange = {handleInputChange}
                        />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup 
                        name = "sexo"
                        label="Sexo"
                        value={values.sexo}
                        items={genderItems}
                        onChange={handleInputChange}
                    />
                    <Controls.Select
                        name="idEscolaridad"
                        label="Escolaridad"
                        value={values.idEscolaridad}
                        onChange={handleInputChange}
                        options={serviciosBeneficiarios.getEscolaridadesCollection()}
                    />
                    <Controls.DatePicker 
                        name="fechaNacimiento"
                        label="Fecha de Nacimiento"
                        valie={values.fechaNacimiento}
                        onChange={handleInputChange}
                        />
                    <Controls.Checkbox 
                        name="activo"
                        label= "Beneficiario Activo"
                        valie={values.activo}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                        text="Submit"
                        variant="contained"
                        color="primaty"
                        size="large"
                        type="submit"
                        onClick={onSubmit}
                        
                         />
                    </div>

                </Grid>
            </Grid>
        </form>
    )
}
