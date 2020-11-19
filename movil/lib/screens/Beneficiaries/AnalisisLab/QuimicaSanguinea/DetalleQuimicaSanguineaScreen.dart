 import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/QuimicaSanguinea.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleQuimicaSanguineaScreen extends StatelessWidget {
  static const String route = '/quimicaSanguineaDetalle';
  final HttpHelper analisisHelper = HttpHelper();
  final QuimicaSanguineaGeneral quimicaSanguineaGeneral;
  final Beneficiario beneficiario;

  DetalleQuimicaSanguineaScreen({Key key, @required this.quimicaSanguineaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Química Sanguínea"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
            future: analisisHelper.getQuimicaSanguinea(quimicaSanguineaGeneral.idQuimicaSanguinea),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              print(quimicaSanguineaGeneral.idQuimicaSanguinea);
              if(snapshot.hasData != null)
              {
                QuimicaSanguinea analisis = snapshot.data;
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
                                          backgroundColor: analisis.glucosa != null ?
                                          analisis.getColorFondo(analisis.glucosa, analisis.valorGlucosaBajo, analisis.valorGlucosaAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES GLUCOSA
                                Text(
                                  'Valores de Referencia',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR GLUCOSA BAJO
                                          Text(
                                            analisis.valorGlucosaBajo != null ? analisis.valorGlucosaBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorGlucosaBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR GLUCOSA ALTO 
                                          Text(
                                            analisis.valorGlucosaAlto != null ? analisis.valorGlucosaAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorGlucosaAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/dL",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //UREA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Urea: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                          
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.urea != null ? analisis.urea: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.urea != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.urea != null ?
                                          analisis.getColorFondo(analisis.urea, analisis.valorUreaBajo, analisis.valorUreaAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES UREA
                                Text(
                                  'Valores de Referencia',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR UREA BAJO
                                          Text(
                                            analisis.valorUreaBajo != null ? analisis.valorUreaBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorUreaBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR UREA ALTO 
                                          Text(
                                            analisis.valorUreaAlto != null ? analisis.valorUreaAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorUreaAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/dL",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //BUN
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Bun: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.bun != null ? analisis.bun: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.bun != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.bun != null ?
                                          analisis.getColorFondo(analisis.bun, analisis.valorBunBajo, analisis.valorBunAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES BUN
                                Text(
                                  'Valores de Referencia',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR BUN BAJO
                                          Text(
                                            analisis.valorBunBajo != null ? analisis.valorBunBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorBunBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR BUN ALTO 
                                          Text(
                                            analisis.valorBunAlto != null ? analisis.valorBunAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorBunAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/dL",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //CREATININA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Creatinina: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.creatinina != null ? analisis.creatinina :'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.creatinina != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.creatinina != null ? beneficiario.sexo == 'H' ? 
                                          analisis.getColorFondo(analisis.creatinina, analisis.creatininaHombreBajo, analisis.creatininaHombreAlto)
                                          : 
                                          analisis.getColorFondo(analisis.creatinina, analisis.creatininaMujerBajo, analisis.creatininaMujerAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES CREATININA MUJER
                                Text(
                                  'Valores de Referencia',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR CREATININA BAJO MUJER
                                          Text(
                                            analisis.creatininaMujerBajo != null ? analisis.creatininaMujerBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.creatininaMujerBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR CREATININA ALTO MUJER
                                          Text(
                                            analisis.creatininaMujerAlto != null ? analisis.creatininaMujerAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.creatininaMujerAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/dL MUJERES ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES CREATININA HOMBRE
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR CREATININA BAJO HOMBRE
                                          Text(
                                            analisis.creatininaHombreBajo != null ? analisis.creatininaHombreBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.creatininaHombreBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR CREATININA ALTO HOMBRE
                                          Text(
                                            analisis.creatininaHombreAlto != null ? analisis.creatininaHombreAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.creatininaHombreAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/dL HOMBRES ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //METODO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Método: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.metodo != null ? analisis.metodo: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.metodo != null ? FontStyle.normal : FontStyle.italic,
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