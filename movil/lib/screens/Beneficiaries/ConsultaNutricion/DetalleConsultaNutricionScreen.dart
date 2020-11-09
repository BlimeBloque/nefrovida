import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleConsultaNutricionScreen extends StatelessWidget {
  static const String route = '/consultaNutricionDetalle';
  final HttpHelper consultaHelper = HttpHelper();
  final ConsultaNutricionGeneral consultaGeneral;
  final Beneficiario beneficiario;

  DetalleConsultaNutricionScreen({Key key, @required this.consultaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Consulta de Nutrición"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
            future: consultaHelper.getDetalleConsulta(consultaGeneral.idConsultaNutricion),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              print(consultaGeneral.idConsultaNutricion);
              if(snapshot.hasData != null)
              {
                ConsultaNutricion consulta = snapshot.data;
                if(consulta == null)
                {
                  return Center(child: CircularProgressIndicator());
                }
                else
                {
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
                            trailing: Text(consulta.fecha),
                          ),
                          Center(
                            child: Column(
                              children: <Widget>[
                                Text(
                                  "Datos Nutrimentales",
                                  style: TextStyle(
                                    fontSize: 20,
                                    decoration: TextDecoration.underline,
                                  ),
                                ),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: <Widget>[
                                    Text(
                                      "Ocupación: ",
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Text(
                                      consulta.ocupacion != null ? consulta.ocupacion: 'No registrado',
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontStyle: consulta.ocupacion != null ? FontStyle.normal : FontStyle.italic,
                                      ),
                                      ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }
              }
              else
              {
                return Center(child: CircularProgressIndicator());
              }
            }
          ),
        ),
      ),
    );
  }
}