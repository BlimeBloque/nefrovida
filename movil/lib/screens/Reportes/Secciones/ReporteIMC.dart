import 'package:flutter/material.dart';
import 'package:movil/classes/IMCGeneral.dart';
import 'package:charts_flutter/flutter.dart' as charts;
import 'package:movil/components/HttpHelper.dart';

class ReporteIMC extends StatefulWidget {
  @override
  _ReporteIMCState createState() => _ReporteIMCState();
}

class _ReporteIMCState extends State<ReporteIMC> {
  final HttpHelper reportesHelper = HttpHelper();

  List<charts.Series<IMCGeneral, String>> _seriesBarData;
  List<IMCGeneral> myData;

  _generateData(myData)
  {
    _seriesBarData = List<charts.Series<IMCGeneral, String>>();
    _seriesBarData.add(
      charts.Series(
        domainFn: (IMCGeneral imc, _)=> imc.label,//x axis value
        measureFn: (IMCGeneral imc, _)=> imc.porcentaje, //y axis value
        id: 'IMCGeneral',
        data: myData,
        labelAccessorFn: (IMCGeneral prueba, _)=> prueba.label,
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
          future: reportesHelper.getIMCGeneral(),
          builder: (BuildContext context, AsyncSnapshot snapshot) {
            if(snapshot.hasData != null)
            {
              List<IMCGeneral> resultados = snapshot.data;
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

  Widget _buildChart(BuildContext context, List<IMCGeneral> resultados)
  {
    myData = resultados;
    _generateData(myData);

    return Container(
      child: Center(
        child: Column(
          children: <Widget>[
            Text(
              'Porcentaje IMC General',
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