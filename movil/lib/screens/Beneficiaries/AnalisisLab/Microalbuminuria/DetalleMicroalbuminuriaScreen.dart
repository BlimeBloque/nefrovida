 import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/DepuracionCreatinina.dart';
import 'package:movil/classes/Microalbuminuria.dart';
import 'package:movil/classes/QuimicaSanguinea.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleMicroalbuminuriaScreen extends StatelessWidget {
  static const String route = '/microalbuminuriaDetalle';
  final HttpHelper analisisHelper = HttpHelper();
  final MicroalbuminuriaGeneral microalbuminuriaGeneral;
  final Beneficiario beneficiario;

  DetalleMicroalbuminuriaScreen({Key key, @required this.microalbuminuriaGeneral, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Microalbuminuría"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
      body: SingleChildScrollView(
        child: Padding(
          padding: EdgeInsets.all(8.0),
          child: FutureBuilder(
            future: analisisHelper.getMicroalbuminuria(microalbuminuriaGeneral.idMicroalbuminuria),
            builder: (BuildContext context, AsyncSnapshot snapshot) {
              print(microalbuminuriaGeneral.idMicroalbuminuria);
              if(snapshot.hasData != null)
              {
                Microalbuminuria analisis = snapshot.data;
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
                                //MICRO ALBUMINA
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Micro Albumina: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.microAlbumina != null ? analisis.microAlbumina: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.microAlbumina != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.microAlbumina != null ?
                                          analisis.getColorFondo(analisis.microAlbumina, analisis.valorMicroAlbuminaBajo, analisis.valorMicroAlbuminaAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES MICRO ALBUMINA
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
                                          //VALOR MICRO ALBUMINA BAJO
                                          Text(
                                            analisis.valorMicroAlbuminaBajo!= null ? analisis.valorMicroAlbuminaBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorMicroAlbuminaBajo!= null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR MICRO ALBUMINA ALTO 
                                          Text(
                                            analisis.valorMicroAlbuminaAlto != null ? analisis.valorMicroAlbuminaAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorMicroAlbuminaAlto != null ? FontStyle.normal : FontStyle.italic,
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
                                //Creatinina
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
                                        analisis.creatinina != null ? analisis.creatinina: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.creatinina != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.creatinina != null ?
                                          analisis.getColorFondo(analisis.creatinina, analisis.valorCreatininaBajo, analisis.valorCreatininaAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES CREATININA
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
                                          //VALOR CREATININA BAJO
                                          Text(
                                            analisis.valorCreatininaBajo != null ? analisis.valorCreatininaBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaBajo != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR CREATININA ALTO 
                                          Text(
                                            analisis.valorCreatininaAlto != null ? analisis.valorCreatininaAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorCreatininaAlto != null ? FontStyle.normal : FontStyle.italic,
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
                                //RELACION
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Text(
                                        "Relación Micro Albumina/Creatinina: ",
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontWeight: FontWeight.bold,
                                        ),
                                      ),
                                    ),
                                    Center(
                                        child: Text(
                                        analisis.relacion != null ? analisis.relacion: 'No registrado',
                                        style: TextStyle(
                                          fontSize: 16,
                                          fontStyle: analisis.relacion != null ? FontStyle.normal : FontStyle.italic,
                                          backgroundColor: analisis.relacion != null ?
                                          analisis.getColorRelacion(analisis.relacion, analisis.valorRelacionAnormalBajo, analisis.valorRelacionAnormalAltoAlto)
                                          : null,
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES RELACION 
                                Text(
                                  'Valores de Referencia',
                                  style: TextStyle(
                                    fontSize: 14,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                //VALORES RELACION NORMAL
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR RELACION NORMAL BAJO
                                          Text(
                                            "NORMAL = ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          Text(
                                            analisis.valorRelacionNormalBajo!= null ? analisis.valorRelacionNormalBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionNormalBajo!= null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR RELACION NORMAL ALTO 
                                          Text(
                                            analisis.valorRelacionNormalAlto != null ? analisis.valorRelacionNormalAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionNormalAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/g",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES RELACION ANORMAL
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR RELACION ANORMAL BAJO
                                          Text(
                                            "ANORMAL = ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          Text(
                                            analisis.valorRelacionAnormalBajo!= null ? analisis.valorRelacionAnormalBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionAnormalBajo!= null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR RELACION ANORMAL ALTO 
                                          Text(
                                            analisis.valorRelacionAnormalAlto != null ? analisis.valorRelacionAnormalAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionAnormalAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/g",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                                //VALORES RELACION ANORMAL ALTO
                                Wrap(
                                  children: <Widget>[
                                    Center(
                                      child: Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        mainAxisAlignment: MainAxisAlignment.center,
                                        children: <Widget>[
                                          //VALOR RELACION ANORMAL ALTO BAJO
                                          Text(
                                            "ANORMAL ALTO = ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          Text(
                                            analisis.valorRelacionAnormalAltoBajo!= null ? analisis.valorRelacionAnormalAltoBajo: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionAnormalAltoBajo!= null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " - ",
                                            style: TextStyle(
                                              fontSize: 16,
                                            ),
                                          ),
                                          //VALOR RELACION ANORMAL ALTO 
                                          Text(
                                            analisis.valorRelacionAnormalAltoAlto != null ? analisis.valorRelacionAnormalAltoAlto: 'No registrado',
                                            style: TextStyle(
                                              fontSize: 16,
                                              fontStyle: analisis.valorRelacionAnormalAltoAlto != null ? FontStyle.normal : FontStyle.italic,
                                            ),
                                          ),
                                          Text(
                                            " mg/g",
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