import 'package:flutter/material.dart';
import 'package:movil/classes/PruebasRegistradas.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/classes/Sociodemografico.dart';
import 'package:movil/components/HttpHelper.dart';

class ReporteSociodemografico extends StatefulWidget {
  @override
  _ReporteSociodemograficoState createState() => _ReporteSociodemograficoState();
}

class _ReporteSociodemograficoState extends State<ReporteSociodemografico> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<Sociodemografico, String>> _seriesPieData;
  List<Sociodemografico> myData;

  _generateData(myData)
  {
    _seriesPieData = List<charts.Series<Sociodemografico, String>>();
    _seriesPieData.add(
      charts.Series(
        domainFn: (Sociodemografico resultado, _)=> resultado.sexo,//x axis value
        measureFn: (Sociodemografico resultado, _)=> resultado.numero, //y axis value
        id: 'Sociodemografico',
        data: myData,
        labelAccessorFn: (Sociodemografico resultado, _)=> resultado.sexo,
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
          future: reportesHelper.getSociodemografico(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<Sociodemografico> res = snapshot.data;
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

  Widget _buildChart(BuildContext context, List<Sociodemografico> res)
  {
    myData = res;
    _generateData(myData);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Reporte Sociodemográfico',
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