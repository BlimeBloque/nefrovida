import 'package:flutter/material.dart';

class Microalbuminurias
{
  List<MicroalbuminuriaGeneral> microalbuminurias = new List();

  Microalbuminurias.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      MicroalbuminuriaGeneral analisis = new MicroalbuminuriaGeneral.fromJsonMap(item);
      microalbuminurias.add(analisis);
      print(analisis);
    }
  }
}



class MicroalbuminuriaGeneral
{
  int idMicroalbuminuria, idBeneficiario;
  String fecha;

  MicroalbuminuriaGeneral(this.idMicroalbuminuria, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  MicroalbuminuriaGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idMicroalbuminuria = json['idMicroalbuminuria'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}

class Microalbuminuria
{
  int idMicroalbuminuria, idBeneficiario;
  String  microAlbumina, valorMicroAlbuminaBajo, valorMicroAlbuminaAlto, creatinina, valorCreatininaBajo, valorCreatininaAlto, 
  relacion, valorRelacionNormalBajo, valorRelacionNormalAlto, valorRelacionAnormalBajo, valorRelacionAnormalAlto, valorRelacionAnormalAltoBajo, 
  valorRelacionAnormalAltoAlto, nota, metodo, fecha;

  Microalbuminuria(this.idMicroalbuminuria, this.idBeneficiario, this.microAlbumina, this.valorMicroAlbuminaBajo, this.valorMicroAlbuminaAlto, 
  this.creatinina, this.valorCreatininaBajo, this.valorCreatininaAlto, this.relacion, this.valorRelacionNormalBajo, this.valorRelacionNormalAlto, 
  this.valorRelacionAnormalBajo, this.valorRelacionAnormalAlto, this.valorRelacionAnormalAltoBajo, this.valorRelacionAnormalAltoAlto, 
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

  getColorRelacion(valor, anormal, anormalAlto)
  {
    if(getValue(anormal) < getValue(valor) && getValue(valor) < getValue(anormalAlto))
    {
      return Colors.yellow[300];
    }
    else if(getValue(valor) > getValue(anormalAlto))
    {
      return Colors.red[200];
    }
    else
    {
      return null;
    }
  }

  Microalbuminuria.fromJsonMap(Map<String, dynamic> json)
  {
    this.idMicroalbuminuria = json['idMicroalbuminuria'];
    this.idBeneficiario = json['idBeneficiario'];
    this.microAlbumina = json['microAlbumina'];
    this.valorMicroAlbuminaBajo = json['valorMicroAlbuminaBajo'];
    this.valorMicroAlbuminaAlto = json['valorMicroAlbuminaAlto'];
    this.creatinina = json['creatinina'];
    this.valorCreatininaBajo = json['valorCreatininaBajo'];
    this.valorCreatininaAlto = json['valorCreatininaAlto'];
    this.relacion = json['relacion'];
    this.valorRelacionNormalBajo = json['valorRelacionNormalBajo'];
    this.valorRelacionNormalAlto = json['valorRelacionNormalAlto'];
    this.valorRelacionAnormalBajo = json['valorRelacionAnormalBajo'];
    this.valorRelacionAnormalAlto = json['valorRelacionAnormalAlto'];
    this.valorRelacionAnormalAltoBajo = json['valorRelacionAnormalAltoBajo'];
    this.valorRelacionAnormalAltoAlto = json['valorRelacionAnormalAltoAlto'];
    this.nota = json['nota'];
    this.metodo = json['metodo'];
    this.fecha = formatoFecha(json['created_at']);
  }

}