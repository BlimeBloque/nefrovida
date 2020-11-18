import { Grid, Paper, Typography } from '@material-ui/core';
import { tr } from 'date-fns/locale';
import React , { useState, useEffect, setState }from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import http from "../../http-common"


export default function Reportes() {

const [contSexo, setContSexo] = useState([]);
const [edades, setEdades] = useState([]);
const[pruebas, setPruebas] = useState([]);
const[tamizajes, setTamizajes] = useState([]);

var llenado = false;


useEffect ( () => {

    http.get('reportes/getSexoTotal')
    .then(res => { setContSexo (res.data)
})
    .catch((e) => {
        console.log(e)
    })
    
    http.get('reportes/getEdadesTotal')
    .then(res => { setEdades (res.data);
})
    .catch((e) => {
        console.log(e)
    })

    http.get('reportes/getPruebas')
    .then(res => { setPruebas (res.data) 
})
    .catch((e) => {
        console.log(e)
    })

    http.get('reportes/getTamizajes')
    .then(res => { setTamizajes (res.data) 
})
    .catch((e) => {
        console.log(e)
    })

}, []);

    const dataSexo = {
        labels: [
            'Hombres',
            'Mujeres',
        ],
        datasets: [{
            data: [contSexo[0], contSexo[1]],
            backgroundColor: [
            '#63707A',
            '#7DCFDF',
            ],
            hoverBackgroundColor: [
            '#63707A',
            '#7DCFDF',
            ]
        }]
    }

    const dataTamizadas = {
        labels: [
            'Personas con muestra',
            'Personas sin toma muestra',
        ],
        datasets: [{
            data: [contSexo[0], contSexo[1]],
            backgroundColor: [
            '#63707A',
            '#7DCFDF',
            ],
            hoverBackgroundColor: [
            '#63707A',
            '#7DCFDF',
            ]
        }]
    }
    
    console.log(edades);   

    const counts = [];
    edades.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
    console.log(counts[10]);  
   

    const dataEdedes = {
        labels: ['4 años', '5 años', '6 años', '7 años', '8 años', '9 años', '10 años', '11 años', '12 años', '13 años', '14 años', '15 años', '16 años', '17 años', '18 años'],
        datasets: [
          {
            label: 'Beneficiarios por edad',
            backgroundColor: '#7DCFDF',
            borderColor: '#63707A',
            borderWidth: 1,
            hoverBackgroundColor: '#63707A',
            hoverBorderColor: '#7DCFDF',
            data: [counts[4],counts[5],counts[6],counts[7],counts[8],counts[9],counts[10],counts[11],counts[12],counts[13],counts[14],counts[15],counts[16],counts[17],counts[18]],
          }
        ]
      }

      const dataPruebas = {
        labels: ['EGO', 'M/C', 'QS3', 'DEP'],
        datasets: [
          {
            label: 'Número total de pruebas registradas',
            backgroundColor: '#7DCFDF',
            borderColor: '#63707A',
            borderWidth: 1,
            hoverBackgroundColor: '#63707A',
            hoverBorderColor: '#7DCFDF',
            data: [pruebas[0], pruebas[2], pruebas[1], pruebas[3]]
          }
        ]
      }

      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0
            }    
          }]
        }
      };

    return (
      <div>
          <Typography  variant="h2"> Reporte General</Typography>
          <br/><br/><br/>
          <Paper>
          <h2>Reporte Sociodemográfico</h2>
            <Grid container spacing={3} justify='space-between'>
                <Grid item xs={3}>
                   
                    <br/>
                    <Pie 
                        data={dataSexo} 
                        width={500}
                        height={200}
                        options={{ maintainAspectRatio: false}}/>
                </Grid>

                <Grid item xs={8}>
                    <br/>
                    <Bar 
                        data={dataEdedes} 
                        width={800}
                        height={100}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>
          <Paper>
          <h2>Pruebas Realizadas</h2>
            <Grid container spacing={3} justify='space-between'>
                <Grid item xs={12}>
                    <br/>
                    <Bar 
                        data={dataPruebas} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>
          <Paper>
          <h2>Personas Tamizadas</h2>
            <Grid container spacing={3} justify='space-between'>
                <Grid item xs={12}>
                    <br/>
                    <Pie 
                        data={dataTamizadas} 
                        width={500}
                        height={200}
                        options={{ maintainAspectRatio: false}}/>
                </Grid>
            </Grid>
          </Paper>

        
      </div>
    );

}