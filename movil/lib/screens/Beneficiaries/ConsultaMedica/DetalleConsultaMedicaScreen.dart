import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaMedica.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/Secciones/PadecimientoActual.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/Secciones/ExploracionFisica.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/Secciones/Neurologico.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/Secciones/Otros.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/Secciones/DiagnosticoTratamiento.dart';

class DetalleConsultaMedicaScreen extends StatelessWidget {
  static const String route = '/consultaMedicaDetalle';
  final HttpHelper consultaHelper = HttpHelper();
  final ConsultaMedicaGeneral consultaGeneral;
  final Beneficiario beneficiario;

  DetalleConsultaMedicaScreen({Key key, @required this.consultaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Consulta Médica"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
              future: consultaHelper.getDetalleConsulta(consultaGeneral.idConsultaMedica),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print(consultaGeneral.idConsultaMedica);
                if(snapshot.hasData != null)
                {
                  ConsultaMedica consulta = snapshot.data;
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
                                  PadecimientoActual(consulta: consulta),
                                  ExploracionFisica(consulta: consulta),
                                  Neurologico(consulta: consulta),
                                  Otros(consulta: consulta),
                                  DiagnosticoTratamiento(consulta: consulta),
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