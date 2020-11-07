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
      body: Center(
        child: OutlineButton(
          onPressed: () {
            Navigator.pop(context);
            Navigator.pushNamed(context, 'beneficiariosDetalle');
          },
          child: Text('Ir a detalle'),
        ),
      ),
      drawer: new NefrovidaDrawer(),
      body: TablaBeneficiarios(),
    );
  }
}

class TablaBeneficiarios extends StatelessWidget {
  TablaBeneficiarios({Key key}) : super(key: key);
  HttpHelper benefHelper = new HttpHelper();

  calcularEdad(fechaNacimiento)
  {

  }

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
              return Center(
                child: SingleChildScrollView(
                  scrollDirection: Axis.vertical,
                  child: DataTable(
                    columns: [
                      DataColumn(
                        label: Text('Nombre'),
                        tooltip: 'Nombre Completo',
                        numeric: false,
                      ),
                      DataColumn(
                        label: Text('Edad'),
                        tooltip: 'Edad',
                        numeric: true,
                      ),
                      DataColumn(
                        label: Text('Sexo'),
                        tooltip: 'Sexo',
                        numeric: false,
                      ),
                    ],
                    rows: beneficiarios.map(
                      (beneficiario) => DataRow(
                        cells: [
                          DataCell(
                            Text(
                              beneficiario.nombreBeneficiario,
                              softWrap: true,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                          DataCell(
                            Text(
                              beneficiario.edad.toString(),
                              softWrap: true,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                          DataCell(
                            Text(
                              beneficiario.sexo,
                              softWrap: true,
                              overflow: TextOverflow.ellipsis,
                            ),
                          ),
                        ],
                      ),
                    ).toList(),
                  ),
                ),
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