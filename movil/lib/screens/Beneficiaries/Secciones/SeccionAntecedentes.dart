import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/ListaAntecedentes.dart';

class SeccionAntecedentes extends StatelessWidget {
  final Beneficiario beneficiario;

  SeccionAntecedentes({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(children: <Widget>[
          AntecedentesCard(beneficiario: this.beneficiario),
        ]),
      ),
    );
  }
}

class AntecedentesCard extends StatelessWidget {
  final Beneficiario beneficiario;

  AntecedentesCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: <Widget>[
            Text(
              "Antecedentes",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaAntecedentes(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}
