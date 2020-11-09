import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleDatosNutrimentales extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleDatosNutrimentales({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Datos Nutrimentales",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //OCUPACION
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Ocupación: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
                child: Text(
                consulta.ocupacion != null ? consulta.ocupacion: 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.ocupacion != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //HORARIOS DE COMIDA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Horarios de comida: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                  consulta.horariosComida != null ? consulta.horariosComida: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.horariosComida != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ),
          ],
        ),
        //CANTIDAD DESTINADA A ALIMENTOS
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Cantidad destinada a alimentos: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                  consulta.cantidadDestinadaAlimentos != null ? consulta.cantidadDestinadaAlimentos: 'No registrado',
                  style: TextStyle(
                    fontSize: 16,
                    fontStyle: consulta.cantidadDestinadaAlimentos != null ? FontStyle.normal : FontStyle.italic,
                  ),
                ),
              ),
          ],
        ),
      ],
    );
  }
}