import React, {useState, useEffect} from 'react'
import {CssBaseline, makeStyles} from '@material-ui/core';
import { Grid } from 'semantic-ui-react';
import http from "../http-common";

import Controls from "../components/FormComponents/Controls";

const genderItems = [
    {id:'H', title: 'Hombre'},
    {id:'M', title: 'Mujer'}
]

const useStyle = makeStyles(theme => ({
    root:{
       '& .MuiFormControl-root' :{
           width: '90%',
           margin: theme.spacing(1),
       } 
    }, 
    form: {
            display: 'flex',
            justifyContent: 'space-evenly'
    }

}))

const initialFValues = {
    nombre: '',
    idEscolaridad: '',
    sexo: 'H',
    telefono: '',
    direccion: '',
    seguimiento: false,
    activo: true,
    fechaNacimiento: new Date(),
    idJornada: '',
}

export default function AgregarBeneficiarioForm(props) {

    const[values, setValues] = useState(initialFValues);
    const[errors, setErrors] = useState({});
    const classes = useStyle();
    const [escolaridadesCollection, setEscolaridades]  = useState([]);

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect ( () => {

        http.get('http://127.0.0.1:8000/api/escolaridades')
        .then(res => { setEscolaridades (res.data.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);
    
   values.idJornada = props.idJornada;

  console.log(values)


  const validate = () => {
      let temp = {}
      temp.nombre = values.nombre?"":"Este campo es requerido"
      temp.telefono = (values.telefono.length > 9 || values.telefono.length == 0 )?"":"Este campo debe tener al menos 10 digitos"
      temp.idEscolaridad = values.idEscolaridad.length!=0?"":"Este campo es requerido"
      setErrors({
          ...temp
      })

      return Object.values(temp).every(x => x == "")
  }

/*
    const printObject = e => {
        console.log(values)
    }
*/
    const onSubmit = e => {

        let day = values.fechaNacimiento.getDate();
        let month = values.fechaNacimiento.getUTCMonth() + 1;
        let year = values.fechaNacimiento.getUTCFullYear();
        console.log(day + "/" + month + "/" + year);

        e.preventDefault();

        if(validate()){

            if(values.seguimiento){
                values.seguimiento = 1
            } else {
                values.seguimiento = 0
            }
           
            try{
    
                let result =  fetch('http://localhost:8000/api/beneficiarios', {
                        method: 'POST',
                        headers: {
                            "Access-Control-Allow-Origin": "http://localhost:3000/",
                            "Access-Control-Allow-Credentials": "true",
                            'Accept': 'application/json',
                            'Content-type': 'application/json',
                        },
                        body: JSON.stringify({
                            nombreBeneficiario: values.nombre,
                            idEscolaridad: values.idEscolaridad,
                            sexo: values.sexo, 
                            telefono: values.telefono,
                            direccion: values.direccion,
                            seguimiento: values.seguimiento,
                            activo: values.activo,
                            fechaNacimiento: year + "-" + month + "-" + day,
                            idJornada: values.idJornada,
                        })
            });
            console.log(values)
            props.history.push("/jornadas/"+ props.idJornada +"?agregarBeneficiario=1");
    
            } catch (e) {
                console.log(e);
                props.history.push("/jornadas/"+ props.idJornada +"?agregarBeneficiario=0");
            }
        } else {
           window.alert("Todos los campos obligatorios deben ser llenados")
        }

 

    }
 
    return (
        <div className={classes.form}>
        <CssBaseline/>
        <form className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Controls.Input 
                        name="nombre" 
                        label="Nombre Completo *" 
                        value={values.nombre}
                        onChange = {handleInputChange}
                        error={errors.nombre}
                    />
                        <Controls.Input 
                        variant="outlined"
                        label="Numero de Teléfono"
                        name="telefono"
                        value={values.telefono}
                        onChange = {handleInputChange}
                        error={errors.telefono}
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
                        label="Sexo *"
                        value={values.sexo}
                        items={genderItems}
                        onChange={handleInputChange}
                    />
                    <Controls.Select
                        name="idEscolaridad"
                        label="Escolaridad *"
                        value={values.idEscolaridad}
                        onChange={handleInputChange}
                        options={escolaridadesCollection}
                        error={errors.idEscolaridad}
                    />
                    <Controls.DatePicker 
                        name="fechaNacimiento"
                        label="Fecha de Nacimiento *"
                        value={values.fechaNacimiento}
                        onChange={handleInputChange}
                        />
                    <Controls.Checkbox 
                        name="seguimiento"
                        label= "De Seguimiento"
                        value={values.seguimiento}
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button
                        text="Submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                        onClick={onSubmit}
                        
                         />
                    </div>

                </Grid>
            </Grid>
        </form>
        </div>
    )
}
