import 'package:flutter/material.dart';
import 'package:movil/classes/Antecedentes.dart';

class DetallesAntecedentesPersonales extends StatelessWidget {
  final Antecedentes antecedentes;
  DetallesAntecedentesPersonales({Key key, @required this.antecedentes}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Antecedentes Personales",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //P. Patológicos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Personales Patológicos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.personalesPatologicos != null ? antecedentes.personalesPatologicos : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.personalesPatologicos != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
        //P. No Patológicos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Personales No Patológicos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.personalesNoPatologicos != null ? antecedentes.personalesNoPatologicos : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.personalesNoPatologicos != null ? FontStyle.normal : FontStyle.italic,
              ),
            ),
          ],
        ),
      ],
    );
  }
}