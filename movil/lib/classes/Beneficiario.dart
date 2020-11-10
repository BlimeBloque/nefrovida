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
  int edad;

  Beneficiario(this.idBeneficiario, this.nombreBeneficiario, this.idEscolaridad, this.sexo, this.telefono, this.direccion, this.activo,
              this.fechaNacimiento, this.seguimiento, this.idJornada, this.edad);

  calcularEdad(fechaNacimiento)
  {
    DateTime fecha = DateTime.parse(fechaNacimiento);
    DateTime currentDate = DateTime.now();
    int age = currentDate.year - fecha.year;
    int month1 = currentDate.month;
    int month2 = fecha.month;
    if (month2 > month1) {
      age--;
    } else if (month1 == month2) {
      int day1 = currentDate.day;
      int day2 = fecha.day;
      if (day2 > day1) {
        age--;
      }
    }
    return age;
  }
  
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
    this.edad = calcularEdad(json['fechaNacimiento']);
  }
}