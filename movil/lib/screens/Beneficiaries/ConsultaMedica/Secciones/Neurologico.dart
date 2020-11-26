import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaMedica.dart';

class Neurologico extends StatelessWidget {
  final ConsultaMedica consulta;
  Neurologico({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Neurológico",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //NEM
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Estado Mental: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              consulta.neurologicoEstadoMental != null
                  ? consulta.neurologicoEstadoMental
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.neurologicoEstadoMental != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            )),
          ],
        ),
      ],
    );
  }
}
