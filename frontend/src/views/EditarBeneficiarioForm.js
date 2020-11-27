import {CssBaseline, InputAdornment, makeStyles} from '@material-ui/core';
import React, {useState, useEffect} from 'react'
import { Grid } from 'semantic-ui-react';
import http from "../http-common";
import Cookies from 'js-cookie';
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
    nombreBeneficiario: '',
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
    const [jornadasCollection, setJornadas]  = useState([]);
    


    useEffect ( () => {

        http.get('/beneficiarios/' + props.idBenef)
        .then((res) => {
            let temp = res.data[0].fechaNacimiento.split("-");
            res.data[0].fechaNacimiento = new Date(temp[0], temp[1]-1, temp[2]);
            console.log(res.data[0]);
            setValues(res.data[0]);
          })
        .catch((e) => {
            console.log(e)
        })
   }, []);

   console.log(values)

    const handleInputChange= e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value 
        })
    }

    useEffect( () => {
        if(!Cookies.get("roles").includes("Administrador") && !Cookies.get("roles").includes("Social"))
        {
            props.history.goBack();
        }
    }, []);

    useEffect ( () => {

        http.get('/escolaridades')
        .then(res => { setEscolaridades (res.data.data)
    })
        .catch((e) => {
            console.log(e)
        })
   }, []);

   useEffect ( () => {

    http.get('/jornadas')
    .then(res => { setJornadas (res.data)
})
    .catch((e) => {
        console.log(e)
    })
}, []);
    
    
  console.log(jornadasCollection)


  const validate = () => {
      let temp = {}
      temp.nombre = values.nombreBeneficiario?"":"Este campo es requerido"
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


        e.preventDefault();

        if(validate()){

            if(values.seguimiento){
                values.seguimiento = 1
            } else {
                values.seguimiento = 0
            }
            let valores = JSON.stringify({
                nombreBeneficiario: values.nombreBeneficiario,
                idEscolaridad: values.idEscolaridad,
                sexo: values.sexo, 
                telefono: values.telefono,
                direccion: values.direccion,
                seguimiento:  values.seguimiento,
                activo: values.activo,
                fechaNacimiento: year + "-" + month + "-" + day,
                idJornada: values.idJornada,
              });
            http.put('/beneficiarios/'+values.idBeneficiario, valores)
            .then(res => {
                props.history.push("/beneficiarios/"+ props.idBenef +"?editarBeneficiario=1");

            })
            .catch(err => {
                console.log(err)
                props.history.push("/beneficiarios/" + props.idBenef + "?editarBeneficiario=0");

            });
        } else {
        }

 

    }
 
    return (
        <div className={classes.form}>
        <CssBaseline/>
        <form className={classes.root}>
            <Grid container spacing={3} >
                <Grid item xs={6}>
                    <Controls.Input 
                        name="nombreBeneficiario" 
                        label="Nombre Completo *" 
                        value={values.nombreBeneficiario}
                        onChange = {handleInputChange}
                        error={errors.nombre}
                    />
                    <Controls.SelectJornadas
                        name="idJornada"
                        label="Jornada *"
                        value={values.idJornada}
                        onChange={handleInputChange}
                        options={jornadasCollection}
                        error={errors.idEscolaridad}
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