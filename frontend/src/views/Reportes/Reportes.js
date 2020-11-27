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
const[IMC, setIMC] = useState([]);
const[IMCSexo, setIMCSexo] = useState([]);
const[respuestasEvaluaciones, setrespuestasEvaluaciones] = useState([]);



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

    http.get('reportes/getCountBeneficiariosConPruebas')
    .then(res => { setTamizajes (res.data) 
})
    .catch((e) => {
        console.log(e)
    })

    http.get('reportes/getCountIMC')
    .then(res => { setIMC (res.data) 
})
    .catch((e) => {
        console.log(e)
    })

    http.get('reportes/getCountIMCPorSexo')
    .then(res => { setIMCSexo (res.data) 
})
    .catch((e) => {
        console.log(e)
    })

    http.get('reportes/getCountEvaluaciones')
    .then(res => { setrespuestasEvaluaciones (res.data) 
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

    const dataAltoRiesgo = {
      labels: [
          'Hombres en alto riesgo',
          'Mujeres en alto riesgo',
      ],
      datasets: [{
          data: [IMCSexo[8], IMCSexo[9]],
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
            data: [tamizajes[0] - tamizajes[1], tamizajes[1]],
            backgroundColor: [
            '#7DCFDF',
            '#63707A',
            ],
            hoverBackgroundColor: [
            '#7DCFDF',
            '#63707A',
            ]
        }]
    }
    
    console.log(respuestasEvaluaciones);   

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

      const dataIMC = {
        labels: ['Bajo Peso', 'Normal', 'Sobrepeso', 'Obesidad'],
        datasets: [
          {
            label: 'Porcentaje',
            backgroundColor: '#7DCFDF',
            borderColor: '#63707A',
            borderWidth: 1,
            hoverBackgroundColor: '#63707A',
            hoverBorderColor: '#7DCFDF',
            data: [IMC[0], IMC[1], IMC[2], IMC[3]]
          }
        ]
      }

      const dataIMCSexo = {
        labels: ['Bajo Peso', 'Normal', 'Sobrepeso', 'Obesidad'],
        datasets: [
          {
            label: '% Hombres',
            data: [IMCSexo[0], IMCSexo[1], IMCSexo[2], IMCSexo[3]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: '% Mujeres',
            data: [IMCSexo[4], IMCSexo[5], IMCSexo[6], IMCSexo[7]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaMedicaInicio = {
        labels: ['Pregunta 1', 'Pregunta 3', 'Pregunta 3'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[0], respuestasEvaluaciones[2], respuestasEvaluaciones[4]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[1], respuestasEvaluaciones[3], respuestasEvaluaciones[5]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaMedicaFin = {
        labels: ['Pregunta 1', 'Pregunta 2', 'Pregunta 3'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[18], respuestasEvaluaciones[20], respuestasEvaluaciones[22]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[19], respuestasEvaluaciones[21], respuestasEvaluaciones[23]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaNutriciaInicio = {
        labels: ['Pregunta 4', 'Pregunta 5', 'Pregunta 6'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[6], respuestasEvaluaciones[8], respuestasEvaluaciones[10]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[7], respuestasEvaluaciones[9], respuestasEvaluaciones[11]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaNutriciaFin = {
        labels: ['Pregunta 4', 'Pregunta 5', 'Pregunta 6'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[24], respuestasEvaluaciones[26], respuestasEvaluaciones[28]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[25], respuestasEvaluaciones[27], respuestasEvaluaciones[29]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaPsicoInicio = {
        labels: ['Pregunta 7', 'Pregunta 8', 'Pregunta 9'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[12], respuestasEvaluaciones[14], respuestasEvaluaciones[16]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[13], respuestasEvaluaciones[15], respuestasEvaluaciones[17]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const dataPlaticaPsicoFin = {
        labels: ['Pregunta 7', 'Pregunta 8', 'Pregunta 9'],
        datasets: [
          {
            label: 'Contestó Si',
            data: [respuestasEvaluaciones[30], respuestasEvaluaciones[32], respuestasEvaluaciones[34]],
            backgroundColor: '#7DCFDF',
            hoverBackgroundColor: '#63707A',
          },
          {
            label: 'Contestó No',
            data: [respuestasEvaluaciones[31], respuestasEvaluaciones[33], respuestasEvaluaciones[35]],
            backgroundColor: '#63707A',
            hoverBackgroundColor: '#7DCFDF',
          },
        ],
      }

      const options = {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
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
          <br/>
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
          <br/>
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
          <br/>
          <Paper>
          <h2>Incide de masa corporal general/ IMC por sexo</h2>
            <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={5}>
                    <br/>
                    <Bar 
                        data={dataIMC} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>

                <Grid item xs={5}>
                    <br/>
                    <Bar 
                        data={dataIMCSexo} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>
          <br/>
          <Paper>
          <h2>Consultas nutricias de alto riesgo</h2>
            <Grid container spacing={3} justify='space-between'>
                <Grid item xs={12}>
                    <br/>
                    <Pie 
                        data={dataAltoRiesgo} 
                        width={500}
                        height={200}
                        options={{ maintainAspectRatio: false}}/>
                </Grid>
            </Grid>
          </Paper>
          <br/>
          <Paper>
          <h2>Reporte de pláticas (Seccion Médica)</h2>
            <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario inicial
                    <br/>
                    <Bar 
                        data={dataPlaticaMedicaInicio} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>

                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario Final
                    <br/>
                    <Bar 
                        data={dataPlaticaMedicaFin} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>
          <br/>
          <Paper>
          <h2>Reporte de pláticas (Seccion Nutricia)</h2>
            <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario inicial
                    <br/>
                    <Bar 
                        data={dataPlaticaNutriciaInicio} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>

                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario Final
                    <br/>
                    <Bar 
                        data={dataPlaticaNutriciaFin} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>
          <br/>
          <Paper>
          <h2>Reporte de pláticas (Seccion Psicología)</h2>
            <Grid container spacing={1} justify='space-evenly'>
                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario inicial
                    <br/>
                    <Bar 
                        data={dataPlaticaPsicoInicio} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>

                <Grid item xs={5}>
                    <br/>
                    Respuestas cuestionario Final
                    <br/>
                    <Bar 
                        data={dataPlaticaPsicoFin} 
                        width={500}
                        height={200}
                        options={options}/>
                </Grid>
            </Grid>
          </Paper>

        
      </div>
    );

}