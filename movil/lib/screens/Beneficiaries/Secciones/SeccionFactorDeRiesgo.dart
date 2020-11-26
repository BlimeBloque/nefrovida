import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/FactorDeRiesgo.dart';
import 'package:movil/components/HttpHelper.dart';


class SeccionFactorDeRiesgo extends StatelessWidget {
  final Beneficiario beneficiario;
  SeccionFactorDeRiesgo({Key key, @required this.beneficiario}) : super(key: key);


  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10.0),
      child: SingleChildScrollView(
        child: Card(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              ListTile(
                leading: Icon(Icons.priority_high_rounded),
                title: Text(
                  'Factor de Riesgo',
                  style:
                      const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
              FactorDeRiesgo(beneficiario: beneficiario),
            ],
          ),
        ),
      ),
      
    );
  }
}


class FactorDeRiesgo extends StatelessWidget {

  HttpHelper riesgoHelper = HttpHelper();
  List<FactorDeRiesgoItem> _factores;
  final Beneficiario beneficiario;

  FactorDeRiesgo({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: riesgoHelper.getFactorRiesgo(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData != null) {
            _factores = snapshot.data;
            if (_factores == null) {
              return Center(child: CircularProgressIndicator());
            } else {
              if (_factores.length <= 0) {
                return Center(
                    child: Text(
                        "Este beneficiario no tiene un formulario de factor de riesgo registrado.",
                        textAlign: TextAlign.center));
              }
              print(_factores);
              return ListView.builder(
                physics: const NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                itemCount: _factores.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    title:Text( (index+ 1).toString() +". "+  _factores[index].pregunta),
                    subtitle: Text("Respuesta: " +_factores[index].respuesta),
                  );
                },
              );
            }
          } else {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }
}
