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

  setfecha(String n) {
    var arr = [];
    arr = n.split("-");
    if (arr[1] == '01') {
      arr[1] = 'Ene';
    } else if (arr[1] == '02') {
      arr[1] = 'Feb';
    } else if (arr[1] == '03') {
      arr[1] = 'Mar';
    } else if (arr[1] == '04') {
      arr[1] = 'Abr';
    } else if (arr[1] == '05') {
      arr[1] = 'May';
    } else if (arr[1] == '06') {
      arr[1] = 'Jun';
    } else if (arr[1] == '07') {
      arr[1] = 'Jul';
    } else if (arr[1] == '08') {
      arr[1] = 'Ago';
    } else if (arr[1] == '09') {
      arr[1] = 'Sep';
    } else if (arr[1] == '10') {
      arr[1] = 'Oct';
    } else if (arr[1] == '11') {
      arr[1] = 'Nov';
    } else if (arr[1] == '12') {
      arr[1] = 'Dic';
    }

    var fecha = arr[2] + '/' + arr[1] + '/' + arr[0];
    return fecha;
  }

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
                              trailing:
                                  Text(setfecha(consulta.fecha.split(' ')[0])),
                            ),
                            Center(
                              child: Column(
                                children: <Widget>[
                                  Text(
                                    'Presión Arterial:   ${consulta.presionArterial}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Peso:   ${consulta.peso}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Circunferencia en Cintura:   ${consulta.circunferenciaCintura}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Circunferencia en Cadera:   ${consulta.circunferenciaCadera}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Glucosa Capilar:   ${consulta.glucosaCapilar}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Talla:   ${consulta.talla}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Indice Cintura Cadera:   ${consulta.indiceCinturaCadera}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
                                  Text(
                                    'Comentario:   ${consulta.comentario}',
                                    style: const TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.w300,
                                    ),
                                  ),
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
