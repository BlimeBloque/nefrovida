class TiposNotas
{
  List<TipoNota> tipos = new List();

  TiposNotas.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      TipoNota tipo = new TipoNota.fromJsonMap(item);
      tipos.add(tipo);
      print(tipo);
    }
  }
}



class TipoNota 
{
  int idTipoNombre;
  String nombre;

  TipoNota(this.idTipoNombre, this.nombre);
  
  TipoNota.fromJsonMap(Map<String, dynamic> json)
  {
    this.idTipoNombre = json['id'];
    this.nombre = json['nombre'];
  }
}