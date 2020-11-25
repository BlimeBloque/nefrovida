import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaMedica.dart';

class DiagnosticoTratamiento extends StatelessWidget {
  final ConsultaMedica consulta;
  DiagnosticoTratamiento({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Diagnóstico",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //Diagnósitcos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Diagnósticos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.diagnosticos != null ? consulta.diagnosticos : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.diagnosticos != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Plan de tratamiento
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Plan de tratamiento: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.planDeTratamiento != null ? consulta.planDeTratamiento : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.planDeTratamiento != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}