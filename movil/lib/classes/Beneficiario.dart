class Beneficiarios
{
  List<Beneficiario> beneficiarios = new List();

  Beneficiarios.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      Beneficiario benef = new Beneficiario.fromJsonMap(item);
      beneficiarios.add(benef);
      print(benef);
    }
  }
}



class Beneficiario 
{
  int idBeneficiario;
  String nombreBeneficiario;
  int idEscolaridad;
  String sexo;
  String telefono;
  String direccion;
  int activo;
  String fechaNacimiento;
  int seguimiento;
  int idJornada;

  Beneficiario(this.idBeneficiario, this.nombreBeneficiario, this.idEscolaridad, this.sexo, this.telefono, this.direccion, this.activo,
              this.fechaNacimiento, this.seguimiento, this.idJornada);
  
  Beneficiario.fromJsonMap(Map<String, dynamic> json)
  {
    this.idBeneficiario = json['idBeneficiario'];
    this.nombreBeneficiario = json['nombreBeneficiario'];
    this.idEscolaridad = json['idEscolaridad'];
    this.sexo = json['sexo'];
    this.telefono = json['telefono'];
    this.direccion = json['direccion'];
    this.activo = json['activo'];
    this.fechaNacimiento = json['fechaNacimiento'];
    this.seguimiento = json['seguimiento'];
    this.idJornada = json['idJornada'];
  }
}