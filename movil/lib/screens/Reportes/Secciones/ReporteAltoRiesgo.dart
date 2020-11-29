import 'package:flutter/material.dart';
import 'package:movil/classes/AltoRiesgo.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/components/HttpHelper.dart';

class ReporteAltoRiesgo extends StatefulWidget {
  @override
  _ReporteAltoRiesgoState createState() => _ReporteAltoRiesgoState();
}

class _ReporteAltoRiesgoState extends State<ReporteAltoRiesgo> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<AltoRiesgo, String>> _seriesPieData;
  List<AltoRiesgo> myData;

  _generateData(myData)
  {
    _seriesPieData = List<charts.Series<AltoRiesgo, String>>();
    _seriesPieData.add(
      charts.Series(
        domainFn: (AltoRiesgo resultado, _)=> resultado.label,//x axis value
        measureFn: (AltoRiesgo resultado, _)=> resultado.numero, //y axis value
        id: 'AltoRiesgo',
        data: myData,
        labelAccessorFn: (AltoRiesgo resultado, _)=> resultado.label,
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
          future: reportesHelper.getAltoRiesgo(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<AltoRiesgo> res = snapshot.data;
              if(res == null)
              {
                return Center(child: CircularProgressIndicator());
              }
              else
              {
                print(res);
                return _buildChart(context, res);
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

  Widget _buildChart(BuildContext context, List<AltoRiesgo> res)
  {
    myData = res;
    _generateData(myData);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Consultas nutricias de alto riesgo',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0, ),
            Expanded(
              child: charts.PieChart(
                _seriesPieData,
                animate: true,
                animationDuration: Duration(seconds: 1),
                behaviors: [
                  new charts.DatumLegend(
                    position: charts.BehaviorPosition.inside,
                    horizontalFirst: false,
                    showMeasures: true,
                    legendDefaultMeasure: charts.LegendDefaultMeasure.firstValue,
                    
                    measureFormatter: (num value) {
                      return value == null ? '-' : '${value}';
                    }
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}