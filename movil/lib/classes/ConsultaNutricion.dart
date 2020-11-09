class ConsultasNutricion
{
  List<ConsultaNutricionGeneral> consultasNutricion = new List();

  ConsultasNutricion.fromJsonList(List<dynamic> json)
  {
    if(json == null) return;

    for(var item in json)
    {
      ConsultaNutricionGeneral consulta = new ConsultaNutricionGeneral.fromJsonMap(item);
      consultasNutricion.add(consulta);
      print(consulta);
    }
  }
}


class ConsultaNutricionGeneral
{
  int idConsultaNutricion, idBeneficiario;
  String fecha;

  ConsultaNutricionGeneral(this.idConsultaNutricion, this.idBeneficiario, this.fecha);

  formatoFecha(fecha)
  {
    DateTime fechaFormateada = DateTime.parse(fecha);
    return "${fechaFormateada.day.toString().padLeft(2, '0')}/${fechaFormateada.month.toString().padLeft(2, '0')}/${fechaFormateada.year.toString()}";
  }

  ConsultaNutricionGeneral.fromJsonMap(Map<String, dynamic> json)
  {
    this.idConsultaNutricion = json['idConsultaNutricional'];
    this.idBeneficiario = json['idBeneficiario'];
    this.fecha = formatoFecha(json['created_at']);
  }
}


class ConsultaNutricion 
{
  int idConsultaNutricion, idBeneficiario;
  String ocupacion, horariosComida, cantidadDestinadaAlimentos, apetito, distension, estrenimiento, flatulencias, vomitos, caries,
  edema, mareo, zumbido, cefaleas, disnea, poliuria, actividadFisica, horasSueno, comidasAlDia, lugarComida, preparaComida,
  comeEntreComidas, alimentosPreferidos, alimentosOdiados, suplementos, medicamentosActuales, consumoAguaNatural, fecha,
  recordatorioDesayuno, recordatorioColacionManana, recordatorioComida, recordatorioColacionTarde, recordatorioCena, tipoDieta, diagnostico;
  String peso, altura, kilocaloriasTotales, porcentajeHidratosCarbono, kilocaloriasHidratosCarbono, porcentajeProteinas, porcentajeGrasas;

  ConsultaNutricion(this.idConsultaNutricion, this.idBeneficiario, this.ocupacion, this.horariosComida, this.cantidadDestinadaAlimentos, 
                    this.apetito, this.distension, this.estrenimiento, this.flatulencias, this.vomitos, this.caries, this.edema,
                    this.mareo, this.zumbido, this.cefaleas, this.disnea, this.poliuria, this.actividadFisica, this.horasSueno, 
                    this.comidasAlDia, this.lugarComida, this.preparaComida, this.comeEntreComidas, this.alimentosPreferidos, 
                    this.alimentosOdiados, this.suplementos, this.medicamentosActuales, this.consumoAguaNatural, this.fecha, 
                    this.recordatorioDesayuno, this.recordatorioColacionManana, this.recordatorioComida, this.recordatorioColacionTarde,
                    this.recordatorioCena, this.tipoDieta, this.diagnostico, this.peso, this.altura, this.kilocaloriasTotales, 
                    this.porcentajeHidratosCarbono, this.kilocaloriasHidratosCarbono, this.porcentajeProteinas, this.porcentajeGrasas);
  
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


  ConsultaNutricion.fromJsonMap(Map<String, dynamic> json)
  {
    this.idConsultaNutricion = json['idConsultaNutricional'];
    this.idBeneficiario = json['idBeneficiario'];
    this.ocupacion = json['ocupacion'];
    this.horariosComida = json['horariosComida'];
    this.cantidadDestinadaAlimentos = json['cantidadDestinadaAlimentos'];
    this.apetito = json['apetito'];
    this.distension = json['distension'];
    this.estrenimiento = json['estreñimiento'];
    this.flatulencias = json['flatulencias'];
    this.vomitos = json['vomitos'];
    this.caries = json['caries'];
    this.edema = json['edema'];
    this.mareo = json['mareo'];
    this.zumbido = json['zumbido'];
    this.cefaleas = json['cefaleas'];
    this.disnea = json['disnea'];
    this.poliuria = json['poliuria'];
    this.actividadFisica = json['actividadFisica'];
    this.horasSueno = json['horasSueño'];
    this.comidasAlDia = json['comidasAlDia'];
    this.lugarComida = json['lugarComida'];
    this.preparaComida = json['preparaComida'];
    this.comeEntreComidas = json['comeEntreComidas'];
    this.alimentosPreferidos = json['alimentosPreferidos'];
    this.alimentosOdiados = json['alimentosOdiados'];
    this.suplementos = json['suplementos'];
    this.medicamentosActuales = json['medicamentosActuales'];
    this.consumoAguaNatural = json['consumoAguaNatural'];
    this.recordatorioDesayuno = json['recordatorioDesayuno'];
    this.recordatorioColacionManana = json['recordatorioColacionMañana'];
    this.recordatorioComida = json['recordatorioComida'];
    this.recordatorioColacionTarde = json['recordatorioColacionTarde'];
    this.recordatorioCena = json['recordatorioCena'];
    this.peso = json['peso'];
    this.altura = json['altura'];
    this.tipoDieta = json['tipoDieta'];
    this.kilocaloriasTotales = json['kilocaloriasTotales'];
    this.porcentajeHidratosCarbono = json['porcentajeHidratosCarbono'];
    this.kilocaloriasHidratosCarbono = json['kilocaloriasHidratosCarbono'];
    this.porcentajeProteinas = json['porcentajeProteinas'];
    this.porcentajeGrasas = json['porcentajeGrasas'];
    this.diagnostico = json['diagnostico'];
    this.fecha = formatoFecha(json['created_at']);
  }
}