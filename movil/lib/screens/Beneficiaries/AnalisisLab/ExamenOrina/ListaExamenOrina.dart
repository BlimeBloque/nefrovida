import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ExamenOrina.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/ExamenOrina/DetalleExamenOrinaScreen.dart';

class ListaExamenOrina extends StatelessWidget {
  HttpHelper analisisHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<ExamenOrinaGeneral> _analisis;
  
  ListaExamenOrina({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: analisisHelper.getExamenesOrina(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          if(snapshot.hasData != null)
          {
            _analisis = snapshot.data;
            if(_analisis == null)
            {
              return Center(child: CircularProgressIndicator());
            }
            else
            {
              if(_analisis.length <= 0)
              {
                return Center(child: Text("No hay examenes de orina registrados para este beneficiario.", textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _analisis.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.bubble_chart),
                    title: Center(child:Text("Examen General de Orina del: "+_analisis[index].fecha)),
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) 
                      => DetalleExamenOrinaScreen(examenOrinaGeneral: _analisis[index], beneficiario: beneficiario)));
                    },
                    trailing: Icon(Icons.navigate_next_rounded),
                  );
                },
              );
            }
          }
          else
          {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }
}