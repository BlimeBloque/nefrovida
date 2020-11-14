import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Nota.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleNotaScreen extends StatelessWidget {
  static const String route = '/consultaNutricionDetalle';
  final HttpHelper notaHelper = HttpHelper();
  final NotaGeneral notaGeneral;
  final Beneficiario beneficiario;

  DetalleNotaScreen(
      {Key key, @required this.notaGeneral, @required this.beneficiario})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(notaGeneral.titulo),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
              future: notaHelper.getDetalleNota(notaGeneral.idNota),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print(notaGeneral.idNota);
                if (snapshot.hasData != null) {
                  Nota nota = snapshot.data;
                  if (nota == null) {
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
                                  nota.tituloNota,
                                  style: TextStyle(
                                    fontSize: 20,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              ),
                            ),
                            Center(
                              child: Column(
                                children: <Widget>[
                                  ListTile(
                                    title:
                                        Text('                  Comentario: '),
                                    subtitle: Text('                      ' +
                                        nota.comentario),
                                  ),
                                  Text(
                                    '     Nota: para descargar archivos ingrese a la nota desde la aplicacion web',
                                  )
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
