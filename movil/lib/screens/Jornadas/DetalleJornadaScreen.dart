import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/classes/BenefJornadas.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Beneficiaries/AgregarBeneficiarioScreen.dart';

class DetalleJornadaScreen extends StatelessWidget {
  static const String route = '/jornadaDetalle';

  final Jornada jornada;

  DetalleJornadaScreen({Key key, @required this.jornada}) : super(key: key);

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
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle de Jornada"),
        centerTitle: true,
      ),
      body: Padding(
        padding: EdgeInsets.all(8),
        child: Column(
                  children: <Widget>[Card(
            child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  ListTile(
                    leading: Icon(Icons.access_time),
                    title: Text(
                      jornada.nombre,
                      style: const TextStyle(
                          fontSize: 24, fontWeight: FontWeight.bold),
                    ),
                  ),
                ListTile(
                  leading: Icon(Icons.calendar_today),
                  title: Text(
                    'Fecha:   ${setfecha(jornada.fecha)}',
                    style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                    ),
                  ),
                ),
                ListTile(
                  leading: Icon(Icons.location_on),
                  title: Text(
                    'Localidad:   ${jornada.localidad}',
                    style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                    ),
                  ),
                ),
                ListTile(
                  leading: Icon(Icons.location_city),
                  title: Text(
                    'Municipio:   ${jornada.municipio}',
                    style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                    ),
                  ),
                ),
                ListTile(
                  leading: Icon(Icons.map_outlined),
                  title: Text(
                    'Estado:   ${jornada.nombreEstado}',
                    style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                    ),
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(left: 335.0),
                  child: IconButton(
                  alignment: Alignment.bottomRight,
                  icon: Icon(Icons.add, color: Colors.green,), 
                  onPressed: () {
                    Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => AgregarBeneficiarioScreen(
                                  jornada: jornada)
                                  )
                                  );
                  }
                  )
                ),
              ]),
        ),
                BeneficiariosJornadasWidget(jornada: jornada)
        ]),
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}

class BeneficiariosJornadasWidget extends StatelessWidget {
  HttpHelper benefsHelper = new HttpHelper();
  List<BenefJornada> _beneficiarios;
  final Jornada jornada;
  BeneficiariosJornadasWidget({Key key, @required this.jornada}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      child: FutureBuilder(
        future: benefsHelper.getBeneficiariosJornadas(jornada.idJornada.toString()),
        builder: (BuildContext context, AsyncSnapshot snapshot) {
          if (snapshot.hasData != null) {
            _beneficiarios = snapshot.data;
            if (_beneficiarios == null) {
              return Center(child: CircularProgressIndicator());
            } else {
              if (_beneficiarios.length <= 0) {
                return Center(
                    child: Text(
                        "Esta jornada no tiene ningún beneficiario registrado.",
                        textAlign: TextAlign.center));
              }
              print(_beneficiarios);
              return ListView.builder(
                physics: const NeverScrollableScrollPhysics(),
                shrinkWrap: true,
                itemCount: _beneficiarios.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    title:Text(_beneficiarios[index].nombreBeneficiario)
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
