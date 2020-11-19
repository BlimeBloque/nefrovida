import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/screens/Beneficiaries/Secciones/CardBeneficiario.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionAnalisisLab.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionConsultas.dart';
import 'package:movil/screens/Beneficiaries/Secciones/SeccionNotas.dart';

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
      length: 8,
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
              Tab(text: "Evaluaciones"),
              Tab(text: "Consultas"),
              Tab(text: "Análisis"),
              Tab(text: "Notas"),
              Tab(text: "Evidencias"),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            CardBeneficiario(beneficiario: this.beneficiario),
            Center(child: Text("Antecedentes")),
            Center(child: Text("Tamizajes")),
            Center(child: Text("Evaluaciones")),
            SeccionConsultas(beneficiario: this.beneficiario),
            SeccionAnalisisLab(beneficiario: this.beneficiario),
            SeccionNotas(beneficiario: this.beneficiario),
            Center(child: Text("Evidencias")),
          ],
        ),
        drawer: new NefrovidaDrawer(),
      ),
    );
  }
}
