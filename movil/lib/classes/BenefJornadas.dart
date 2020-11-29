class BenefJornadas
{
  List<BenefJornada> benefs = new List();

  BenefJornadas.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      BenefJornada benef = new BenefJornada.fromJsonMap(item);
      benefs.add(benef);
    }
  }
}


class BenefJornada 
{
  int idBeneficiario, idJornada;
  String nombreBeneficiario;

  BenefJornada(this.idBeneficiario, this.nombreBeneficiario, this.idJornada);

  BenefJornada.fromJsonMap(Map<String, dynamic> json)
  {
    this.idBeneficiario = json['idBeneficiario'];
    this.nombreBeneficiario = json['nombreBeneficiario'];
    this.idJornada = json['idJornada'];
  }
}