import 'dart:convert';
import 'package:movil/classes/AltoRiesgo.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/DepuracionCreatinina.dart';
import 'package:movil/classes/Escolaridad.dart';
import 'package:movil/classes/ExamenOrina.dart';
import 'package:movil/classes/Estado.dart';
import 'package:movil/classes/FactorDeRiesgo.dart';
import 'package:movil/classes/IMCSexo.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/classes/Microalbuminuria.dart';
import 'package:movil/classes/Platicas.dart';
import 'package:movil/classes/PruebasRegistradas.dart';
import 'package:movil/classes/IMCGeneral.dart';
import 'package:movil/classes/QuimicaSanguinea.dart';
import 'package:movil/classes/Sociodemografico.dart';
import 'package:movil/classes/Tamizados.dart';
import 'package:movil/classes/TipoNota.dart';
import 'package:movil/classes/Nota.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/classes/ConsultaMedica.dart';
import 'package:movil/classes/Antecedentes.dart';
import 'package:movil/classes/Tamizaje.dart';
import 'package:http/http.dart' as http;

class HttpHelper {
  /*
    Para probarlo pongan su ip en vez de la mia.
    Eric: 192.168.42.123
    Mau: 192.168.100.12
    Jan: 192.168.42.50 / 192.168.42.138
    Saul: 192.168.100.7
    Randy: 192.168.42.2
  */
  String ip = "https://api.snefrovidaac.com";
  String baseUrl = "/api";

  Future<List<Beneficiario>> getAllBeneficiarios() async {
    String path = "/beneficiarios";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      Beneficiarios listaBeneficiarios =
          new Beneficiarios.fromJsonList(decodedJsonMap['data']);
      return listaBeneficiarios.beneficiarios;
    } else {
      return null;
    }
  }

  Future<List<ConsultaNutricionGeneral>> getConsultasNutricion(
      idBeneficiario) async {
    String path =
        "/consultaNutricion/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ConsultasNutricion listaConsultas =
          new ConsultasNutricion.fromJsonList(decodedJsonMap);
      return listaConsultas.consultasNutricion;
    } else {
      return null;
    }
  }

  Future<ConsultaNutricion> getDetalleConsulta(idConsultaNutricion) async {
    String path = "/consultaNutricion/" + idConsultaNutricion.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ConsultaNutricion consulta;
      for (var item in decodedJsonMap) {
        consulta = new ConsultaNutricion.fromJsonMap(item);
      }
      return consulta;
    } else {
      return null;
    }
  }

  Future<List<ConsultaMedicaGeneral>> getConsultasMedicas(
      idBeneficiario) async {
    String path =
        "/consultaMedica/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ConsultasMedica listaConsultas =
      new ConsultasMedica.fromJsonList(decodedJsonMap);
      return listaConsultas.consultasMedica;
    } else {
      return null;
    }
  }

  Future<ConsultaMedica> getDetalleConsultaM(idConsultaMedica) async {
    String path = "/consultaMedica/" + idConsultaMedica.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ConsultaMedica consulta;
      for (var item in decodedJsonMap) {
        consulta = new ConsultaMedica.fromJsonMap(item);
      }
      return consulta;
    } else {
      return null;
    }
  }

  Future<List<AntecedentesGeneral>> getAntecedentes(
      idBeneficiario) async {
    String path =
        "/antecedentes/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Antecedente listaAntecedentes =
      new Antecedente.fromJsonList(decodedJsonMap);
      return listaAntecedentes.antecedente;
    } else {
      return null;
    }
  }

  Future<Antecedentes> getDetalleAntecedentes(idAntecedentes) async {
    String path = "/antecedentes/" + idAntecedentes.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Antecedentes antecedentes;
      for (var item in decodedJsonMap) {
        antecedentes = new Antecedentes.fromJsonMap(item);
      }
      return antecedentes;
    } else {
      return null;
    }
  }

  Future<List<NotaGeneral>> getNotas(idBeneficiario) async {
    String path = "/notas/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Notas listaNotas = new Notas.fromJsonList(decodedJsonMap);
      return listaNotas.notasGenerales;
    } else {
      return null;
    }
  }

    Future<List<FactorDeRiesgoItem>> getFactorRiesgo(idBeneficiario) async {
     String path = "/detalles/" + idBeneficiario.toString();
     String uri = ip + baseUrl + path;
 
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      FactoresDeRiesgo listaFactores = new FactoresDeRiesgo.fromJsonList(decodedJsonMap);
      return listaFactores.factores;
    } else {
      return null;
    }
  }

  Future<Nota> getDetalleNota(idNota) async {
    String path = "/nota/" + idNota.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Nota nota;
      for (var item in decodedJsonMap) {
        nota = new Nota.fromJsonMap(item);
      }
      return nota;
    } else {
      return null;
    }
  }

  Future<List<TipoNota>> getAllTiposNotas() async {
    String path = "/tiponota";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      TiposNotas listaTipos =
          new TiposNotas.fromJsonList(decodedJsonMap['data']);
      return listaTipos.tipos;
    } else {
      return null;
    }
  }

  Future<http.Response> subirNotra(String titulo, String contenido,
      int idBeneficiario, int idTipoNota, String url_archivo) async {
    String path = "/nota";
    String uri = ip + baseUrl + path;
    Map data = {
      'idBeneficiario': idBeneficiario,
      'idTipoNota': idTipoNota,
      'comentario': contenido,
      'tituloNota': titulo,
      'url_archivo': url_archivo
    };
    //encode Map to JSON
    var body = json.encode(data);

    var response = await http.post(uri,
        headers: {"Content-Type": "application/json"}, body: body);
    print("${response.statusCode}");
    print("${response.body}");
    return response;
  }

  //----EXAMEN ORINA----
  Future<List<ExamenOrinaGeneral>> getExamenesOrina(idBeneficiario) async {
    String path =
        "/examenOrina/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ExamenesOrina listaExamenes =
          new ExamenesOrina.fromJsonList(decodedJsonMap);
      return listaExamenes.examenesOrina;
    } else {
      return null;
    }
  }

  Future<ExamenOrina> getExamenOrina(idExamenOrina) async {
    String path = "/examenOrina/" + idExamenOrina.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      ExamenOrina analisis;
      for (var item in decodedJsonMap) {
        analisis = new ExamenOrina.fromJsonMap(item);
      }
      return analisis;
    } else {
      return null;
    }
  }

  //----DEPURACION CREATININA----
  Future<List<DepuracionCreatininaGeneral>> getDepuracionesCreatinina(idBeneficiario) async {
    String path =
        "/depuracionCreatinina/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      DepuracionesCreatinina listaDepuraciones =
          new DepuracionesCreatinina.fromJsonList(decodedJsonMap);
      return listaDepuraciones.depuracionesCreatinina;
    } else {
      return null;
    }
  }

  Future<DepuracionCreatinina> getDepuracionCreatinina(idDepuracionCreatinina) async {
    String path = "/depuracionCreatinina/" + idDepuracionCreatinina.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      DepuracionCreatinina analisis;
      for (var item in decodedJsonMap) {
        analisis = new DepuracionCreatinina.fromJsonMap(item);
      }
      return analisis;
    } else {
      return null;
    }
  }

  //----QUIMICA SANGUINEA----
  Future<List<QuimicaSanguineaGeneral>> getQuimicasSanguineas(idBeneficiario) async {
    String path =
        "/quimicaSanguinea/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      QuimicasSanguineas listaAnalisis =
          new QuimicasSanguineas.fromJsonList(decodedJsonMap);
      return listaAnalisis.quimicasSanguineas;
    } else {
      return null;
    }
  }

  Future<QuimicaSanguinea> getQuimicaSanguinea(idQuimicaSanguinea) async {
    String path = "/quimicaSanguinea/" + idQuimicaSanguinea.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      QuimicaSanguinea analisis;
      for (var item in decodedJsonMap) {
        analisis = new QuimicaSanguinea.fromJsonMap(item);
      }
      return analisis;
    } else {
      return null;
    }
  }

  //----MICROALBUMINURIA----
  Future<List<MicroalbuminuriaGeneral>> getMicroalbuminurias(idBeneficiario) async {
    String path =
        "/microalbuminuria/beneficiario/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Microalbuminurias listaAnalisis =
          new Microalbuminurias.fromJsonList(decodedJsonMap);
      return listaAnalisis.microalbuminurias;
    } else {
      return null;
    }
  }

  Future<Microalbuminuria> getMicroalbuminuria(idMicroalbuminuria) async {
    String path = "/microalbuminuria/" + idMicroalbuminuria.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Microalbuminuria analisis;
      for (var item in decodedJsonMap) {
        analisis = new Microalbuminuria.fromJsonMap(item);
      }
      return analisis;
    } else {
      return null;
    }
  }

  //----JORNADAS-----
  Future<List<Jornada>> getAllJornadas() async {
    String path = "/jornadas";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      Jornadas listaJornadas = new Jornadas.fromJsonList(decodedJsonMap);
      return listaJornadas.jornadas;
    } else {
      return null;
    }
  }

  Future<http.Response> addJornada(String nombre, String fecha,
      String localidad, String municipio, int idEstado) async {
    String path = "/jornadas";
    String uri = ip + baseUrl + path;
    Map data = {
      'nombre': nombre,
      'fecha': fecha,
      'localidad': localidad,
      'municipio': municipio,
      'idEstado': idEstado
    };
    //encode Map to JSON
    var body = json.encode(data);

    var response = await http.post(uri,
        headers: {"Content-Type": "application/json"}, body: body);
    print("${response.statusCode}");
    print("${response.body}");
    return response;
  }

  Future<List<Estado>> getEstados() async {
    String path = "/estados";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      Estados listaEstados = new Estados.fromJsonList(decodedJsonMap);
      return listaEstados.estados;
    } else {
      return null;
    }
  }

  //----TAMIZAJE----
  Future<List<TamizajeInfo>> getAllTamizajes(int idBeneficiario) async {
    String path = "/tamizaje/" + idBeneficiario.toString();
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      TamizajesInfo listaTamizajes =
          new TamizajesInfo.fromJsonList(decodedJsonMap);
      return listaTamizajes.tamizajesinfo;
    } else {
      return null;
    }
  }

  Future<Tamizaje> getATamizaje(idBeneficiario, idTamizaje) async {
    String path =
        "/tamizaje/" + idBeneficiario.toString() + "/" + idTamizaje.toString();
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      Tamizaje tamizaje;
      for (var item in decodedJsonMap) {
        print("in for");
        print(item);
        tamizaje = new Tamizaje.fromJsonMap(item);
        print("res");
        //print(tamizaje..toString());
      }
      return tamizaje;
    } else {
      return null;
    }
  }

  Future<List<Escolaridad>> getAllEscolaridades() async {
    String path = "/escolaridades";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      Escolaridades listaEscolaridades =
          new Escolaridades.fromJsonList(decodedJsonMap['data']);
         
      return listaEscolaridades.escolaridades;
    } else {
      return null;
    }
  }

   Future<http.Response> agregarBeneficiario(String _nombre, String _telefono, String _direccion, String _sexo, Escolaridad _esco, bool _seg, int _idJornada, DateTime _fecha) async {
    String path = "/beneficiarios";
    String uri = ip + baseUrl + path;
    Map data = {
     "nombreBeneficiario" : _nombre,
     "telefono" : _telefono,
     "direccion" : _direccion,
     "sexo": _sexo,
     "idEscolaridad": _esco.idEscolaridad,
     "fechaNacimiento": _fecha.toString(),
     "seguimiento" : _seg,
     "idJornada" : _idJornada,
     "activo" : 1,


    };
    //encode Map to JSON
    var body = json.encode(data);

    var response = await http.post(uri,
        headers: {"Content-Type": "application/json"}, body: body);
    print("${response.statusCode}");
    print("${response.body}");
    return response;
  }

//----REPORTES----
  Future<List<PruebasRegistradas>> getPruebasRegistradas() async {
    String path =
        "/reportes/getPruebas/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<PruebasRegistradas> resultados = new List();
      int contador = 1;
      for(var item in decodedJsonMap)
      {
        PruebasRegistradas prueba;
        switch(contador)
        {
          case 1:
            prueba = new PruebasRegistradas(item,  "EGO");
          break;
          case 2:
            prueba = new PruebasRegistradas(item, "M/C");
          break;
          case 3:
          prueba = new PruebasRegistradas(item, "QS3");
          break;
          case 4:
          prueba = new PruebasRegistradas(item, "DEP");
          break;
        }
        resultados.add(prueba);
        print(resultados);
        contador++;
      }
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<IMCGeneral>> getIMCGeneral() async {
    String path =
        "/reportes/getCountIMC/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<IMCGeneral> resultados = new List();
      int contador = 1;
      for(var item in decodedJsonMap)
      {
        IMCGeneral prueba;
        switch(contador)
        {
          case 1:
            prueba = new IMCGeneral(double.parse(item.toString()),  "Bajo Peso");
          break;
          case 2:
            prueba = new IMCGeneral(double.parse(item.toString()), "Normal");
          break;
          case 3:
          prueba = new IMCGeneral(double.parse(item.toString()), "Sobrepeso");
          break;
          case 4:
          prueba = new IMCGeneral(double.parse(item.toString()), "Obesidad");
          break;
        }
        resultados.add(prueba);
        print(resultados);
        contador++;
      }
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<Sociodemografico>> getSociodemografico() async {
    String path =
        "/reportes/getSexoTotal/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<Sociodemografico> resultados = new List();
      int contador = 1;
      for(var item in decodedJsonMap)
      {
        Sociodemografico prueba;
        switch(contador)
        {
          case 1:
            prueba = new Sociodemografico(item,  "Hombres");
          break;
          case 2:
            prueba = new Sociodemografico(item, "Mujeres");
          break;
        }
        resultados.add(prueba);
        print(resultados);
        contador++;
      }
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<Tamizados>> getTamizados() async {
    String path =
        "/reportes/getCountBeneficiariosConPruebas/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<Tamizados> resultados = new List();
      resultados.add(new Tamizados(decodedJsonMap[0]-decodedJsonMap[1], "Personas sin muestra"));
      resultados.add(new Tamizados(decodedJsonMap[1], "Personas con muestra"));
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<AltoRiesgo>> getAltoRiesgo() async {
    String path =
        "/reportes/getCountIMCPorSexo/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<AltoRiesgo> resultados = new List();
      resultados.add(new AltoRiesgo(decodedJsonMap[8], "Hombres en alto riesgo"));
      resultados.add(new AltoRiesgo(decodedJsonMap[9], "Mujeres en alto riesgo"));
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<IMCSexo>>> getIMCSexo() async {
    String path =
        "/reportes/getCountIMCPorSexo/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<IMCSexo>> resultados = new List();
      //hacer lista de resultados de hombres
      List<IMCSexo> hombres = new List();
      hombres.add(new IMCSexo(double.parse(decodedJsonMap[0].toString()), "Bajo Peso"));
      hombres.add(new IMCSexo(double.parse(decodedJsonMap[1].toString()), "Normal"));
      hombres.add(new IMCSexo(double.parse(decodedJsonMap[2].toString()), "Sobrepeso"));
      hombres.add(new IMCSexo(double.parse(decodedJsonMap[3].toString()), "Obesidad"));
      //hacer lista de resultados de mujeres
      List<IMCSexo> mujeres = new List();
      mujeres.add(new IMCSexo(double.parse(decodedJsonMap[4].toString()), "Bajo Peso"));
      mujeres.add(new IMCSexo(double.parse(decodedJsonMap[5].toString()), "Normal"));
      mujeres.add(new IMCSexo(double.parse(decodedJsonMap[6].toString()), "Sobrepeso"));
      mujeres.add(new IMCSexo(double.parse(decodedJsonMap[7].toString()), "Obesidad"));
      //agregar a lista de resultados
      resultados.add(hombres);
      resultados.add(mujeres);
    
      return resultados;
    } else {
      return null;
    }
  }
  
  Future<List<List<Platicas>>> getMedicaInicial() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[0], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[2], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[4], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[1], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[3], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[5], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<Platicas>>> getNutriciaInicial() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[6], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[8], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[10], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[7], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[9], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[11], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<Platicas>>> getPsicologiaInicial() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[12], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[14], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[16], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[13], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[15], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[17], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<Platicas>>> getMedicaFinal() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[18], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[20], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[22], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[19], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[21], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[23], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<Platicas>>> getNutriciaFinal() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[24], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[26], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[28], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[25], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[27], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[29], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }

  Future<List<List<Platicas>>> getPsicologiaFinal() async {
    String path =
        "/reportes/getCountEvaluaciones/";
    String uri = ip + baseUrl + path;

    http.Response resp = await http.get(uri);
    if (resp.statusCode == 200) {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      List<List<Platicas>> resultados = new List();
      //hacer lista de resultados de si
      List<Platicas> si = new List();
      si.add(new Platicas(decodedJsonMap[30], "Pregunta 1"));
      si.add(new Platicas(decodedJsonMap[32], "Pregunta 2"));
      si.add(new Platicas(decodedJsonMap[34], "Pregunta 3"));
      //hacer lista de resultados de no
      List<Platicas> no = new List();
      no.add(new Platicas(decodedJsonMap[31], "Pregunta 1"));
      no.add(new Platicas(decodedJsonMap[33], "Pregunta 2"));
      no.add(new Platicas(decodedJsonMap[35], "Pregunta 3"));
      //agregar a lista de resultados
      resultados.add(si);
      resultados.add(no);
    
      return resultados;
    } else {
      return null;
    }
  }


}


