import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/classes/TipoNota.dart';

class AgregarNotaScreen extends StatelessWidget {

  static const String route = '/beneficiariosDetalle';

  final int id;

  AgregarNotaScreen({Key key, @required this.id}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Agregar Nota de Beneficiario"),
        centerTitle: true,
      ),
      body: AgregarNotaForm(id: id),
      drawer: new NefrovidaDrawer(),
    );
  }
}


class AgregarNotaForm extends StatefulWidget {

  final int id;
  AgregarNotaForm({Key key,@required this.id}) : super(key: key);
  @override
  _AgregarNotaFormState createState() => _AgregarNotaFormState();
}

class _AgregarNotaFormState extends State<AgregarNotaForm> {

  HttpHelper tipoHelper = new HttpHelper();
  String _contenido;
  int _idTipoNota;
  int _idBeneficiario;
  String _url_archivo;
  String _tituloNota;
  List<TipoNota> _tiposNotas;
  TipoNota _selectedTipo;

   void initState()
  {
    super.initState();
  }

  List<DropdownMenuItem<TipoNota>> buildDropDownMenuItems(List tipos){
    List<DropdownMenuItem<TipoNota>> items = List();
    for(TipoNota tipo in tipos){
      items.add(
        DropdownMenuItem(
          value: tipo,
          child: new Text(tipo.nombre),
        )
      );
    }
    return items;
  }

  onChangeDropdownItem(TipoNota selected){
    setState(() {
      _selectedTipo = selected;  
    });
  }

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();  

  Widget _buildContenido(){
    return TextFormField(
      maxLines: 8,
      maxLength: 1024,
      decoration: InputDecoration(
          labelText: 'Comentario',
          border: const OutlineInputBorder()
        ),
      validator: (String value) {
        if(value.isEmpty){
          return 'El comentario es requerido';
        }
      },
      onSaved: (String value){
        _contenido = value;
      },
    );
  }

    Widget _buildTituloNota(){
    return TextFormField(
      maxLength: 255,
      decoration: InputDecoration(
          labelText: 'Titulo de la nota',
          border: const OutlineInputBorder()
        ),
      validator: (String value) {
        if(value.isEmpty){
          return 'El titulo es requerido';
        }
      },
      onSaved: (String value){
        _tituloNota = value;
      },
    );
  }

  Widget _buildidTipoNota(){
    return FutureBuilder(
      future: tipoHelper.getAllTiposNotas(),
      builder: (BuildContext context, AsyncSnapshot snapshot){
        if(snapshot.hasData != null){
          _tiposNotas = snapshot.data.toList();
           
          print(_tiposNotas);
          if (_tiposNotas == null){
            return Center(child: CircularProgressIndicator());
          } else {
            List<DropdownMenuItem<TipoNota>>_items = buildDropDownMenuItems(_tiposNotas);
            _selectedTipo = _tiposNotas[3];
            return Container(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                mainAxisAlignment: MainAxisAlignment.end,
                  children: <Widget>[
                    DropdownButton(
                      value: _selectedTipo,
                      items: _items,
                      onChanged: onChangeDropdownItem,
                )
                ], 
              )
            );
          }
        }
      },
    );
  }

  Widget _buildURLArchivo(){
    return null;
  }


  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(24),
      child: SingleChildScrollView(
        child: Column(
          children: <Widget>[
              Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    _buildTituloNota(),
                     _buildidTipoNota(),
                    _buildContenido(),
                 //   _buildURLArchivo(),
                    SizedBox(height: 100),
                    RaisedButton(
                      child: Text('Guardar', style: TextStyle(color: Colors.blue, fontSize: 16),),
                      onPressed: () {
                        if(!_formKey.currentState.validate()){
                          return;
                        }
                        _formKey.currentState.save();
                        print(_contenido);
                        print(_selectedTipo.idTipoNombre);
                        _idBeneficiario = widget.id;
                        print(_idBeneficiario);
                       print(_tituloNota);
                     //  print(_url_archivo);
                      },
                    )
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}