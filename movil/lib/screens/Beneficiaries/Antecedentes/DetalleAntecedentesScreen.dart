import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Antecedentes.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/Secciones/DetallesDatosVivienda.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/Secciones/DetallesAntecedentesPersonales.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/Secciones/DetallesAntecedentesFamiliares.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/Secciones/DetallesAntecedentesGinecoObstetricos.dart';

class DetalleAntecedentesScreen extends StatelessWidget {
  static const String route = '/antecedentesDetalle';
  final HttpHelper antecedentesHelper = HttpHelper();
  final AntecedentesGeneral antecedentesGeneral;
  final Beneficiario beneficiario;

  DetalleAntecedentesScreen({Key key, @required this.antecedentesGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Antecedentes"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
              future: antecedentesHelper.getDetalleAntecedentes(antecedentesGeneral.idAntecedentes),
              builder: (BuildContext context, AsyncSnapshot snapshot) {
                print(antecedentesGeneral.idAntecedentes);
                if(snapshot.hasData != null)
                {
                  Antecedentes antecedentes = snapshot.data;
                  if(antecedentes == null)
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
                              trailing: Text(antecedentes.fecha),
                            ),
                            Center(
                              child: Column(
                                children: <Widget>[
                                  DetallesDatosVivienda(antecedentes: antecedentes),
                                  DetallesAntecedentesPersonales(antecedentes: antecedentes),
                                  DetallesAntecedentesFamiliares(antecedentes: antecedentes),
                                  DetallesAntecedentesGinecoObstetricos(antecedentes: antecedentes),
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