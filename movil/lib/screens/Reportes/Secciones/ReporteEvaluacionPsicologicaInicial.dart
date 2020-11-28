import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/classes/Platicas.dart';
import 'package:movil/components/HttpHelper.dart';

class ReporteEvaluacionPsicologiaInicial extends StatefulWidget {
  @override
  _ReporteEvaluacionPsicologiaInicialState createState() => _ReporteEvaluacionPsicologiaInicialState();
}

class _ReporteEvaluacionPsicologiaInicialState extends State<ReporteEvaluacionPsicologiaInicial> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<Platicas, String>> _seriesBarData;
  List<Platicas> si, no;

  _generateData(si, no)
  {
    _seriesBarData = List<charts.Series<Platicas, String>>();
    _seriesBarData.add(
      charts.Series(
        domainFn: (Platicas platica, _)=> platica.label,//x axis value
        measureFn: (Platicas platica, _)=> platica.numero, //y axis value
        id: 'Si',
        data: si,
        labelAccessorFn: (Platicas prueba, _)=> prueba.label,
      )
    );
    _seriesBarData.add(
      charts.Series(
        domainFn: (Platicas platica, _)=> platica.label,//x axis value
        measureFn: (Platicas platica, _)=> platica.numero, //y axis value
        id: 'No',
        data: no,
        labelAccessorFn: (Platicas prueba, _)=> prueba.label,
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
          future: reportesHelper.getPsicologiaInicial(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<List<Platicas>> resultados = snapshot.data;
              if(resultados == null)
              {
                return Center(child: CircularProgressIndicator());
              }
              else
              {
                print(resultados);
                return _buildChart(context, resultados);
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

  Widget _buildChart(BuildContext context, List<List<Platicas>> resultados)
  {
    si = resultados[0];
    no = resultados[1];
    _generateData(si, no);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Respuestas cuestionario inicial',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0, ),
            Expanded(
              child: charts.BarChart(
                _seriesBarData,
                barGroupingType: charts.BarGroupingType.grouped,
                animate: true,
                animationDuration: Duration(seconds: 2),
                behaviors: [
                  new charts.SeriesLegend(),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}