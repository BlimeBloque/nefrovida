import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Tamizaje.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleTamizaje extends StatelessWidget {
  static const String route = '/consultaNutricionDetalle';
  final HttpHelper consultaHelper = HttpHelper();
  final TamizajeInfo tamizaje;
  final Beneficiario beneficiario;

  DetalleTamizaje(
      {Key key, @required this.tamizaje, @required this.beneficiario})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Tamizaje"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
              future: consultaHelper.getATamizaje(
                  beneficiario.idBeneficiario, tamizaje.idTamizaje),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print('has data');
                print(snapshot.hasData);
                print(snapshot.data);
                if (snapshot.hasData != null) {
                  Tamizaje consulta = snapshot.data;
                  if (consulta == null) {
                    return Center(child: CircularProgressIndicator());
                  } else {
                    return Card(
                      child: Container(
                        width: MediaQuery.of(context).size.width,
                        child: Column(
                          children: <Widget>[
                            ListTile(
                              leading: IconButton(
                                icon: Icon(Icons.navigate_before_outlined),
                                tooltip: "Regresar",
                                onPressed: () {
                                  Navigator.pop(context);
                                },
                              ),
                              title: Center(
                                child: Text(
                                  beneficiario.nombreBeneficiario,
                                  style: TextStyle(
                                    fontSize: 22,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                              trailing: Text(consulta.fecha.split(' ')[0]),
                            ),
                            Center(
                              child: Column(
                                children: <Widget>[
                                  Text(consulta.comentario),
                                ],
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  }
                } else {
                  return Center(child: CircularProgressIndicator());
                }
              }),
        ),
      ),
    );
  }
}
