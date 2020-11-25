class ConsultasMedica
{
  List<ConsultaMedicaGeneral> consultasMedica = new List();

  ConsultasMedica.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      ConsultaMedicaGeneral consulta = new ConsultaMedicaGeneral.fromJsonMap(item);
      consultasMedica.add(consulta);
      print(consulta);
    }
  }
}


class ConsultaMedicaGeneral
{
  int idConsultaMedica, idBeneficiario;
  String fecha;

  ConsultaMedicaGeneral(this.idConsultaMedica, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  ConsultaMedicaGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idConsultaMedica = json['idConsultaMedica'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}


class ConsultaMedica
{
  int idConsultaMedica, idBeneficiario;
  String padecimientoActual, taDerecho, taIzquierdo, frecuenciaCardiaca, frecuenciaRespiratoria, temperatura, peso, talla, cabezaCuello,
  torax, abdomen, extremidades, neurologicoEstadoMental, otros, diagnosticos, planDeTratamiento, fecha;

  ConsultaMedica(this.padecimientoActual, this.taDerecho, this.taIzquierdo, this.frecuenciaCardiaca, this.frecuenciaRespiratoria,
      this.temperatura, this.peso, this.talla, this.cabezaCuello, this.torax, this.abdomen, this.extremidades, this.neurologicoEstadoMental,
      this.otros, this.diagnosticos, this.planDeTratamiento, this.fecha);

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


  ConsultaMedica.fromJsonMap(Map<String, dynamic> json)
  {
    this.idConsultaMedica = json['idConsultaMedica'];
    this.idBeneficiario = json['idBeneficiario'];
    this.padecimientoActual = json['padecimientoActual'];
    this.taDerecho = json['taDerecho'];
    this.taIzquierdo = json['taIzquierdo'];
    this.frecuenciaCardiaca = json['frecuenciaCardiaca'];
    this.frecuenciaRespiratoria = json['frecuenciaRespiratoria'];
    this.temperatura = json['temperatura'];
    this.peso = json['peso'];
    this.talla = json['talla'];
    this.cabezaCuello = json['cabezaCuello'];
    this.torax = json['torax'];
    this.abdomen = json['abdomen'];
    this.extremidades = json['extremidades'];
    this.neurologicoEstadoMental = json['neurologicoEstadoMental'];
    this.otros = json['otros'];
    this.diagnosticos = json['diagnosticos'];
    this.planDeTratamiento = json['planDeTratamiento'];
    this.fecha = formatoFecha(json['created_at']);
  }
}