import 'dart:convert';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/classes/TipoNota.dart';
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
  String ip = "http://192.168.42.50";
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

   Future<List<TipoNota>> getAllTiposNotas() async
  {
    String path = "/tiponota";
    String uri = ip + baseUrl + path;
    http.Response resp = await http.get(uri);
    if(resp.statusCode == 200)
    {
      final decodedJsonMap = json.decode(resp.body);
      //List<Movie> movies2 = decodedJsonMap['results'].map( (e) =>Movie.fromJsonMap(e));
      TiposNotas listaTipos = new TiposNotas.fromJsonList(decodedJsonMap['data']);
      return listaTipos.tipos;
    }
    else
    {
      return null;
    }
  }

  Future<http.Response> subirNotra(String titulo, String contenido, int idBeneficiario, int idTipoNota, String url_archivo) async {

    String path = "/nota";
    String uri = ip + baseUrl + path;

  Map data = {
    'idBeneficiario': idBeneficiario,
    'idTipoNota': idTipoNota,
    'comentario': contenido,
    'url_archivo': ''
  };
  //encode Map to JSON
  var body = json.encode(data);

  var response = await http.post(uri,
      headers: {"Content-Type": "application/json"},
      body: body
  );
  print("${response.statusCode}");
  print("${response.body}");
  return response;
  }
}