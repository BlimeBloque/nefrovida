import 'dart:convert';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/ConsultaNutricion.dart';
import 'package:movil/components/HttpHelper.dart';
import 'package:http/http.dart' as http;

class HttpHelper
{
  /*
    Para probarlo pongan su ip en vez de la mia.
    Eric: 192.168.42.123
    Mau:
    Jan: 192.168.42.50
    Saul:
    Randy:
  */
  String ip = "http://192.168.42.123";
  String baseUrl = ":8000/api";

  Future<List<Beneficiario>> getAllBeneficiarios() async
  {
    String path = "/beneficiarios";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if(resp.statusCode == 200)
    {
      final decodedJsonMap = json.decode(resp.body);
      //List<Movie> movies2 = decodedJsonMap['results'].map( (e) =>Movie.fromJsonMap(e));
      Beneficiarios listaBeneficiarios = new Beneficiarios.fromJsonList(decodedJsonMap['data']);
      return listaBeneficiarios.beneficiarios;
    }
    else
    {
      return null;
    }
  }

  Future<List<ConsultaNutricion>> getConsultas(idBeneficiario) async
  {
    String path = "/consultaNutricion/beneficiario/"+idBeneficiario.toString();
    String uri = ip + baseUrl + path;
    print(uri);
    http.Response resp = await http.get(uri);
    if(resp.statusCode == 200)
    {
      final decodedJsonMap = json.decode(resp.body);
      print(decodedJsonMap);
      //List<Movie> movies2 = decodedJsonMap['results'].map( (e) =>Movie.fromJsonMap(e));
      ConsultasNutricion listaConsultas = new ConsultasNutricion.fromJsonList(decodedJsonMap);
      return listaConsultas.consultasNutricion;
    }
    else
    {
      return null;
    }
  }
}