class Evaluaciones {
  List<Evaluacion> evaluaciones = new List();

  Evaluaciones.fromJsonList(List<dynamic> json) {
    if (json == null) return;

    for (var item in json) {
      Evaluacion evaluacion = new Evaluacion.fromJsonMap(item);
      evaluaciones.add(evaluacion);
    }
  }
}

class Evaluacion {

  int idRespuesta;
  String pregunta;
  String respuesta;

  Evaluacion(this.idRespuesta, this.pregunta, this.respuesta);

  Evaluacion.fromJsonMap(Map<String, dynamic> json) {
    this.pregunta = json['evaluacionPregunta'];
    this.respuesta = json['respuestasPosibles'];
    this.idRespuesta = json['idEvaluacionRespuesta'];
    
  }
}
