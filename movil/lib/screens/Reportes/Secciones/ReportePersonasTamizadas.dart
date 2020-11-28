import 'package:flutter/material.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/classes/Tamizados.dart';
import 'package:movil/components/HttpHelper.dart';

class ReportePersonasTamizadas extends StatefulWidget {
  @override
  _ReportePersonasTamizadasState createState() => _ReportePersonasTamizadasState();
}

class _ReportePersonasTamizadasState extends State<ReportePersonasTamizadas> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<Tamizados, String>> _seriesPieData;
  List<Tamizados> myData;

  _generateData(myData)
  {
    _seriesPieData = List<charts.Series<Tamizados, String>>();
    _seriesPieData.add(
      charts.Series(
        domainFn: (Tamizados resultado, _)=> resultado.label,//x axis value
        measureFn: (Tamizados resultado, _)=> resultado.numero, //y axis value
        id: 'PersonasTamizadas',
        data: myData,
        labelAccessorFn: (Tamizados resultado, _)=> resultado.label,
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
          future: reportesHelper.getTamizados(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<Tamizados> res = snapshot.data;
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

  Widget _buildChart(BuildContext context, List<Tamizados> res)
  {
    myData = res;
    _generateData(myData);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Personas Tamizadas',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0, ),
            Expanded(
              child: charts.PieChart(
                _seriesPieData,
                animate: true,
                animationDuration: Duration(seconds: 2),
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