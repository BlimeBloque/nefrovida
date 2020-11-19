import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosAntropometricos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosClinicos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosDieteticos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosNutrimentales.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleEstiloDeVida.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleNecesidades.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetallePlanAlimentacion.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleRecordatorios.dart';

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
                                DetalleDatosNutrimentales(consulta: consulta),
                                DetalleDatosClinicos(consulta: consulta),
                                DetalleEstiloDeVida(consulta: consulta),
                                DetalleDatosDieteticos(consulta: consulta),
                                DetalleRecordatorios(consulta: consulta),
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 5.0),
                                  child: Text(
                                    "Evaluación Nutricia",
                                    style: TextStyle(
                                      fontSize: 20,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                                DetalleDatosAntropometricos(consulta: consulta),
                                DetalleNecesidades(consulta: consulta),
                                DetallePlanAlimentacion(consulta: consulta),
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