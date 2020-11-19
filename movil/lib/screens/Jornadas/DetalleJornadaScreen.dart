import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

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
        child: Card(
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
                Text(
                  'Fecha:   ${setfecha(jornada.fecha)}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                  ),
                ),
                Text(
                  'Localidad:   ${jornada.localidad}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                  ),
                ),
                Text(
                  'Municipio:   ${jornada.municipio}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                  ),
                ),
                Text(
                  'Estado:   ${jornada.nombreEstado}',
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w300,
                  ),
                ),
              ]),
        ),
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}
