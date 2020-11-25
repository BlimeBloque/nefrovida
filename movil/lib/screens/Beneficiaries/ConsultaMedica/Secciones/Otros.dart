import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaMedica.dart';

class Otros extends StatelessWidget {
  final ConsultaMedica consulta;
  Otros({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Otros",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //PA
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Otros: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.otros != null ? consulta.otros : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.otros != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}