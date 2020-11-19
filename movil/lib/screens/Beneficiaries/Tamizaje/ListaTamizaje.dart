import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Tamizaje.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/screens/Beneficiaries/Tamizaje/DetalleTamizaje.dart';

class ListaTamizaje extends StatelessWidget {
  final HttpHelper consultaHelper = HttpHelper();
  final Beneficiario beneficiario;

  List<TamizajeInfo> _consultas;

  ListaTamizaje({Key key, @required this.beneficiario}) : super(key: key);

  setfecha(String n) {
    var arr = [];
    arr = n.split("-");
    if (arr[1] == '01') {
      arr[1] = 'Ene';
    } else if (arr[1] == '02') {
      arr[1] = 'Feb';
    } else if (arr[1] == '03') {
      arr[1] = 'Mar';
    } else if (arr[1] == '04') {
      arr[1] = 'Abr';
    } else if (arr[1] == '05') {
      arr[1] = 'May';
    } else if (arr[1] == '06') {
      arr[1] = 'Jun';
    } else if (arr[1] == '07') {
      arr[1] = 'Jul';
    } else if (arr[1] == '08') {
      arr[1] = 'Ago';
    } else if (arr[1] == '09') {
      arr[1] = 'Sep';
    } else if (arr[1] == '10') {
      arr[1] = 'Oct';
    } else if (arr[1] == '11') {
      arr[1] = 'Nov';
    } else if (arr[1] == '12') {
      arr[1] = 'Dic';
    }

    var fecha = arr[2] + '/' + arr[1] + '/' + arr[0];
    return fecha;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: consultaHelper.getAllTamizajes(beneficiario.idBeneficiario),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData != null) {
            _consultas = snapshot.data;
            if (_consultas == null) {
              return Center(child: CircularProgressIndicator());
            } else {
              if (_consultas.length <= 0) {
                return Center(
                    child: Text(
                        "No hay tamizajes registradas para este beneficiario.",
                        textAlign: TextAlign.center));
              }
              return ListView.builder(
                shrinkWrap: true,
                itemCount: _consultas.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    leading: Icon(Icons.food_bank_outlined),
                    title: Center(
                        child: Text("Tamizaje del: " +
                            setfecha(_consultas[index].fecha.split(' ')[0]))),
                    onTap: () {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => DetalleTamizaje(
                                  tamizaje: _consultas[index],
                                  beneficiario: beneficiario)));
                    },
                    trailing: Icon(Icons.navigate_next_rounded),
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
