import 'package:flutter/material.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/components/HttpHelper.dart';
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
      body: TablaJornadas(),
    );
  }
}


class TablaJornadas extends StatefulWidget {
  TablaJornadas({Key key}) : super(key: key);
  @override
  _TablaJornadasState createState() => _TablaJornadasState();
}

class _TablaJornadasState extends State<TablaJornadas> {
  HttpHelper jornadaHelper = new HttpHelper();
  TextEditingController _textController;
  String _nombre;
  List<Jornada> _jornadas;
  List<Jornada> _jornadasPorMostrar;

  void initState()
  {
    super.initState();
    _textController = new TextEditingController();
    _jornadasPorMostrar = _jornadas;
  }

  void dispose()
  {
    _textController.dispose();
    super.dispose();
  }

  _onChanged(String value) {
    setState(() {
      _jornadasPorMostrar = _jornadas
          .where((jornada) => jornada.nombre.toLowerCase().contains(value.toLowerCase()))
          .toList();
    });
    setState((){
      _nombre = value;
    });
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
              future: jornadaHelper.getAllJornadas(),
              builder: (BuildContext context, AsyncSnapshot snapshot){
                if(snapshot.hasData != null)
                {
                  _jornadas = snapshot.data;
                  _jornadasPorMostrar = _nombre == null ? _jornadas : _jornadasPorMostrar;
                  if(_jornadas == null)
                  {
                    return Center(child: CircularProgressIndicator());
                  }
                  else
                  {
                    return Center(
                      child: SingleChildScrollView(
                        scrollDirection: Axis.vertical,
                        child: _jornadasPorMostrar != null && _jornadasPorMostrar.length != 0 ?
                        DataTable(
                          columns: [
                            DataColumn(
                              label: Text('Nombre'),
                              tooltip: 'Nombre de la Jornada',
                            ),
                            DataColumn(
                              label: Text('Fecha'),
                              tooltip: 'Fecha de la Jornada',
                            ),
                            DataColumn(
                              label: Text('Localidad'),
                              tooltip: 'Localidad de la Jornada',
                            ),
                          ],
                          rows: _jornadasPorMostrar.map((jornada) => DataRow(
                              cells: [
                                DataCell(
                                  Center( 
                                    child: Text(
                                      jornada.nombre,
                                      softWrap: true,
                                      overflow: TextOverflow.clip,
                                      textAlign: TextAlign.center,
                                    ),
                                  ),
                                  onTap: () { //dejar comentado hasta tener interfaz de detalle de jornada
                                    //Navigator.push(context, MaterialPageRoute(builder: (context) => DetalleJornadaScreen(jornada: jornada)));
                                  }
                                ),
                                DataCell(
                                  Center( 
                                    child: Text(
                                      jornada.fecha,
                                      softWrap: true,
                                      overflow: TextOverflow.clip,
                                      textAlign: TextAlign.center,
                                    ),
                                  ),
                                ),
                                DataCell(
                                  Center( 
                                    child: Text(
                                      jornada.localidad,
                                      softWrap: true,
                                      overflow: TextOverflow.clip,
                                      textAlign: TextAlign.center,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ).toList(),
                        )
                        :
                        Text('No se encontró ninguna jornada.')
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
