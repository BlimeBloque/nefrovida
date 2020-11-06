import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';

class BuscarBeneficiariosScreen extends StatelessWidget {
  
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Beneficiarios"),
        centerTitle: true,
      ),
      drawer: new NefrovidaDrawer(),
    );
  }
}