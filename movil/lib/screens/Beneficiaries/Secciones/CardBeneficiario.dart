import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/Notas/AgregarNotaScreen.dart';

class CardBeneficiario extends StatelessWidget {
  final Beneficiario beneficiario;
  CardBeneficiario({Key key, @required this.beneficiario}) : super(key: key);

  boolToString(int b) {
    if (b == 1) {
      return 'Si';
    } else {
      return 'No';
    }
  }

  getSexo(String s) {
    if (s == 'H') {
      return 'Hombre';
    } else {
      return 'Mujer';
    }
  }

  getEscolaridad(int e) {
    if (e == 1) {
      return 'Primaria';
    } else if (e == 2) {
      return 'Secundaria';
    } else if (e == 3) {
      return 'Preparatoria';
    } else if (e == 4) {
      return 'Universidad';
    } else {
      return 'Analfabeta';
    }
  }

  getNacimiento(String n) {
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
      child: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.account_circle_outlined),
              title: Text(
                beneficiario.nombreBeneficiario,
                style:
                    const TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
            ),
            ListTile(
              leading: Icon(Icons.calendar_today),
              title: Text(
                'Nacimiento: ${getNacimiento(beneficiario.fechaNacimiento)}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.person_pin_circle_rounded),
              title: Text(
                'Sexo: ${getSexo(beneficiario.sexo.toString())}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.school),
              title: Text(
                'Escolaridad: ${getEscolaridad(beneficiario.idEscolaridad)}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.phone),
              title: Text(
                'Telefono: ${beneficiario.telefono}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.location_on),
              title: Text(
                'Direccion: ${beneficiario.direccion}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.check_box),
              title: Text(
                'De Seguimiento: ${boolToString(beneficiario.seguimiento)}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.arrow_forward_ios),
              title: Text(
                'Activo: ${boolToString(beneficiario.activo)}',
                style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.w300,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
