class QuimicasSanguineas
{
  List<QuimicaSanguineaGeneral> quimicasSanguineas = new List();

  QuimicasSanguineas.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      QuimicaSanguineaGeneral analisis = new QuimicaSanguineaGeneral.fromJsonMap(item);
      quimicasSanguineas.add(analisis);
      print(analisis);
    }
  }
}



class QuimicaSanguineaGeneral
{
  int idQuimicaSanguinea, idBeneficiario;
  String fecha;

  QuimicaSanguineaGeneral(this.idQuimicaSanguinea, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  QuimicaSanguineaGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idQuimicaSanguinea = json['idQuimicaSanguinea'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}

class QuimicaSanguinea
{
  int idQuimicaSanguinea, idBeneficiario;
  String  glucosa, valorGlucosaBajo, valorGlucosaAlto, urea, valorUreaBajo, valorUreaAlto, bun, valorBunBajo, valorBunAlto, 
  creatinina, creatininaMujerBajo, creatininaMujerAlto, creatininaHombreBajo, creatininaHombreAlto, nota, metodo, fecha;

  QuimicaSanguinea(this.idQuimicaSanguinea, this.idBeneficiario, this.glucosa, this.valorGlucosaBajo, this.valorGlucosaAlto, this.urea, 
  this.valorUreaBajo, this.valorUreaAlto, this.bun, this.valorBunBajo, this.valorBunAlto, this.creatinina, this.creatininaMujerBajo, 
  this.creatininaMujerAlto, this.creatininaHombreBajo, this.creatininaHombreAlto, this.nota, this.metodo, this.fecha);

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

  QuimicaSanguinea.fromJsonMap(Map<String, dynamic> json)
  {
    this.idQuimicaSanguinea = json['idQuimicaSanguinea'];
    this.idBeneficiario = json['idBeneficiario'];
    this.glucosa = json['glucosa'];
    this.valorGlucosaBajo = json['valorGlucosaBajo'];
    this.valorGlucosaAlto = json['valorGlucosaAlto'];
    this.urea = json['urea'];
    this.valorUreaBajo = json['valorUreaBajo'];
    this.valorUreaAlto = json['valorUreaAlto'];
    this.bun = json['bun'];
    this.valorBunBajo = json['valorBunBajo'];
    this.valorBunAlto = json['valorBunAlto'];
    this.creatinina = json['creatinina'];
    this.creatininaMujerBajo = json['creatininaMujerBajo'];
    this.creatininaMujerAlto = json['creatininaMujerAlto'];
    this.creatininaHombreBajo = json['creatininaHombreBajo'];
    this.creatininaHombreAlto = json['creatininaHombreAlto'];
    this.nota = json['nota'];
    this.metodo = json['metodo'];
    this.fecha = formatoFecha(json['created_at']);
  }

}