import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/components/HttpHelper.dart';

class DetalleBeneficiarioScreen extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Detalle Beneficiario"),
        centerTitle: true,
      ),
      body: CardBeneficiario(),
      drawer: new NefrovidaDrawer(),
    );
  }
}

class CardBeneficiario extends StatelessWidget {

  CardBeneficiario({Key key}) : super(key: key);
  HttpHelper benefHelper = new HttpHelper();


  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: FutureBuilder(
        //Recive como parametro el id del beneficiario a buscar
        future: benefHelper.getSingleBeneficiario(),
        builder: (BuildContext context, AsyncSnapshot snapshot){
          if(snapshot.hasData != null){
            List<Beneficiario> beneficiarios = snapshot.data;
            if(beneficiarios == null){
              return Center(child: CircularProgressIndicator());
            } else {
              return Center(

              );
            }
          } else {
            return Center(child: CircularProgressIndicator());
          }
        }
      ),
    );
  }
}

/*
                child: Card(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: <Widget>[
                      ListTile(
                        leading: Icon(Icons.account_circle_outlined),
                        title: Text(
                          'Nombre Del Beneifciario',
                          style: const TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold
                          ),
                        ),
                      ),
                      Text(
                        'Nacimiento:',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(
                        'Sexo: ',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(
                        'Escolaridad: ',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(
                        'Telefono: ',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(
                        'Direccion:',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(
                        'De Seguimiento: ',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Text(''
                          'Activo: ',
                        style: const TextStyle(
                            fontSize: 16
                        ),
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: <Widget>[
                          IconButton(
                            icon: Icon(Icons.edit),
                            tooltip: 'Editar Beneficiario',
                            onPressed: () {
                            },
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
*/

