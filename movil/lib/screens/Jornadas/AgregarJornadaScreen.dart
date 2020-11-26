import 'dart:io';
import 'package:flutter/material.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/classes/Estado.dart';
import 'package:dio/dio.dart';
import 'package:path/path.dart';
import 'package:file_picker/file_picker.dart';

class AgregarJornadaScreen extends StatelessWidget {
  static const String route = '/jornadaAgregar';

  AgregarJornadaScreen({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Registrar Jornada"),
        centerTitle: true,
      ),
      body: AgregarJornadaForm(context: context),
      drawer: new NefrovidaDrawer(),
    );
  }
}

class AgregarJornadaForm extends StatefulWidget {
  final BuildContext context;
  AgregarJornadaForm({Key key, @required this.context}) : super(key: key);
  @override
  _AgregarJornadaState createState() => _AgregarJornadaState();
}

class _AgregarJornadaState extends State<AgregarJornadaForm> {
  HttpHelper tipoHelper = new HttpHelper();
  String _nombre;
  String _localidad;
  String _municipio;
  String _fecha = DateTime.now().toString().split(' ')[0];
  int _idEstado;
  List<Estado> _estadosColl;
  Estado _estadoSelected;

  void initState() {
    super.initState();
  }

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Widget _buildJNombre() {
    return TextFormField(
      maxLength: 191,
      decoration: InputDecoration(
          labelText: 'Nombre de la Jornada',
          border: const OutlineInputBorder()),
      validator: (String value) {
        if (value.isEmpty) {
          return 'Este campo es requerido';
        }
      },
      onSaved: (String value) {
        _nombre = value;
      },
    );
  }

  Widget _buildJLocalidad() {
    return TextFormField(
      maxLength: 191,
      decoration: InputDecoration(
          labelText: 'Localidad', border: const OutlineInputBorder()),
      validator: (String value) {
        if (value.isEmpty) {
          return 'Este campo es requerido';
        }
      },
      onSaved: (String value) {
        _localidad = value;
      },
    );
  }

  Widget _buildJMunicipio() {
    return TextFormField(
      maxLength: 191,
      decoration: InputDecoration(
          labelText: 'Municipio', border: const OutlineInputBorder()),
      validator: (String value) {
        if (value.isEmpty) {
          return 'Este campo es requerido';
        }
      },
      onSaved: (String value) {
        _municipio = value;
      },
    );
  }

  Future<void> _selectDate(BuildContext context) async {
    final DateTime d = await showDatePicker(
        context: context,
        initialDate: DateTime.now(),
        firstDate: DateTime(2000),
        lastDate: DateTime(2100),
        helpText: "Seleccione la fecha de la Jornada.",
        confirmText: "Confirmar",
        cancelText: "Cancelar",
        fieldLabelText: "Introduce la fecha manualmente.",
        fieldHintText: "Mes/Día/Año");
    if (d != null)
      setState(() {
        _fecha = _fecha = d.toString().split(' ')[0];
      });
  }

  Widget _buildJFecha(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
          border: Border(
            top: BorderSide(width: 1.0),
            left: BorderSide(width: 1.0),
            right: BorderSide(width: 1.0),
            bottom: BorderSide(width: 1.0),
          ),
          borderRadius: BorderRadius.all(Radius.circular(5))),
      child: Padding(
        padding: EdgeInsets.all(6.0),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[
            InkWell(
              child: Text(
                "Fecha:  " + _fecha,
                textAlign: TextAlign.center,
                style: TextStyle(color: Color(0xFF000000)),
              ),
            ),
            IconButton(
                icon: Icon(Icons.calendar_today),
                tooltip: "Presiona para seleccionar la fecha.",
                onPressed: () {
                  _selectDate(context);
                }),
          ],
        ),
      ),
    );
  }

  List<DropdownMenuItem<Estado>> buildDropDownMenuItems(List tipos) {
    List<DropdownMenuItem<Estado>> items = List();
    for (Estado tipo in tipos) {
      items.add(DropdownMenuItem(
        value: tipo,
        child: new Text(tipo.nombre),
      ));
    }
    return items;
  }

  onChangeDropdownItem(Estado selected) {
    setState(() {
      _estadoSelected = selected;
    });
  }

  Widget _buildJEstado() {
    return FutureBuilder(
      future: tipoHelper.getEstados(),
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        if (snapshot.hasData != null) {
          _estadosColl = snapshot.data.toList();
          if (_estadoSelected != null) {
            //_idEstado = _tiposNotas[_selectedTipo.idTipoNombre - 1];
            _estadoSelected = _estadosColl[_estadoSelected.id - 1];
          } else {
            _estadoSelected = _estadosColl[0];
          }
          if (_estadosColl == null) {
            return Center(child: CircularProgressIndicator());
          } else {
            List<DropdownMenuItem<Estado>> _items =
                buildDropDownMenuItems(_estadosColl);
            return Container(
                child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                DropdownButton(
                  value: _estadoSelected,
                  items: _items,
                  onChanged: onChangeDropdownItem,
                )
              ],
            ));
          }
        }
      },
    );
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
                  _buildJNombre(),
                  SizedBox(
                    height: 10,
                  ),
                  _buildJFecha(widget.context),
                  SizedBox(
                    height: 20,
                  ),
                  _buildJLocalidad(),
                  _buildJMunicipio(),
                  _buildJEstado(),
                  SizedBox(height: 100),
                  RaisedButton(
                    child: Text(
                      'Guardar',
                      style: TextStyle(color: Colors.blue, fontSize: 16),
                    ),
                    onPressed: () {
                      if (!_formKey.currentState.validate()) {
                        return;
                      }
                      _formKey.currentState.save();
                      //_idBeneficiario = widget.id;

                      tipoHelper.addJornada(_nombre, _fecha, _localidad,
                          _municipio, _estadoSelected.id);
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
