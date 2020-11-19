import 'dart:ffi';

class TamizajesInfo {
  List<TamizajeInfo> tamizajesinfo = new List();

  TamizajesInfo.fromJsonList(List<dynamic> json) {
    if (json == null) return;

    for (var item in json) {
      TamizajeInfo tamizajeinfo = new TamizajeInfo.fromJsonMap(item);
      tamizajesinfo.add(tamizajeinfo);
    }
  }
}

class TamizajeInfo {
  int idTamizaje;
  String fecha;

  TamizajeInfo(this.idTamizaje, this.fecha);

  TamizajeInfo.fromJsonMap(Map<String, dynamic> json) {
    this.idTamizaje = json['idTamizaje'];
    this.fecha = json['created_at'];
  }
}

class Tamizaje {
  int idTamizaje, idBeneficiario;
  double peso,
      circunferenciaCintura,
      circunferenciaCadera,
      glucosaCapilar,
      talla,
      indiceCinturaCadera;
  String presionArterial, comentario, fecha;

  Tamizaje(
      this.idTamizaje,
      this.idBeneficiario,
      this.presionArterial,
      this.peso,
      this.circunferenciaCintura,
      this.circunferenciaCadera,
      this.glucosaCapilar,
      this.talla,
      this.indiceCinturaCadera,
      this.comentario);

  Tamizaje.fromJsonMap(Map<String, dynamic> json) {
    this.idTamizaje = json['idTamizaje'];
    this.idBeneficiario = json['idBeneficiario'];
    this.presionArterial = json['presionArterial'];
    this.comentario = json['comentario'];
    this.circunferenciaCintura = double.parse(json['circunferenciaCintura']);
    this.peso = double.parse(json['peso']);
    this.circunferenciaCadera = double.parse(json['circunferenciaCadera']);
    this.glucosaCapilar = double.parse(json['glucosaCapilar']);
    this.talla = double.parse(json['talla']);
    this.indiceCinturaCadera = double.parse(json['indiceCinturaCadera']);
    this.fecha = json['created_at'];
  }
}
