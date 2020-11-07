import 'package:flutter/material.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/components/HttpHelper.dart';
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
      body: TablaBeneficiarios(),
    );
  }
}

class TablaBeneficiarios extends StatelessWidget {
  TablaBeneficiarios({Key key}) : super(key: key);
  HttpHelper benefHelper = new HttpHelper();

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        future: benefHelper.getAllBeneficiarios(),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          if(snapshot.hasData != null)
          {
            List<Beneficiario> beneficiarios = snapshot.data;
            if(beneficiarios == null)
            {
              return Center(child: CircularProgressIndicator());
            }
            else
            {
              return ListView.builder(
                itemCount: beneficiarios.length,
                itemBuilder: (BuildContext context, int index) {
                  return ListTile(
                    title: Text(beneficiarios[index].nombreBeneficiario),
                  );
                },
              );
            }
          }
          else
          {
            return Center(child: CircularProgressIndicator());
          }
        },
      ),
    );
  }
}