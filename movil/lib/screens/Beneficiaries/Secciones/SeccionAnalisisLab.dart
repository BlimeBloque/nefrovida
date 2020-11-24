import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/DepuracionCreatinina/ListaDepuracionCreatinina.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/ExamenOrina/ListaExamenOrina.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/Microalbuminuria/ListaMicroalbuminuria.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/QuimicaSanguinea/ListaQuimicaSanguinea.dart';

class SeccionAnalisisLab extends StatelessWidget {
  final Beneficiario beneficiario;

  SeccionAnalisisLab({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            ExamenesOrinaCard(beneficiario: this.beneficiario),
            Container(child: Padding(padding: EdgeInsets.all(15.0),)),
            DepuracionesCreatininaCard(beneficiario: this.beneficiario),
            Container(child: Padding(padding: EdgeInsets.all(15.0),)),
            QuimicasSanguineasCard(beneficiario: this.beneficiario),
            Container(child: Padding(padding: EdgeInsets.all(15.0),)),
            Microalbuminurias(beneficiario: this.beneficiario),
            Container(child: Padding(padding: EdgeInsets.all(15.0),)),
          ]
        ),
      ),
    );
  }
}


class ExamenesOrinaCard extends StatelessWidget {
  final Beneficiario beneficiario;

  ExamenesOrinaCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width ,
        child: Column(
          children: <Widget>[
            Text(
              "Examenes Generales de Orina",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaExamenOrina(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}

class DepuracionesCreatininaCard extends StatelessWidget {
  final Beneficiario beneficiario;

  DepuracionesCreatininaCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width ,
        child: Column(
          children: <Widget>[
            Text(
              "Depuraciones de Creatinina en Orina de 24 Hrs",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaDepuracionCreatinina(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}

class QuimicasSanguineasCard extends StatelessWidget {
  final Beneficiario beneficiario;

  QuimicasSanguineasCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width ,
        child: Column(
          children: <Widget>[
            Text(
              "Análisis de Química Sanguínea",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaQuimicaSanguinea(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}

class Microalbuminurias extends StatelessWidget {
  final Beneficiario beneficiario;

  Microalbuminurias({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width ,
        child: Column(
          children: <Widget>[
            Text(
              "Análisis de Microalbuminuría",
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaMicroalbuminuria(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}