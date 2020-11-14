import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Nota.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/DetalleConsultaNutricionScreen.dart';
import 'package:movil/screens/Beneficiaries/Notas/DetalleNotaScreen.dart';

class ListaNotas extends StatelessWidget {
  HttpHelper notaHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<NotaGeneral> _notas;

  ListaNotas({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: notaHelper.getNotas(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData != null) {
            _notas = snapshot.data;
            if (_notas == null) {
              return Center(child: CircularProgressIndicator());
            } else {
              if (_notas.length <= 0) {
                return Center(
                    child: Text(
                        "No hay notas registradas para este beneficiario.",
                        textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _notas.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.note),
                    title: Center(child: Text(_notas[index].titulo)),
                    onTap: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => DetalleNotaScreen(
                                  notaGeneral: _notas[index],
                                  beneficiario: beneficiario)));
                    },
                    trailing: Icon(Icons.navigate_next_rounded),
                  );
                },
              );
            }
          } else {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }
}
