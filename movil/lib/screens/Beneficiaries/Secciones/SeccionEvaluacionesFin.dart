import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Evaluaciones.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionEvaluacionesInicio.dart';


class SeccionEvaluacionesFin extends StatelessWidget {
  final Beneficiario beneficiario;
  SeccionEvaluacionesFin({Key key, @required this.beneficiario}) : super(key: key);


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
                leading: Icon(Icons.bar_chart),
                title: Text(
                  'Evaluación Final',
                  style:
                      const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
                ),
              ),
              EvaluacionInicial(beneficiario: beneficiario),
            ],
          ),
        ),
      ),
      
    );
  }
}


class EvaluacionFinal extends StatelessWidget {

  HttpHelper evalFinalHelper = HttpHelper();
  List<Evaluacion> _evaluaciones;
  final Beneficiario beneficiario;

  EvaluacionFinal({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: evalFinalHelper.getEvaluacionFinal(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData != null) {
            _evaluaciones = snapshot.data;
            if (_evaluaciones == null) {
              return Center(child: CircularProgressIndicator());
            } else {
              if (_evaluaciones.length <= 0) {
                return Center(
                    child: Text(
                        "Este beneficiario no tiene evaluación final registrada.",
                        textAlign: TextAlign.center));
              }
              print(_evaluaciones);
              return ListView.builder(
                physics: const NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                itemCount: _evaluaciones.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    title:Text( (index+ 1).toString() +". "+  _evaluaciones[index].pregunta),
                    subtitle: Text("Respuesta: " +_evaluaciones[index].respuesta),
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
