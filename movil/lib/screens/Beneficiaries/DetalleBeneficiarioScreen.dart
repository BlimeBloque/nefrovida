import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class DetalleBeneficiarioScreen extends StatelessWidget {


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle Beneficiario"),
        centerTitle: true,
      ),
      body: Card(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            ListTile(
              leading: Icon(Icons.account_circle_outlined),
              title: Text(
                  'Nombre Del Beneifciario',
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold
                ),
              ),
            ),
            Text(
                'Nacimiento: 06/01/2000',
              style: const TextStyle(
                fontSize: 16
              ),
            ),
            Text(
              'Sexo: Hombre',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Text(
                'Escolaridad: Universidad',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Text(
              'Telefono: 4425998787',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Text(
              'Direccion: direccion de mi casa',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Text(
              'De Seguimiento: No',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Text(''
                'Activo: Si',
              style: const TextStyle(
                  fontSize: 16
              ),
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                IconButton(
                  icon: Icon(Icons.edit),
                  tooltip: 'Editar Beneficiario',
                  onPressed: () {

                  },
                ),
              ],
            ),
          ],
        ),
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}