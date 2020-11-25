import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Antecedentes.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/Antecedentes/DetalleAntecedentesScreen.dart';

class ListaAntecedentes extends StatelessWidget {
  HttpHelper antecedentesHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<AntecedentesGeneral> _antecedentes;

  ListaAntecedentes({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: antecedentesHelper.getAntecedentes(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          if(snapshot.hasData != null)
          {
            _antecedentes = snapshot.data;
            if(_antecedentes == null)
            {
              return Center(child: CircularProgressIndicator());
            }
            else
            {
              if(_antecedentes.length <= 0)
              {
                return Center(child: Text("No hay antecedentes registrados para este beneficiario.", textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _antecedentes.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.food_bank_outlined),
                    title: Center(child:Text("Antecedentes del: "+_antecedentes[index].fecha)),
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context)
                      => DetalleAntecedentesScreen(antecedentesGeneral: _antecedentes[index], beneficiario: beneficiario)));
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