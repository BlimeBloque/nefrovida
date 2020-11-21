import 'dart:io';
import 'package:flutter/material.dart';
import 'package:movil/classes/Escolaridad.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/components/NefrovidaDrawer.dart';
import 'package:movil/components/HttpHelper.dart';

class AgregarBeneficiarioScreen extends StatelessWidget {
  static const String route = '/beneficiariosDetalle';

  final Jornada jornada;

  AgregarBeneficiarioScreen({Key key, @required this.jornada}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Agregar Nota de Beneficiario"),
        centerTitle: true,
      ),
      body: AgregarBeneficiarioForm(jornada: jornada),
      drawer: new NefrovidaDrawer(),
    );
  }
}

class AgregarBeneficiarioForm extends StatefulWidget {
  final Jornada jornada;
  AgregarBeneficiarioForm({Key key, @required this.jornada}) : super(key: key);
  @override
  _AgregarBeneficiarioFormState createState() => _AgregarBeneficiarioFormState();
}

class _AgregarBeneficiarioFormState extends State<AgregarBeneficiarioForm> {

  HttpHelper benefHelper = new HttpHelper();
  
  String _nombreBeneficiario;
  List<Escolaridad> _escolaridades;
  Escolaridad _selectedEscolaridad;
  String _sexo;
  String _telefono;
  String _direccion;
  bool _activo;
  String _fechaNacimiento;
  bool _seguimiento = false;
  int _idJornada;
  int _radioValue = 0;


  void initState() {
    super.initState();
  }


  List<DropdownMenuItem<Escolaridad>> buildDropDownMenuItems(List escolaridades) {
    List<DropdownMenuItem<Escolaridad>> items = List();
    for (Escolaridad escolaridad in escolaridades) {
      items.add(DropdownMenuItem(
        value: escolaridad,
        child: new Text(escolaridad.nombre),
      ));
    }
    return items;
  }

  onChangeDropdownItem(Escolaridad selected) {
    setState(() {
      _selectedEscolaridad = selected;
    });
  }

  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

Widget _buildNombreBenef() {
    return TextFormField(
      maxLength: 255,
      decoration: InputDecoration(
          labelText: 'Nombre Completo *', border: const OutlineInputBorder()),
      validator: (String value) {
        if (value.isEmpty) {
          return 'El nombe es requerido';
        }
      },
      onSaved: (String value) {
        _nombreBeneficiario = value;
      },
    );
  }

  Widget _buildTelefono() {
    return TextFormField(
      maxLength: 20,
      decoration: InputDecoration(
          labelText: 'Numero de telefono', border: const OutlineInputBorder()),
        validator: (String value) {
        if (value.isEmpty) {
          return 'El telefono es requerido';
        }
      },
      onSaved: (String value) {
        _telefono = value;
      },
    );
  }

  Widget _buildDireccion() {
    return TextFormField(
      maxLength: 255,
      decoration: InputDecoration(
          labelText: 'Dirección', border: const OutlineInputBorder()),
      onSaved: (String value) {
        _direccion = value;
      },
    );
  }

  Widget _buildSeguimiento() {
    return (CheckboxListTile(
        title: const Text('De Seguimiento'),
        value: _seguimiento,
        onChanged: (val) {
          setState(() =>
              _seguimiento = val);
        }
      )
    ); 
  }

 Future<void> _selectDate(BuildContext context) async {
    final DateTime d = await showDatePicker(
        context: context,
        initialDate: DateTime.now(),
        firstDate: DateTime(2000),
        lastDate: DateTime(2100),
        helpText: "Seleccione la fecha de nacimiento.",
        confirmText: "Confirmar",
        cancelText: "Cancelar",
        fieldLabelText: "Introduce la fecha manualmente.",
        fieldHintText: "Mes/Día/Año");
    if (d != null)
      setState(() {
        _fechaNacimiento = _fechaNacimiento = d.toString().split(' ')[0];
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
                "Fecha:  " + _fechaNacimiento,
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

  void _handleRadioValueChange(int value) {
    setState(() {
      _radioValue = value;

      switch (_radioValue) {
        case 0:
          break;
        case 1:
          break;
        case 2:
          break;
      }
    });
  }

  Widget _buildSexo(){
    return Center(
      child: Row(
        children: <Widget>[
           new Radio(
                      value: 0,
                      groupValue: _radioValue,
                      onChanged: _handleRadioValueChange,
                    ),
                    new Text(
                      'Hombre',
                      style: new TextStyle(fontSize: 16.0),
                    ),
                    new Radio(
                      value: 1,
                      groupValue: _radioValue,
                      onChanged: _handleRadioValueChange,
                    ),
                    new Text(
                      'Mujer',
                      style: new TextStyle(
                        fontSize: 16.0,
                      ),
                    ),
        ],
      ),
    );
  }

  

  Widget _buildidEscolaridad() {
    return FutureBuilder(
      future: benefHelper.getAllEscolaridades(),
      builder: (BuildContext context, AsyncSnapshot snapshot) {
        if (snapshot.hasData != null) {
          _escolaridades = snapshot.data.toList();
          if (_selectedEscolaridad != null) {
            _selectedEscolaridad = _escolaridades[_selectedEscolaridad.idEscolaridad - 1];
          } else {
            _selectedEscolaridad = _escolaridades[0];
          }
          print(_escolaridades);
          if (_escolaridades == null) {
            return Center(child: CircularProgressIndicator());
          } else {
            List<DropdownMenuItem<Escolaridad>> _items =
                buildDropDownMenuItems(_escolaridades);
            return Container(
                child: Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                DropdownButton(
                  value: _selectedEscolaridad,
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
                  _buildNombreBenef(),
                  _buildTelefono(),
                  _buildDireccion(),
                  _buildSexo(),
                  _buildidEscolaridad(),
                  _buildSeguimiento(),
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

                      if(_radioValue == 0){
                        _sexo = 'H';
                      } else {
                        _sexo = 'M';
                      }
                      _formKey.currentState.save();
                      _idJornada = widget.jornada.idJornada;

                      benefHelper.agregarBeneficiario(_nombreBeneficiario, _telefono, _direccion, _sexo, _selectedEscolaridad, _seguimiento, _idJornada);
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
