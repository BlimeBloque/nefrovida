class Estados {
  List<Estado> estados = new List();

  Estados.fromJsonList(List<dynamic> json) {
    if (json == null) return;

    for (var item in json) {
      Estado estado = new Estado.fromJsonMap(item);
      estados.add(estado);
    }
  }
}

class Estado {
  int id;
  String nombre;

  Estado(this.id, this.nombre);

  Estado.fromJsonMap(Map<String, dynamic> json) {
    this.id = json['id'];
    this.nombre = json['nombre'];
  }
}
