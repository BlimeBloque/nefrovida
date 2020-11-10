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
  recordatorioDesayuno, recordatorioColacionManana, recordatorioComida, recordatorioColacionTarde, recordatorioCena, tipoDieta, diagnostico,
  peso, altura, kilocaloriasTotales, porcentajeHidratosCarbono, kilocaloriasHidratosCarbono, porcentajeProteinas, porcentajeGrasas, 
  pesoIdeal, imc, diagnosticoIMC, sexoBeneficiario, edadBeneficiario;

  ConsultaNutricion(this.idConsultaNutricion, this.idBeneficiario, this.ocupacion, this.horariosComida, this.cantidadDestinadaAlimentos, 
                    this.apetito, this.distension, this.estrenimiento, this.flatulencias, this.vomitos, this.caries, this.edema,
                    this.mareo, this.zumbido, this.cefaleas, this.disnea, this.poliuria, this.actividadFisica, this.horasSueno, 
                    this.comidasAlDia, this.lugarComida, this.preparaComida, this.comeEntreComidas, this.alimentosPreferidos, 
                    this.alimentosOdiados, this.suplementos, this.medicamentosActuales, this.consumoAguaNatural, this.fecha, 
                    this.recordatorioDesayuno, this.recordatorioColacionManana, this.recordatorioComida, this.recordatorioColacionTarde,
                    this.recordatorioCena, this.tipoDieta, this.diagnostico, this.peso, this.altura, this.kilocaloriasTotales, 
                    this.porcentajeHidratosCarbono, this.kilocaloriasHidratosCarbono, this.porcentajeProteinas, this.porcentajeGrasas,
                    this.pesoIdeal, this.imc, this.diagnosticoIMC, this.sexoBeneficiario, this.edadBeneficiario);
  
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
    return age.toString();
  }

  obtenerPesoIdeal(sexo, altura)
  {
      if(altura == null)
          return null;
      
      if(sexo == 'H')
      {
          return ((0.75*getValue(altura))-62.5).toStringAsFixed(2);
      }
      else
      {
          return ((0.67*getValue(altura))-52).toStringAsFixed(2);
      }
  }

  getIMC(altura, peso)
  {
    if(altura == null || peso == null)
        return null;
    double valorAltura = getValue(altura);
    double valorPeso = getValue(peso);
    valorAltura /= 100;
    return (valorPeso/(valorAltura*valorAltura)).toStringAsFixed(1);
  }

obtenerDiagnosticoIMC(imc, sexo, edad)
{
  if(imc == null)
      return null;
  imc = getValue(imc);
  edad = getValue(edad);
  switch(edad)
  {
      case 10:
        if(sexo == 'H')
        {
          if(imc <= 13.7)
          {
            return "BAJO PESO";
          }
          else if(imc > 13.7 && imc < 18.5)
          {
            return "NORMAL";
          }
          else if(imc >= 18.5 && imc < 21.4)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 13.5)
          {
            return "BAJO PESO";
          }
          else if(imc > 13.5 && imc < 19.0)
          {
            return "NORMAL";
          }
          else if(imc >= 19.0 && imc < 22.6)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 11:
        if(sexo == 'H')
        {
          if(imc <= 14.1)
          {
            return "BAJO PESO";
          }
          else if(imc > 14.1 && imc < 19.2)
          {
            return "NORMAL";
          }
          else if(imc >= 19.2 && imc < 22.5)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 13.9)
          {
            return "BAJO PESO";
          }
          else if(imc > 13.9 && imc < 19.9)
          {
            return "NORMAL";
          }
          else if(imc >= 19.9 && imc < 23.7)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 12:
        if(sexo == 'H')
        {
          if(imc <= 14.5)
          {
            return "BAJO PESO";
          }
          else if(imc > 14.5 && imc < 19.9)
          {
            return "NORMAL";
          }
          else if(imc >= 19.9 && imc < 23.6)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 14.4)
          {
            return "BAJO PESO";
          }
          else if(imc > 14.4 && imc < 20.8)
          {
            return "NORMAL";
          }
          else if(imc >= 20.8 && imc < 25.0)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 13:
        if(sexo == 'H')
        {
          if(imc <= 14.9)
          {
            return "BAJO PESO";
          }
          else if(imc > 14.9 && imc < 20.8)
          {
            return "NORMAL";
          }
          else if(imc >= 20.8 && imc < 24.8)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 14.9)
          {
            return "BAJO PESO";
          }
          else if(imc > 14.9 && imc < 21.8)
          {
            return "NORMAL";
          }
          else if(imc >= 21.8 && imc < 26.2)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 14:
        if(sexo == 'H')
        {
          if(imc <= 15.5)
          {
            return "BAJO PESO";
          }
          else if(imc > 15.5 && imc < 21.8)
          {
            return "NORMAL";
          }
          else if(imc >= 21.8 && imc < 25.9)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 15.4)
          {
            return "BAJO PESO";
          }
          else if(imc > 15.4 && imc < 22.7)
          {
            return "NORMAL";
          }
          else if(imc >= 22.7 && imc < 27.3)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 15:
        if(sexo == 'H')
        {
          if(imc <= 16.0)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.0 && imc < 22.7)
          {
            return "NORMAL";
          }
          else if(imc >= 22.7 && imc < 27.0)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
            if(imc <= 15.9)
            {
              return "BAJO PESO";
            }
            else if(imc > 15.9 && imc < 23.5)
            {
              return "NORMAL";
            }
            else if(imc >= 23.5 && imc < 28.2)
            {
              return "SOBREPESO";
            }
            else
            {
              return "OBESIDAD";
            }
        }
      break;
      case 16:
        if(sexo == 'H')
        {
          if(imc <= 16.5)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.5 && imc < 23.5)
          {
            return "NORMAL";
          }
          else if(imc >= 23.5 && imc < 27.9)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 16.2)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.2 && imc < 24.1)
          {
            return "NORMAL";
          }
          else if(imc >= 24.1 && imc < 28.9)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 17:
        if(sexo == 'H')
        {
          if(imc <= 16.9)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.9 && imc < 24.3)
          {
            return "NORMAL";
          }
          else if(imc >= 24.3 && imc < 28.6)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 16.4)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.4 && imc < 24.5)
          {
            return "NORMAL";
          }
          else if(imc >= 24.5 && imc < 29.3)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 18:
        if(sexo == 'H')
        {
          if(imc <= 17.3)
          {
            return "BAJO PESO";
          }
          else if(imc > 17.3 && imc < 24.9)
          {
            return "NORMAL";
          }
          else if(imc >= 24.9 && imc < 29.2)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 16.4)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.4 && imc < 24.8)
          {
            return "NORMAL";
          }
          else if(imc >= 24.8 && imc < 29.5)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
      case 19:
        if(sexo == 'H')
        {
          if(imc <= 17.6)
          {
            return "BAJO PESO";
          }
          else if(imc > 17.6 && imc < 25.4)
          {
            return "NORMAL";
          }
          else if(imc >= 25.4 && imc < 29.7)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
        else
        {
          if(imc <= 16.5)
          {
            return "BAJO PESO";
          }
          else if(imc > 16.5 && imc < 25.0)
          {
            return "NORMAL";
          }
          else if(imc >= 25.0 && imc < 29.7)
          {
            return "SOBREPESO";
          }
          else
          {
            return "OBESIDAD";
          }
        }
      break;
    }
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
    this.sexoBeneficiario = json['sexo'];
    this.edadBeneficiario = calcularEdad(json['fechaNacimiento']);
    this.pesoIdeal = obtenerPesoIdeal(json['sexo'], json['altura']);
    this.imc = getIMC(json['altura'], json['peso']);
    this.diagnosticoIMC = obtenerDiagnosticoIMC(this.imc, this.sexoBeneficiario, this.edadBeneficiario);
  }
}