import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/Notas/AgregarNotaScreen.dart';
import 'package:movil/screens/Beneficiaries/Notas/ListaNotas.dart';
import 'package:movil/screens/MainScreen.dart';

class SeccionNotas extends StatelessWidget {
  final Beneficiario beneficiario;

  SeccionNotas({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Padding(
        padding: EdgeInsets.all(8.0),
        child: Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: <Widget>[
              NotasCard(beneficiario: this.beneficiario),
              FloatingActionButton(
                tooltip: 'Agregar Nota',
                onPressed: () {
                  Navigator.push(
                      context,
                      MaterialPageRoute(
                          builder: (context) => AgregarNotaScreen(
                              id: beneficiario.idBeneficiario)));
                },
                child: Icon(Icons.add),
                backgroundColor: Colors.green,
              ),
            ]),
      ),
    );
  }
}

class NotasCard extends StatelessWidget {
  final Beneficiario beneficiario;

  NotasCard({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: <Widget>[
            Text(
              "Notas",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
              ),
            ),
            ListaNotas(beneficiario: this.beneficiario),
          ],
        ),
      ),
    );
  }
}
