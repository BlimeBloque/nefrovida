class Escolaridades
{
  List<Escolaridad> escolaridades = new List();

  Escolaridades.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      Escolaridad esco = new Escolaridad.fromJsonMap(item);
      escolaridades.add(esco);
      print(esco);
    }
  }
}



class Escolaridad 
{
  int idEscolaridad;
  String nombre;

  Escolaridad(this.idEscolaridad, this.nombre);
  
  Escolaridad.fromJsonMap(Map<String, dynamic> json)
  {
    this.idEscolaridad = json['id'];
    this.nombre = json['nombre'];
  }
}