import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleEstiloDeVida extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleEstiloDeVida({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Estilo de Vida",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //ACTIVIDAD FISICA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Actividad física/tipo/frecuencia: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.actividadFisica != null ? consulta.actividadFisica: 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.actividadFisica != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //HORARIOS DE SUEÑO
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Horas de sueño: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.horasSueno != null ? consulta.horasSueno: 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.horasSueno != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}