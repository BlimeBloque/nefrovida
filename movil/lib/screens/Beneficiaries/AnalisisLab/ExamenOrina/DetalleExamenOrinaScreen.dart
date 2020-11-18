 import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/classes/ExamenOrina.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosAntropometricos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosClinicos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosDieteticos.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleDatosNutrimentales.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleEstiloDeVida.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleNecesidades.dart';
import 'package:movil/screens/Beneficiaries/ConsultaNutricion/Secciones/DetalleRecordatorios.dart';

class DetalleExamenOrinaScreen extends StatelessWidget {
  static const String route = '/examenOrinaDetalle';
  final HttpHelper analisisHelper = HttpHelper();
  final ExamenOrinaGeneral examenOrinaGeneral;
  final Beneficiario beneficiario;

  DetalleExamenOrinaScreen({Key key, @required this.examenOrinaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Examen General de Orina"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
            future: analisisHelper.getExamenOrina(examenOrinaGeneral.idExamenOrina),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              print(examenOrinaGeneral.idExamenOrina);
              if(snapshot.hasData != null)
              {
                ExamenOrina analisis = snapshot.data;
                if(analisis == null)
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
                            trailing: Text(analisis.fecha),
                          ),
                          Center(
                            child: Column(
                              children: <Widget>[
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 5.0),
                                  child: Text(
                                    "Examen Macroscópico",
                                    style: TextStyle(
                                      fontSize: 20,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                                //COLOR
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Color: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.color != null ? analisis.color: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.color != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //ASPECTO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Aspecto: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.aspecto != null ? analisis.aspecto: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.aspecto != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
//---------------------------------EXAMEN QUIMICO----------------------------------------------------
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 5.0),
                                  child: Text(
                                    "Examen Químico",
                                    style: TextStyle(
                                      fontSize: 20,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                                //PH
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "PH: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.ph != null ? analisis.ph: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.ph != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //DENSIDAD
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Densidad: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.densidad != null ? analisis.densidad: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.densidad != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //NITRTITOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Nitritos: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.nitritos != null ? analisis.nitritos: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.nitritos != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //GLUCOSA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Glucosa: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.glucosa != null ? analisis.glucosa: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.glucosa != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //PROTEINAS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Proteinas: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.proteinas != null ? analisis.proteinas: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.proteinas != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //HEMOGLOBINA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Hemoglobina: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.hemoglobina != null ? analisis.hemoglobina: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.hemoglobina != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //CUERPOS CETONICOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Cuerpos Cetónicos: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.cuerposCetonicos != null ? analisis.cuerposCetonicos: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.cuerposCetonicos != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //BILIRRIBUNA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Bilirribuna: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.bilirribuna != null ? analisis.bilirribuna: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.bilirribuna != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //UROBILINOGENO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Urobilinogeno: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.urobilinogeno != null ? analisis.urobilinogeno: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.urobilinogeno != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //LEUCOCITOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Leucocitos: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.leucocitos != null ? analisis.leucocitos: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.leucocitos != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
//---------------------------------OBSERVACIONES MICROSCOPICAS----------------------------------------------------
                                Padding(
                                  padding: EdgeInsets.symmetric(vertical: 5.0),
                                  child: Text(
                                    "Observaciones Microscópicas",
                                    style: TextStyle(
                                      fontSize: 20,
                                      decoration: TextDecoration.underline,
                                    ),
                                  ),
                                ),
                                //ERITROCITOS INTACTOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Eritrocitos Intactos: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.eritrocitosIntactos != null ? analisis.eritrocitosIntactos: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.eritrocitosIntactos != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //ERITROCITOS CRENADOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Eritrocitos Crenados: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.eritrocitosCrenados != null ? analisis.eritrocitosCrenados: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.eritrocitosCrenados != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //OBSERVACION LEUCOCITOS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Observación Leucocitos: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.observacionLeucocitos != null ? analisis.observacionLeucocitos: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.observacionLeucocitos != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //CRISTALES
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Cristales: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.cristales != null ? analisis.cristales: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.cristales != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //CILINDROS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Cilindros: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.cilindros != null ? analisis.cilindros: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.cilindros != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //CELULAS EPITELIALES
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Células Epiteliales: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.celulasEpiteliales != null ? analisis.celulasEpiteliales: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.celulasEpiteliales != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //BACTERIAS
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Bacterias: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.bacterias != null ? analisis.bacterias: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.bacterias != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //NOTA
                                Card(
                                  color: Colors.grey[50],
                                  child: Container( 
                                    width: MediaQuery.of(context).size.width*0.75,
                                    height: 100,
                                    child: Column(
                                      children: <Widget>[
                                        Text(
                                          "Nota: ",
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        Text(
                                          analisis.nota != null ? analisis.nota: 'No registrado',
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontStyle: analisis.nota != null ? FontStyle.normal : FontStyle.italic,
                                          ),
                                        ),
                                      ],
                                    ),
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