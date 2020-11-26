import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Microalbuminuria.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/Microalbuminuria/DetalleMicroalbuminuriaScreen.dart';
import 'package:movil/screens/Beneficiaries/AnalisisLab/QuimicaSanguinea/DetalleQuimicaSanguineaScreen.dart';

class ListaMicroalbuminuria extends StatelessWidget {
  HttpHelper analisisHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<MicroalbuminuriaGeneral> _analisis;
  
  ListaMicroalbuminuria({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: analisisHelper.getMicroalbuminurias(beneficiario.idBeneficiario),
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
                return Center(child: Text("No hay análisis de microalbuminuría para este beneficiario.", textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _analisis.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.bubble_chart),
                    title: Center(child:Text("Microalbuminuría del: "+_analisis[index].fecha)),
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context) 
                      => DetalleMicroalbuminuriaScreen(microalbuminuriaGeneral: _analisis[index], beneficiario: beneficiario)));
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