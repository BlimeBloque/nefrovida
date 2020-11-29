import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/Secciones/CardBeneficiario.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionAnalisisLab.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionConsultas.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionEvaluacionesInicio.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionEvaluacionesFin.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionNotas.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionTamizaje.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionAntecedentes.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionFactorDeRiesgo.dart';

class BeneficiarioTabs extends StatefulWidget {
  final Beneficiario beneficiario;
  BeneficiarioTabs({Key key, @required this.beneficiario}) : super(key: key);
  @override
  _BeneficiarioTabsState createState() =>
      _BeneficiarioTabsState(this.beneficiario);
}

class _BeneficiarioTabsState extends State<BeneficiarioTabs> {
  Beneficiario beneficiario;

  _BeneficiarioTabsState(this.beneficiario);

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 9,
      child: Scaffold(
        appBar: AppBar(
          title: Text("Detalle Beneficiario"),
          centerTitle: true,
          bottom: TabBar(
            isScrollable: true,
            tabs: [
              Tab(text: "General"),
              Tab(text: "Antecedentes"),
              Tab(text: "Tamizajes"),
              Tab(text: "Evaluacion Inicial"),
              Tab(text: "Evaluacion Final"),
              Tab(text: "Consultas"),
              Tab(text: "Análisis"),
              Tab(text: "Notas"),
              Tab(text: "Factor de riesgo"),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            CardBeneficiario(beneficiario: this.beneficiario),
            SeccionAntecedentes(beneficiario: this.beneficiario),
            SeccionTamizaje(beneficiario: this.beneficiario),
            SeccionEvaluacionesInicio(beneficiario: this.beneficiario),
            SeccionEvaluacionesFin(beneficiario: this.beneficiario),
            SeccionConsultas(beneficiario: this.beneficiario),
            SeccionAnalisisLab(beneficiario: this.beneficiario),
            SeccionNotas(beneficiario: this.beneficiario),
            SeccionFactorDeRiesgo(beneficiario: this.beneficiario),
          ],
        ),
        drawer: new NefrovidaDrawer(),
      ),
    );
  }
}
