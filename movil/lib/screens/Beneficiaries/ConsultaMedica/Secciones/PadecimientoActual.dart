import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaMedica.dart';

class PadecimientoActual extends StatelessWidget {
  final ConsultaMedica consulta;
  PadecimientoActual({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Padecimiento Actual",
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
              "Padecimiento: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.padecimientoActual != null ? consulta.padecimientoActual : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.padecimientoActual != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}