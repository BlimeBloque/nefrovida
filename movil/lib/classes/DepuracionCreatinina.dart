import 'package:flutter/material.dart';

class DepuracionesCreatinina
{
  List<DepuracionCreatininaGeneral> depuracionesCreatinina = new List();

  DepuracionesCreatinina.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      DepuracionCreatininaGeneral analisis = new DepuracionCreatininaGeneral.fromJsonMap(item);
      depuracionesCreatinina.add(analisis);
      print(analisis);
    }
  }
}



class DepuracionCreatininaGeneral
{
  int idDepuracionCreatinina, idBeneficiario;
  String fecha;

  DepuracionCreatininaGeneral(this.idDepuracionCreatinina, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  DepuracionCreatininaGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idDepuracionCreatinina = json['idDepuracionCreatinina'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}

class DepuracionCreatinina
{
  int idDepuracionCreatinina, idBeneficiario;
  String  talla, peso, volumen, superficieCorporal, creatininaEnSuero, valorCreatininaBajoMujer, valorCreatininaAltoMujer, 
  valorCreatininaBajoHombre, valorCreatininaAltoHombre, depuracionCreatinina, valorDepuracionBajoMujer, valorDepuracionAltoMujer, 
  valorDepuracionBajoHombre, valorDepuracionAltoHombre, nota, metodo, fecha;

  DepuracionCreatinina(this.idDepuracionCreatinina, this.idBeneficiario, this.talla, this.peso, this.volumen, this.superficieCorporal, 
  this.creatininaEnSuero, this.valorCreatininaBajoMujer, this.valorCreatininaAltoMujer, this.valorCreatininaBajoHombre, this.valorCreatininaAltoHombre, 
  this.depuracionCreatinina, this.valorDepuracionBajoMujer, this.valorDepuracionAltoMujer, this.valorDepuracionBajoHombre, this.valorDepuracionAltoHombre, 
  this.nota, this.metodo, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  getValue(valor)
  {
    print(double.parse(valor));
    return double.parse(valor);
  }

  getColorFondo(valor, minimo, maximo)
  {
    if(getValue(valor) < getValue(minimo))
    {
      return Colors.cyan[100];
    }
    else if(getValue(valor) > getValue(maximo))
    {
      return Colors.red[200];
    }
    else
    {
      return null;
    }
  }

  DepuracionCreatinina.fromJsonMap(Map<String, dynamic> json)
  {
    this.idDepuracionCreatinina = json['idDepuracionCreatinina'];
    this.idBeneficiario = json['idBeneficiario'];
    this.talla = json['talla'];
    this.peso = json['peso'];
    this.volumen = json['volumen'];
    this.superficieCorporal = json['superficieCorporal'];
    this.creatininaEnSuero = json['creatininaEnSuero'];
    this.valorCreatininaBajoMujer = json['valorCreatininaBajoMujer'];
    this.valorCreatininaAltoMujer = json['valorCreatininaAltoMujer'];
    this.valorCreatininaBajoHombre = json['valorCreatininaBajoHombre'];
    this.valorCreatininaAltoHombre = json['valorCreatininaAltoHombre'];
    this.depuracionCreatinina = json['depuracionCreatinina'];
    this.valorDepuracionBajoMujer = json['valorDepuracionBajoMujer'];
    this.valorDepuracionAltoMujer = json['valorDepuracionAltoMujer'];
    this.valorDepuracionBajoHombre = json['valorDepuracionBajoHombre'];
    this.valorDepuracionAltoHombre = json['valorDepuracionAltoHombre'];
    this.nota = json['nota'];
    this.metodo = json['metodo'];
    this.fecha = formatoFecha(json['created_at']);
  }

}