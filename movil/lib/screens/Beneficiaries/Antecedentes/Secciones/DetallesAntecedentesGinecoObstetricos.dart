import 'package:flutter/material.dart';
import 'package:movil/classes/Antecedentes.dart';

class DetallesAntecedentesGinecoObstetricos extends StatelessWidget {
  final Antecedentes antecedentes;
  DetallesAntecedentesGinecoObstetricos({Key key, @required this.antecedentes})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Antecedentes Gineco-Obstétricos",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //Menarquia
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Menarquia: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.menarquia != null
                  ? antecedentes.menarquia
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.menarquia != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Ritmo
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Ritmo: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.ritmo != null ? antecedentes.ritmo : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.ritmo != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //F.U.M
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "F.U.M: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.fum != null ? antecedentes.fum : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.fum != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Gestaciones
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Gestaciones: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.gestaciones != null
                  ? antecedentes.gestaciones
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.gestaciones != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Partos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Partos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.partos != null
                  ? antecedentes.partos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.partos != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Abortos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Abortos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.abortos != null
                  ? antecedentes.abortos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.abortos != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Cesáreas
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Cesáreas: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.cesareas != null
                  ? antecedentes.cesareas
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.cesareas != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //ivsa
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "I.V.S.A: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.ivsa != null ? antecedentes.ivsa : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.ivsa != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Anticonceptivos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Métodos Anticonceptivos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              antecedentes.metodosAnticonceptivos != null
                  ? antecedentes.metodosAnticonceptivos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.metodosAnticonceptivos != null
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
