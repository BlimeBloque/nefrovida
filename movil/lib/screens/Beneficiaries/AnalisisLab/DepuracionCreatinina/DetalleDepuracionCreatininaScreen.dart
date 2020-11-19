 import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/DepuracionCreatinina.dart';
import 'package:movil/classes/ExamenOrina.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleDepuracionCreatininaScreen extends StatelessWidget {
  static const String route = '/depuracionCreatininaDetalle';
  final HttpHelper analisisHelper = HttpHelper();
  final DepuracionCreatininaGeneral depuracionCreatininaGeneral;
  final Beneficiario beneficiario;

  DetalleDepuracionCreatininaScreen({Key key, @required this.depuracionCreatininaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Depuración de Creatinina en Orina de 24 Hrs"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
            future: analisisHelper.getDepuracionCreatinina(depuracionCreatininaGeneral.idDepuracionCreatinina),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              print(depuracionCreatininaGeneral.idDepuracionCreatinina);
              if(snapshot.hasData != null)
              {
                DepuracionCreatinina analisis = snapshot.data;
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
                                //TALLA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Talla: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.talla != null ? analisis.talla: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.talla != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //PESO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Peso: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.peso != null ? analisis.peso: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.peso != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VOLUMEN
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Volumen: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.volumen != null ? analisis.volumen: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.volumen != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //SUPERFICIE CORPORAL
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Superficie Corporal: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.superficieCorporal != null ? analisis.superficieCorporal: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.superficieCorporal != null ? FontStyle.normal : FontStyle.italic,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //CREATININA EN SUERO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Creatinina en Suero: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.creatininaEnSuero != null ? analisis.creatininaEnSuero :'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.creatininaEnSuero != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.creatininaEnSuero != null ? beneficiario.sexo == 'H' ? 
                                          analisis.getColorFondo(analisis.creatininaEnSuero, analisis.valorCreatininaBajoHombre, analisis.valorCreatininaAltoHombre)
                                          : 
                                          analisis.getColorFondo(analisis.creatininaEnSuero, analisis.valorCreatininaBajoMujer, analisis.valorCreatininaAltoMujer)
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
                                            analisis.valorCreatininaBajoMujer != null ? analisis.valorCreatininaBajoMujer: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaBajoMujer != null ? FontStyle.normal : FontStyle.italic,
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
                                            analisis.valorCreatininaAltoMujer != null ? analisis.valorCreatininaAltoMujer: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaAltoMujer != null ? FontStyle.normal : FontStyle.italic,
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
                                            analisis.valorCreatininaBajoHombre != null ? analisis.valorCreatininaBajoHombre: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaBajoHombre != null ? FontStyle.normal : FontStyle.italic,
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
                                            analisis.valorCreatininaAltoHombre != null ? analisis.valorCreatininaAltoHombre: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaAltoHombre != null ? FontStyle.normal : FontStyle.italic,
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
                                //DEPURACION DE CREATININA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Depuración de Creatinina: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                      child: Text(
                                        analisis.depuracionCreatinina != null ? analisis.depuracionCreatinina: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.depuracionCreatinina != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.depuracionCreatinina != null ? beneficiario.sexo == 'H' ? 
                                          analisis.getColorFondo(analisis.depuracionCreatinina, analisis.valorDepuracionBajoHombre, analisis.valorDepuracionAltoHombre)
                                          : 
                                          analisis.getColorFondo(analisis.depuracionCreatinina, analisis.valorDepuracionBajoMujer, analisis.valorDepuracionAltoMujer)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES DEPURACION MUJER
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
                                          //VALOR DEPURACION BAJO MUJER
                                          Text(
                                            analisis.valorDepuracionBajoMujer != null ? analisis.valorDepuracionBajoMujer: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorDepuracionBajoMujer != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR DEPURACION ALTO MUJER
                                          Text(
                                            analisis.valorDepuracionAltoMujer != null ? analisis.valorDepuracionAltoMujer : 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorDepuracionAltoMujer != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " ml/min MUJERES ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES DEPURACION HOMBRE
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR DEPURACION BAJO HOMBRE
                                          Text(
                                            analisis.valorDepuracionBajoHombre != null ? analisis.valorDepuracionBajoHombre: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorDepuracionBajoHombre != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR DEPURACION ALTO HOMBRE
                                          Text(
                                            analisis.valorDepuracionAltoHombre != null ? analisis.valorDepuracionAltoHombre: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorDepuracionAltoHombre != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " ml/min HOMBRES ",
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