import 'package:flutter/material.dart';
import 'package:movil/providers/OktaProvider.dart';
import 'package:movil/screens/MainScreen.dart';

class LoginScreen extends StatelessWidget {
  static const routeName = '/login';

  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Container(
          child: RaisedButton(
            color: Colors.blue,
            textColor: Colors.black,
            onPressed: () async {
              await AuthProvider.of(context).authService.authorize();
              Navigator.of(context).pushNamed(MainScreen.routeName);
            },
            child: Text('Authorize'),
          ),
        ),
      ),
    );
  }
}
