import 'package:flutter/material.dart';

class NefrovidaDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            Container(
              height: 140,
              child: Image.asset(
                  'assets/images/nefrovida_large.png',
                  fit: BoxFit.fitWidth,
                  ),
              padding: EdgeInsets.all(10.0),
              color: Colors.blueGrey[50],
            ),
            ListTile(
              leading: Icon(Icons.home),
              title: Text('Menú Principal'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, 'main');
              },
            ),
            ListTile(
              leading: Icon(Icons.folder_shared),
              title: Text('Beneficiarios'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, 'beneficiarios');
              },
            ),
            ListTile(
              leading: Icon(Icons.schedule),
              title: Text('Jornadas'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, 'jornadas');
              },
            ),
            ListTile(
              leading: Icon(Icons.archive),
              title: Text('Reportes'),
              onTap: () {
                Navigator.pop(context);
                Navigator.pushNamed(context, 'reportes');
              },
            ),
            ListTile(
              leading: Icon(Icons.person),
              title: Text('Mi Perfil'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.exit_to_app),
              title: Text('Cerrar Sesión'),
              onTap: () {
                Navigator.pop(context);
              },
            ),
          ],
        ),
      );
  }
}