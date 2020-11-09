import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleDatosClinicos extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleDatosClinicos({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Datos Clínicos",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //APETITO
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Apetito: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.apetito != null ? consulta.apetito: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.apetito != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //DISTENSION
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Distensión: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.distension != null ? consulta.distension: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.distension != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //ESTREÑIMIENTO
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Estreñimiento: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.estrenimiento != null ? consulta.estrenimiento: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.estrenimiento != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //FLATULENCIAS
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Flatulencias: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.flatulencias != null ? consulta.flatulencias: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.flatulencias != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //VOMITOS
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Vómitos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.vomitos != null ? consulta.vomitos: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.vomitos != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //CARIES
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Caries: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.caries != null ? consulta.caries: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.caries != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //EDEMA
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Edema: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.edema != null ? consulta.edema: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.edema != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //MAREO
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Mareo: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.mareo != null ? consulta.mareo: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.mareo != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //ZUMBIDO EN OIDOS
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Zumbido en oídos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.zumbido != null ? consulta.zumbido: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.zumbido != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //CEFALEAS
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Cefaleas: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.cefaleas != null ? consulta.cefaleas: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.cefaleas != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //DISNEA
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Disnea: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.disnea != null ? consulta.disnea: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.disnea != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //POLIURIA
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "poliuria: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              consulta.poliuria != null ? consulta.poliuria: 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: consulta.poliuria != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}