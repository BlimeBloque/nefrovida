import 'package:flutter/material.dart';
import 'package:movil/classes/Antecedentes.dart';

class DetallesAntecedentesFamiliares extends StatelessWidget {
  final Antecedentes antecedentes;
  DetallesAntecedentesFamiliares({Key key, @required this.antecedentes})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Antecedentes Familiares",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //Padre Vivo
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Padre Vivo: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.padreVivo != null
                  ? (antecedentes.padreVivo == 1 ? "Sí" : "No")
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.padreVivo != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Enfermedades Padre
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Enfermedades del Padre: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              antecedentes.enfermedadesPadre != null
                  ? antecedentes.enfermedadesPadre
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.enfermedadesPadre != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            )),
          ],
        ),
        //Madre Viva
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Madre Viva: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.madreVivo != null
                  ? (antecedentes.madreVivo == 1 ? "Sí" : "No")
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.madreVivo != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Enfermedades Madre
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Enfermedades de la Madre: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              antecedentes.enfermedadesMadre != null
                  ? antecedentes.enfermedadesMadre
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.enfermedadesMadre != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            )),
          ],
        ),
        //Núm. Hermanos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Número de Hermanos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.numHermanos != null
                  ? antecedentes.numHermanos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.numHermanos != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Núm. Hermanos Vivos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Número de Hermanos Vivos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Text(
              antecedentes.numHermanosVivos != null
                  ? antecedentes.numHermanosVivos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.numHermanosVivos != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            ),
          ],
        ),
        //Enf. Hermanos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Enfermedades de los Hermanos: ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              antecedentes.enfermedadesHermanos != null
                  ? antecedentes.enfermedadesHermanos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.enfermedadesHermanos != null
                    ? FontStyle.normal
                    : FontStyle.italic,
              ),
            )),
          ],
        ),
        //Otros Hermanos
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Otros (Hermanos): ",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            Flexible(
                child: Text(
              antecedentes.otrosHermanos != null
                  ? antecedentes.otrosHermanos
                  : 'No registrado',
              style: TextStyle(
                fontSize: 16,
                fontStyle: antecedentes.otrosHermanos != null
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
