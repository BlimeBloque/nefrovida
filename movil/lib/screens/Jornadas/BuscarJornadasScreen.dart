import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class BuscarJornadasScreen extends StatelessWidget {
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Jornadas"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}