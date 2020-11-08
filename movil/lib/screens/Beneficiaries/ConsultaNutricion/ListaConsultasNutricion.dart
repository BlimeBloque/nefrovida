import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/components/HttpHelper.dart';

class ListaConsultasNutricion extends StatelessWidget {
  HttpHelper consultaHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<ConsultaNutricion> _consultas;
  
  ListaConsultasNutricion({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: consultaHelper.getConsultas(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          if(snapshot.hasData != null)
          {
            _consultas = snapshot.data;
            if(_consultas == null)
            {
              return Center(child: CircularProgressIndicator());
            }
            else
            {
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _consultas.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.food_bank_outlined),
                    title: Center(child:Text("Consulta del: "+_consultas[index].fecha)),
                    onTap: () {},
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