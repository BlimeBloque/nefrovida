class Jornadas
{
  List<Jornada> jornadas = new List();

  Jornadas.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      Jornada jornada = new Jornada.fromJsonMap(item);
      jornadas.add(jornada);
    }
  }
}


class Jornada 
{
  int idJornada, idEstado;
  String nombre, fecha, localidad, municipio, nombreEstado, siglasEstado;

  Jornada(this.idJornada, this.idEstado, this.nombre, this.fecha, this.localidad, this.municipio, this.nombreEstado, this.siglasEstado);

  Jornada.fromJsonMap(Map<String, dynamic> json)
  {
    this.idJornada = json['idJornada'];
    this.idEstado = json['idEstado'];
    this.nombre = json['nombre'];
    this.fecha = json['fecha'];
    this.localidad = json['localidad'];
    this.municipio = json['municipio'];
    this.nombreEstado = json['nombreEstado'];
    this.siglasEstado = json['siglas'];
  }
}