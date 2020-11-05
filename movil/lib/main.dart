import 'package:flutter/material.dart';
import 'package:movil/providers/OktaProvider.dart';
import 'package:movil/screens/LoginScreen.dart';
import 'package:movil/screens/MainScreen.dart';
import 'package:movil/services/AuthService.dart';

void main() => runApp((MyApp()));

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return AuthProvider(
      authService: new AuthOktaService(),
      child: MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: LoginScreen(),
        routes: {
          MainScreen.routeName: (ctx) => MainScreen(),
          LoginScreen.routeName: (ctx) => LoginScreen()
        },
      ),
    );
  }
}