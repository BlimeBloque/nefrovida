import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/screens/Reportes/Secciones/ReporteIMC.dart';
import 'package:movil/screens/Reportes/Secciones/ReportePruebasRealizadas.dart';

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
      length: 12,
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
              Tab(text: "IMC General"),
              Tab(text: "IMC Por Sexo"),
              Tab(text: "Consultas Nutricias de Alto Riesgo"),
              Tab(text: "Evaluación Médica Inicial"),
              Tab(text: "Evaluación Médica Final"),
              Tab(text: "Evaluación Nutricia Inicial"),
              Tab(text: "Evaluación Nutricia Final"),
              Tab(text: "Evaluación Psicológica Inicial"),
              Tab(text: "Evaluación Psicológica Final"),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            Center(child: Text("Sociodemográfico")),
            ReportePruebasRealizadas(),
            Center(child: Text("Personas Tamizadas")),
            ReporteIMC(),
            Tab(text: "IMC Por Sexo"),
            Tab(text: "Consultas Nutricias de Alto Riesgo"),
            Tab(text: "Evaluación Médica Inicial"),
            Tab(text: "Evaluación Médica Final"),
            Tab(text: "Evaluación Nutricia Inicial"),
            Tab(text: "Evaluación Nutricia Final"),
            Tab(text: "Evaluación Psicológica Inicial"),
            Tab(text: "Evaluación Psicológica Final"),
          ],
        ),
        drawer: new NefrovidaDrawer(),
      ),
    );
  }
}
