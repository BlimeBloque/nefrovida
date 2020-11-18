import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetallePlanAlimentacion extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetallePlanAlimentacion({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Plan de Alimentación",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //NOTA
        Card(
          color: Colors.grey[50],
          child: Container( 
            width: MediaQuery.of(context).size.width*0.75,
            height: 100,
            child: Column(
              children: <Widget>[
                Text(
                  "Nota: ",
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                  ),
                ),
                Text(
                  consulta.nota != null ? consulta.nota: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.nota != null ? FontStyle.normal : FontStyle.italic,
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