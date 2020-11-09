import 'package:flutter/material.dart';
import 'package:movil/providers/OktaProvider.dart';
import 'package:movil/screens/Beneficiaries/BuscarBeneficiariosScreen.dart';
import 'package:movil/screens/Beneficiaries/DetalleBeneficiarioScreen.dart';
import 'package:movil/screens/Jornadas/BuscarJornadasScreen.dart';
import 'package:movil/screens/LoginScreen.dart';
import 'package:movil/screens/MainScreen.dart';
import 'package:movil/screens/Reportes/ReportesMainScreen.dart';
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
          'main': (ctx) => MainScreen(),
          'login': (ctx) => LoginScreen(),
          'beneficiarios': (ctx) => BuscarBeneficiariosScreen(),
          'jornadas': (ctx) => BuscarJornadasScreen(),
          'reportes': (ctx) => ReportesMainScreen(),
        },
      ),
    );
  }
}