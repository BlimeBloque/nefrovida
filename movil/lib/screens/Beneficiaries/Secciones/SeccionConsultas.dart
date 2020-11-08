import 'package:flutter/material.dart';

class SeccionConsultas extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            ConsultasNutricionalesCard(),
          ]
        ),
      ),
    );
  }
}


class ConsultasNutricionalesCard extends StatelessWidget {
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
          ],
        ),
      ),
    );
  }
}