import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaMedica.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/ConsultaMedica/DetalleConsultaMedicaScreen.dart';

class ListaConsultasMedicas extends StatelessWidget {
  HttpHelper consultaHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<ConsultaMedicaGeneral> _consultas;

  ListaConsultasMedicas({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: consultaHelper.getConsultasMedicas(beneficiario.idBeneficiario),
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
              if(_consultas.length <= 0)
              {
                return Center(child: Text("No hay consultas médicas registradas para este beneficiario.", textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _consultas.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.food_bank_outlined),
                    title: Center(child:Text("Consulta del: "+_consultas[index].fecha)),
                    onTap: () {
                      Navigator.push(context, MaterialPageRoute(builder: (context)
                      => DetalleConsultaMedicaScreen(consultaGeneral: _consultas[index], beneficiario: beneficiario)));
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