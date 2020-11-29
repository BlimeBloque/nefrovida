import 'package:flutter/material.dart';
import 'package:movil/classes/IMCGeneral.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/classes/IMCSexo.dart';
import 'package:movil/components/HttpHelper.dart';

class ReporteIMCSexo extends StatefulWidget {
  @override
  _ReporteIMCSexoState createState() => _ReporteIMCSexoState();
}

class _ReporteIMCSexoState extends State<ReporteIMCSexo> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<IMCSexo, String>> _seriesBarData;
  List<IMCSexo> hombres, mujeres;

  _generateData(hombres, mujeres)
  {
    _seriesBarData = List<charts.Series<IMCSexo, String>>();
    _seriesBarData.add(
      charts.Series(
        domainFn: (IMCSexo imc, _)=> imc.sexo,//x axis value
        measureFn: (IMCSexo imc, _)=> imc.porcentaje, //y axis value
        id: 'Hombres',
        data: hombres,
        labelAccessorFn: (IMCSexo prueba, _)=> prueba.sexo,
      )
    );
    _seriesBarData.add(
      charts.Series(
        domainFn: (IMCSexo imc, _)=> imc.sexo,//x axis value
        measureFn: (IMCSexo imc, _)=> imc.porcentaje, //y axis value
        id: 'Mujeres',
        data: mujeres,
        labelAccessorFn: (IMCSexo prueba, _)=> prueba.sexo,
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
          future: reportesHelper.getIMCSexo(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<List<IMCSexo>> resultados = snapshot.data;
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

  Widget _buildChart(BuildContext context, List<List<IMCSexo>> resultados)
  {
    hombres = resultados[0];
    mujeres = resultados[1];
    _generateData(hombres, mujeres);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Porcentaje IMC Por Sexo',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 10.0, ),
            Expanded(
              child: charts.BarChart(
                _seriesBarData,
                barGroupingType: charts.BarGroupingType.grouped,
                animate: true,
                animationDuration: Duration(seconds: 1),
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