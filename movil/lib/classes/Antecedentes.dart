class Antecedente
{
  List<AntecedentesGeneral> antecedente = new List();

  Antecedente.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      AntecedentesGeneral antecedentes = new AntecedentesGeneral.fromJsonMap(item);
      antecedente.add(antecedentes);
      print(antecedentes);
    }
  }
}


class AntecedentesGeneral
{
  int idAntecedentes, idBeneficiario;
  String fecha;

  AntecedentesGeneral(this.idAntecedentes, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  AntecedentesGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idAntecedentes = json['idAntecedentes'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}


class Antecedentes
{
  int idAntecedentes, idBeneficiario;
  String casa, serviciosBasicos, personalesPatologicos, personalesNoPatologicos, padreVivo, enfermedadesPadre, madreVivo, enfermedadesMadre,
  numHermanos, numHermanosVivos, enfermedadesHermanos, otrosHermanos, menarquia, ritmo, fum, gestaciones, partos, abortos, cesareas, ivsa,
  metodosAnticonceptivos, fecha;

  Antecedentes(this.casa, this.serviciosBasicos, this.personalesPatologicos, this.personalesNoPatologicos, this.padreVivo, this.enfermedadesPadre,
      this.madreVivo, this.enfermedadesMadre, this.numHermanos, this.numHermanosVivos, this.enfermedadesHermanos, this.otrosHermanos,
      this.menarquia, this.ritmo, this.fum, this.gestaciones, this.partos, this.abortos, this.cesareas, this.ivsa, this.metodosAnticonceptivos,
      this.fecha);

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


Antecedentes.fromJsonMap(Map<String, dynamic> json)
{
this.idAntecedentes = json['idAntecedentes'];
this.idBeneficiario = json['idBeneficiario'];
this.casa = json['casa'];
this.serviciosBasicos = json['serviciosBasicos'];
this.personalesPatologicos = json['personalesPatologicos'];
this.personalesNoPatologicos = json['personalesNoPatologicos'];
this.padreVivo = json['padreVivo'];
this.enfermedadesPadre = json['enfermedadesPadre'];
this.madreVivo = json['madreVivo'];
this.enfermedadesMadre = json['enfermedadesMadre'];
this.numHermanos = json['numHermanos'];
this.numHermanosVivos = json['numHermanosVivos'];
this.enfermedadesHermanos = json['enfermedadesHermanos'];
this.otrosHermanos = json['otrosHermanos'];
this.menarquia = json['menarquia'];
this.ritmo = json['ritmo'];
this.fum = json['fum'];
this.gestaciones = json['gestaciones'];
this.partos = json['partos'];
this.abortos = json['abortos'];
this.cesareas = json['cesareas'];
this.ivsa = json['ivsa'];
this.metodosAnticonceptivos = json['metodosAnticonceptivos'];
this.fecha = formatoFecha(json['created_at']);
}
}