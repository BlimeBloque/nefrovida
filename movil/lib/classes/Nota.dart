class Notas {
  List<NotaGeneral> notasGenerales = new List();

  Notas.fromJsonList(List<dynamic> json) {
    if (json == null) return;

    for (var item in json) {
      NotaGeneral nota = new NotaGeneral.fromJsonMap(item);
      notasGenerales.add(nota);
      print(nota);
    }
  }
}

class Nota {
  int idNota;
  String tituloNota;
  String comentario;
  int idBeneficiario;
  int idTipoNota;
  String url_archivo;

  Nota(this.idNota, this.tituloNota, this.comentario, this.idBeneficiario,
      this.idTipoNota, this.url_archivo);

  Nota.fromJsonMap(Map<String, dynamic> json) {
    this.idNota = json['idNota'];
    this.tituloNota = json['tituloNota'];
    this.comentario = json['comentario'];
    this.idBeneficiario = json['idBeneficiario'];
    this.idTipoNota = json['idTipoNota'];
    this.url_archivo = json['url_archivo'];
  }
}

class NotaGeneral {
  int idNota, idBeneficiario;
  String titulo;

  NotaGeneral(this.idNota, this.idBeneficiario, this.titulo);

  NotaGeneral.fromJsonMap(Map<String, dynamic> json) {
    this.idNota = json['idNota'];
    this.idBeneficiario = json['idBeneficiario'];
    this.titulo = json['tituloNota'];
  }
}
