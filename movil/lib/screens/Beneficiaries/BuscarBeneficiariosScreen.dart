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

class TablaBeneficiarios extends StatefulWidget {
  TablaBeneficiarios({Key key}) : super(key: key);
  @override
  _TablaBeneficiariosState createState() => _TablaBeneficiariosState();
}

class _TablaBeneficiariosState extends State<TablaBeneficiarios> {
  HttpHelper benefHelper = new HttpHelper();
  TextEditingController _textController;
  String _nombre;
  List<Beneficiario> _beneficiarios;
  List<Beneficiario> _beneficiariosPorMostrar;

  void initState()
  {
    super.initState();
    _textController = new TextEditingController();
    _beneficiariosPorMostrar = _beneficiarios;
  }

  void dispose()
  {
    _textController.dispose();
    super.dispose();
  }

  _onChanged(String value) {
    setState(() {
      _beneficiariosPorMostrar = _beneficiarios
          .where((beneficiario) => beneficiario.nombreBeneficiario.toLowerCase().contains(value.toLowerCase()))
          .toList();
    });
    setState((){
      _nombre = value;
    });
    print(_beneficiariosPorMostrar);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(8.0),
      child: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            Padding(
              padding: EdgeInsets.all(10.0),
              child: Center(child: Text('Nota: solo se muestran los beneficiarios activos en el sistema.')),
            ),
            Padding(
              padding: EdgeInsets.all(10.0),
              child: TextField(
                controller: _textController,
                decoration: InputDecoration(
                  hintText: 'Buscar por Nombre',
                  suffixIcon: Icon(Icons.search),
                ),
                onChanged: _onChanged,
              ),
            ),
            FutureBuilder(
              future: benefHelper.getAllBeneficiarios(),
              builder: (BuildContext context, AsyncSnapshot snapshot){
                if(snapshot.hasData != null)
                {
                  //solo mostrar beneficiarios activos
                  _beneficiarios = snapshot.data.where((beneficiario) => beneficiario.activo == 1).toList();
                  _beneficiariosPorMostrar = _nombre == null ? _beneficiarios : _beneficiariosPorMostrar;
                  if(_beneficiarios == null)
                  {
                    return Center(child: CircularProgressIndicator());
                  }
                  else
                  {
                    return Center(
                      child: SingleChildScrollView(
                        scrollDirection: Axis.vertical,
                        child: _beneficiariosPorMostrar != null && _beneficiariosPorMostrar.length != 0 ?
                        DataTable(
                          columns: [
                            DataColumn(
                              label: Text('Nombre'),
                              tooltip: 'Nombre Completo',
                              numeric: false,
                            ),
                            DataColumn(
                              label: Text('Edad'),
                              tooltip: 'Edad',
                            ),
                            DataColumn(
                              label: Text('Sexo'),
                              tooltip: 'Sexo',
                              numeric: false,
                            ),
                          ],
                          rows: _beneficiariosPorMostrar.map((beneficiario) => DataRow(
                              cells: [
                                DataCell(
                                  Text(
                                    beneficiario.nombreBeneficiario,
                                    softWrap: true,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                  onTap: () {}
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
                        )
                        :
                        Text('No se encontró ningún beneficiario.')
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
          ],
        ),
      ),
    );
  }
}