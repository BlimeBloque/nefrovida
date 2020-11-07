import 'dart:convert';
import 'package:movil/classes/Beneficiario.dart';
import 'package:http/http.dart' as http;

class HttpHelper
{
  /*
    Para probarlo pongan su ip en vez de la mia.
    Eric: 192.168.42.123
    Mau:
    Jan:
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
}