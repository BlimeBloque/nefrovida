import { Grid, Paper, Typography } from '@material-ui/core';
import { tr } from 'date-fns/locale';
import React , { useState, useEffect, setState }from 'react'
import {Pie, Bar} from 'react-chartjs-2';
import http from "../../http-common"


const edadesInitialValues = {
    cuatroAños: 0,
    cincoAños:  0,
    seisAños: 0,
    sieteAños: 0,
    ochoAños: 0,
    nueveAños: 0,
    diezAños: 0,
    onceAños: 0,
    doceAños: 0,
    treceAños: 0,
    catorceAños: 0,
    quinceAños: 0,
    dieciseisAños: 0,
    diecisieteAños: 0,
    dieciochoAños: 0,

}
export default function Reportes() {

const [contSexo, setContSexo] = useState([]);
const [edades, setEdades] = useState([]);
const[pruebas, setPruebas] = useState([]);
const[tamizajes, setTamizajes] = useState([]);
const [edadesTable, setEdadesTable] = useState(edadesInitialValues);

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
 


    const llenarObjeto = () => {
        edades.forEach(edad => {
            if(edad === 4){
                edadesTable.cuatroAños = edadesTable.cuatroAños + 1;               
            }
            if(edad === 5){
                edadesTable.cincoAños = edadesTable.cincoAños + 1;
            }
            if(edad === 6){
                edadesTable.seisAños = edadesTable.seisAños + 1;
            }
            if(edad === 7){
                edadesTable.sieteAños = edadesTable.sieteAños + 1;
            }
            if(edad === 8){
                edadesTable.ochoAños = edadesTable.ochoAños + 1;
            }
            if(edad === 9){
                edadesTable.nueveAños = edadesTable.nueveAños + 1;
            }
            if(edad === 10){
                edadesTable.diezAños = edadesTable.diezAños + 1;
            }
            if(edad === 11){
                edadesTable.onceAños = edadesTable.onceAños + 1;
            }
            if(edad === 12){
                edadesTable.doceAños = edadesTable.doceAños + 1;
            }
            if(edad === 13){
                edadesTable.treceAños = edadesTable.treceAños + 1;
            }
            if(edad === 14){
                edadesTable.catorceAños = edadesTable.catorceAños + 1;
            }
            if(edad === 15){
                edadesTable.quinceAños = edadesTable.quinceAños + 1;
            }
            if(edad === 16){
                edadesTable.dieciseisAños = edadesTable.dieciseisAños + 1;
            }
            if(edad === 17){
                edadesTable.diecisieteAños = edadesTable.diecisieteAños + 1;
            }
            if(edad === 18){
                edadesTable.dieciochoAños = edadesTable.dieciochoAños + 1;
            }

            
        });
    }
    
    llenarObjeto();
    console.log(edades);   
   

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
            data: [edadesTable.cuatroAños, edadesTable.cincoAños, edadesTable.seisAños, edadesTable.seisAños, edadesTable.sieteAños, edadesTable.ochoAños, edadesTable.nueveAños, edadesTable.diezAños, edadesTable.onceAños, edadesTable.doceAños, edadesTable.treceAños, edadesTable.catorceAños, edadesTable.quinceAños, edadesTable.dieciseisAños, edadesTable.diecisieteAños, edadesTable.dieciochoAños]
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
                        options={{ maintainAspectRatio: false}}/>
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
                        options={{ maintainAspectRatio: false}}/>
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