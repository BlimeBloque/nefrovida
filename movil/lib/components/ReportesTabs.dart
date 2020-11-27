import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class ReportesTabs extends StatefulWidget {

  @override
  _ReportesTabsState createState() =>
      _ReportesTabsState();
}

class _ReportesTabsState extends State<ReportesTabs> {

  _ReportesTabsState();

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 8,
      child: Scaffold(
        appBar: AppBar(
          title: Text("Reporte General"),
          centerTitle: true,
          bottom: TabBar(
            isScrollable: true,
            tabs: [
              Tab(text: "Sociodemográfico"),
              Tab(text: "Pruebas Realizadas"),
              Tab(text: "Personas Tamizadas"),
              Tab(text: "IMC"),
              Tab(text: "Factor de Riesgo"),
              Tab(text: "Evaluación Médica"),
              Tab(text: "Evaluación Nutricia"),
              Tab(text: "Evaluación Psicológica"),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(child: Text("Sociodemográfico")),
            Center(child: Text("Pruebas Realizadas")),
            Center(child: Text("Personas Tamizadas")),
            Center(child: Text("IMC")),
            Center(child: Text("Factor de Riesgo")),
            Center(child: Text("Evaluación Médica")),
            Center(child: Text("Evaluación Nutricia")),
            Center(child: Text("Evaluación Psicológica")),
          ],
        ),
        drawer: new NefrovidaDrawer(),
      ),
    );
  }
}
