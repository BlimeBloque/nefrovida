import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleDatosAntropometricos extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleDatosAntropometricos({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Datos Antropométricos",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //DX
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "DX: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.diagnostico != null ? consulta.diagnostico : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.diagnostico != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //PESO
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Peso (kg): ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.peso != null ? consulta.peso : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.peso != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //ESTATURA
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Estatura (cm): ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.altura != null ? consulta.altura : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.altura != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //PESO IDEAL
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "PI: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.pesoIdeal != null ? consulta.pesoIdeal : 'Faltan datos por registrar',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.pesoIdeal != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //IMC
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "IMC: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.imc != null ? consulta.imc : 'Faltan datos por registrar',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.imc != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //DX IMC
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "DX IMC: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.diagnosticoIMC != null ? consulta.diagnosticoIMC : 'Faltan datos por registrar',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.diagnosticoIMC != null ? FontStyle.normal : FontStyle.italic,
                backgroundColor: consulta.diagnosticoIMC == 'OBESIDAD' ? Colors.red : consulta.diagnosticoIMC == 'NORMAL' 
                ? Colors.green : consulta.diagnosticoIMC != null ? Colors.yellow : null,
                color: consulta.diagnosticoIMC == 'NORMAL' || consulta.diagnosticoIMC == 'OBESIDAD' ? Colors.white : Colors.black,
              ),
            ),
          ],
        ),
      ],
    );
  }
}