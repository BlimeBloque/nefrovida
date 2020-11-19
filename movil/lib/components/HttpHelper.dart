import 'dart:convert';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/Jornada.dart';
import 'package:movil/classes/TipoNota.dart';
import 'package:movil/classes/Nota.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:http/http.dart' as http;

class HttpHelper {
  /*
    Para probarlo pongan su ip en vez de la mia.
    Eric: 192.168.42.123
    Mau: 192.168.100.12
    Jan: 192.168.42.50 / 192.168.42.138
    Saul:
    Randy:
  */
  String ip = "http://192.168.100.12";
  String baseUrl = ":8000/api";

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
}
