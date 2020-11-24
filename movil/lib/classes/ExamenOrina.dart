class ExamenesOrina
{
  List<ExamenOrinaGeneral> examenesOrina = new List();

  ExamenesOrina.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      ExamenOrinaGeneral analisis = new ExamenOrinaGeneral.fromJsonMap(item);
      examenesOrina.add(analisis);
      print(analisis);
    }
  }
}



class ExamenOrinaGeneral
{
  int idExamenOrina, idBeneficiario;
  String fecha;

  ExamenOrinaGeneral(this.idExamenOrina, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  ExamenOrinaGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idExamenOrina = json['idExamenOrina'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}

class ExamenOrina
{
  int idExamenOrina, idBeneficiario;
  String  ph, densidad, color, aspecto, nitritos, glucosa, proteinas, hemoglobina, cuerposCetonicos, bilirribuna, urobilinogeno, leucocitos, 
  eritrocitosIntactos, eritrocitosCrenados, observacionLeucocitos, cristales, cilindros, celulasEpiteliales, bacterias, nota, 
  metodo, fecha;

  ExamenOrina(this.idExamenOrina, this.idBeneficiario, this.ph, this.densidad, this.color, this.aspecto, this.nitritos, this.glucosa,
  this.proteinas, this.hemoglobina, this.cuerposCetonicos, this.bilirribuna, this.urobilinogeno, this.leucocitos, this.eritrocitosIntactos,
  this.eritrocitosCrenados, this.observacionLeucocitos, this.cristales, this.cilindros, this.celulasEpiteliales, this.bacterias, 
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

  ExamenOrina.fromJsonMap(Map<String, dynamic> json)
  {
    this.idExamenOrina = json['idExamenOrina'];
    this.idBeneficiario = json['idBeneficiario'];
    this.ph = json['ph'];
    this.densidad = json['densidad'];
    this.color = json['color'];
    this.aspecto = json['aspecto'];
    this.nitritos = json['nitritos'];
    this.glucosa = json['glucosa'];
    this.proteinas = json['proteinas'];
    this.hemoglobina = json['hemoglobina'];
    this.cuerposCetonicos = json['cuerposCetonicos'];
    this.bilirribuna = json['bilirribuna'];
    this.urobilinogeno = json['urobilinogeno'];
    this.leucocitos = json['leucocitos'];
    this.eritrocitosIntactos = json['eritrocitosIntactos'];
    this.eritrocitosCrenados = json['eritrocitosCrenados'];
    this.observacionLeucocitos = json['observacionLeucocitos'];
    this.cristales = json['cristales'];
    this.cilindros = json['cilindros'];
    this.celulasEpiteliales = json['celulasEpiteliales'];
    this.bacterias = json['bacterias'];
    this.nota = json['nota'];
    this.metodo = json['metodo'];
    this.fecha = formatoFecha(json['created_at']);
  }

}