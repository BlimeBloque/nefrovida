import 'package:flutter/material.dart';
import 'package:movil/providers/OktaProvider.dart';
import 'package:fluttertoast/fluttertoast.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

import 'dart:convert';

class MainScreen extends StatelessWidget {
  static const routeName = '/main';
  parseUser(Map<String, dynamic> json) {
    return json['name'] as String;
  }
  getUserName (BuildContext context) async {
    var userJson = await AuthProvider.of(context).authService.getUser();
    Map<String, dynamic> user = jsonDecode(userJson);
    return parseUser(user);
  }

  Widget build(BuildContext context) {
    return Scaffold(
      drawer: new NefrovidaDrawer(),
      appBar: AppBar(
        title: Text('Menú Principal'),
        centerTitle: true,
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[
              // FutureBuilder(
              //   future: getUserName(context),
              //   builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
              //     if(!snapshot.hasData) return Text('Hola');

              //     final String userName = snapshot.data;
              //     return Text('Hola ${userName}');
              //   },
              // ),
              Text(
                'Bienvenido a Nefrosoftware.'
              ),
              Container(
                height: 140,
                child: Image.asset(
                    'assets/images/blime.png',
                    fit: BoxFit.fitWidth,
                    ),
              ),
              Text(
                '© 2020 Blime Todos los derechos reservados.'
              ),
            ],
          ),
        ),
      ),
    );
  }
}