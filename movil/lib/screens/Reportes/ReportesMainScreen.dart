import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class ReportesMainScreen extends StatelessWidget {
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Reportes"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}