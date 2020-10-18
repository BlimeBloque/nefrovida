import React, { useState, useEffect } from 'react'
import axios from 'axios';

const DetalleConsultaNutricion = (props) => {
    const [detalle, setDetalle] = useState([]);
    const idConsultaNutricion = props.match.params.idConsultaNutricion;

    useEffect ( () => {
        axios.get('http://localhost:8000/api/consultaNutricion/'+idConsultaNutricion)
            .then(res => { setDetalle(res.data[0])
                })
                    .catch((e) => {
                    console.log(e)
                });
    }, []);


    return(
        <div>
        {console.log(detalle)}
            Consulta de {detalle.nombreBeneficiario}
        </div>
    );

}

export default DetalleConsultaNutricion;