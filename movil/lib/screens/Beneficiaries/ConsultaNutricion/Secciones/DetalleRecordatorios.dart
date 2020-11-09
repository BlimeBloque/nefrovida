import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleRecordatorios extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleRecordatorios({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Recordatorio de 24 Horas",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //DESAYUNO
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Desayuno: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.recordatorioDesayuno != null ? consulta.recordatorioDesayuno: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.recordatorioDesayuno != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ),
        //COLACION MAÑANA
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Colación en la mañana: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.recordatorioColacionManana != null ? consulta.recordatorioColacionManana: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.recordatorioColacionManana != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ),
        //COMIDA
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Comida: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.recordatorioComida != null ? consulta.recordatorioComida: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.recordatorioComida != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ),
        //COLACION TARDE
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Colación en la tarde: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.recordatorioColacionTarde != null ? consulta.recordatorioColacionTarde: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.recordatorioColacionTarde != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ),
        //CENA
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Cena: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.recordatorioCena != null ? consulta.recordatorioCena: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.recordatorioCena != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    );
  }
}