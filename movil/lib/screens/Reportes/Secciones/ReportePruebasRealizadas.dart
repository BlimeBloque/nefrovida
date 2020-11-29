import 'package:flutter/material.dart';
import 'package:movil/classes/PruebasRegistradas.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/components/HttpHelper.dart';

class ReportePruebasRealizadas extends StatefulWidget {
  @override
  _ReportePruebasRealizadasState createState() => _ReportePruebasRealizadasState();
}

class _ReportePruebasRealizadasState extends State<ReportePruebasRealizadas> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<PruebasRegistradas, String>> _seriesBarData;
  List<PruebasRegistradas> myData;

  _generateData(myData)
  {
    _seriesBarData = List<charts.Series<PruebasRegistradas, String>>();
    _seriesBarData.add(
      charts.Series(
        domainFn: (PruebasRegistradas prueba, _)=> prueba.label,//x axis value
        measureFn: (PruebasRegistradas prueba, _)=> prueba.numPruebas, //y axis value
        id: 'PruebasRealizadas',
        data: myData,
        labelAccessorFn: (PruebasRegistradas prueba, _)=> prueba.label,
        colorFn: (_, __) => charts.MaterialPalette.blue.shadeDefault,
      )
    );
  }

  @override
  Widget build(BuildContext context) {
    return _buildBody(context);
  }

  Widget _buildBody(context) {
    return  Padding(
        padding: EdgeInsets.all(8.0),
        child: FutureBuilder(
          future: reportesHelper.getPruebasRegistradas(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<PruebasRegistradas> pruebas = snapshot.data;
              if(pruebas == null)
              {
                return Center(child: CircularProgressIndicator());
              }
              else
              {
                print(pruebas);
                return _buildChart(context, pruebas);
              }
            }
            else
            {
              return Center(child: CircularProgressIndicator());
            }
          }
        ),
    );
  }

  Widget _buildChart(BuildContext context, List<PruebasRegistradas> pruebas)
  {
    myData = pruebas;
    _generateData(myData);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Pruebas Realizadas',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0, ),
            Expanded(
              child: charts.BarChart(
                _seriesBarData,
                animate: true,
                animationDuration: Duration(seconds: 1),
                behaviors: [
                  
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}