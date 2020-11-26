import 'package:flutter/material.dart';
import 'package:movil/classes/Antecedentes.dart';

class DetallesDatosVivienda extends StatelessWidget {
  final Antecedentes antecedentes;
  DetallesDatosVivienda({Key key, @required this.antecedentes}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Datos de Vivienda",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //Casa
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Casa: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.casa != null ? antecedentes.casa : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.casa != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Servicios Básicos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Servicios Básicos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.serviciosBasicos != null ? (antecedentes.serviciosBasicos == 1 ? "Sí" : "No") : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.serviciosBasicos != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}