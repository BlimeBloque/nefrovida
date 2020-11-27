import React, { Component } from 'react'
import httpCommon from '../../http-common';
import http from "../http-common";


export  class GetEscolaridades extends Component {

    constructor(props){
        super(props);
        this.state = {
            escolaridades: [],
            isLoaded: false,
        }
    }

   componentDidMount(){

        http.get('/escolaridades')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                escolaridades: json,
            })
        });

    }


    render() {
        return (
           <div></div>
        )
    }
}


export  const getEscolaridadesCollection = () => ([
    { idEscolaridad: '1', nombreEscolaridad: 'Primaria'},
    { idEscolaridad: '2', nombreEscolaridad: 'Secundaria'},
    { idEscolaridad: '3', nombreEscolaridad: 'Preparatoria'}
])

