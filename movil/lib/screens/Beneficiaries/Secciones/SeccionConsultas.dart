import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/ListaConsultasNutricion.dart';

class SeccionConsultas extends StatelessWidget {
  final Beneficiario beneficiario;

  SeccionConsultas({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            ConsultasNutricionalesCard(beneficiario: this.beneficiario),
          ]
        ),
      ),
    );
  }
}


class ConsultasNutricionalesCard extends StatelessWidget {
  final Beneficiario beneficiario;

  ConsultasNutricionalesCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width ,
        child: Column(
          children: <Widget>[
            Text(
              "Consultas Nutricionales",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaConsultasNutricion(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}