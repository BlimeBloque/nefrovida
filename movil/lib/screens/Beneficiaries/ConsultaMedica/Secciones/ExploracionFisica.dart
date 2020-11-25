import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaMedica.dart';

class ExploracionFisica extends StatelessWidget {
  final ConsultaMedica consulta;
  ExploracionFisica({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Exploración Física",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //T.A. Derecho
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "T.A. Brazo Derecho: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.taDerecho != null ? consulta.taDerecho : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.taDerecho != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //T.A. Izquierdo
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "T.A. Brazo Izquierdo: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.taIzquierdo != null ? consulta.taIzquierdo : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.taIzquierdo != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //frecCardiaca
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Frecuencia Cardíaca: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.frecuenciaCardiaca != null ? consulta.frecuenciaCardiaca : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.frecuenciaCardiaca != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //frecRespiratoria
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Frecuencia Respiratoria: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.frecuenciaRespiratoria != null ? consulta.frecuenciaRespiratoria : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.frecuenciaRespiratoria != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Temperatura
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Temperatura: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.temperatura != null ? consulta.temperatura : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.temperatura != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Peso
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Peso: ",
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
        //Talla
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Talla: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.talla != null ? consulta.talla : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.talla != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //cabezaCuello
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Cabeza/Cuello: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.cabezaCuello != null ? consulta.cabezaCuello : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.cabezaCuello != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Tórax
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Tórax: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.torax != null ? consulta.torax : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.torax != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Abdomen
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Abdomen: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.abdomen != null ? consulta.abdomen : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.abdomen != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Extremidades
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Extremidades: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.extremidades != null ? consulta.extremidades : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.extremidades != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}