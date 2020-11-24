class FactoresDeRiesgo {
  List<FactorDeRiesgoItem> factores = new List();

  FactoresDeRiesgo.fromJsonList(List<dynamic> json) {
    if (json == null) return;

    for (var item in json) {
      FactorDeRiesgoItem factor = new FactorDeRiesgoItem.fromJsonMap(item);
      factores.add(factor);
    }
  }
}

class FactorDeRiesgoItem {

  int idRespuesta;
  String pregunta;
  String respuesta;

  FactorDeRiesgoItem(this.idRespuesta, this.pregunta, this.respuesta);

  FactorDeRiesgoItem.fromJsonMap(Map<String, dynamic> json) {
    this.pregunta = json['pregunta'];
    this.respuesta = json['respuesta'];
    this.idRespuesta = json['idRespuesta'];
    
  }
}
