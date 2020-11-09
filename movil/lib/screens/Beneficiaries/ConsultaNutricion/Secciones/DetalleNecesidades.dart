import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleNecesidades extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleNecesidades({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Necesidades Energéticas y Nutrimentales",
            style: TextStyle(
              fontSize: 18,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //TIPO DE DIETA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Tipo de dieta: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.tipoDieta != null ? consulta.tipoDieta: 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.tipoDieta != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //KILOCALORIAS TOTALES
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Kilocalorías totales: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.kilocaloriasTotales != null ? consulta.kilocaloriasTotales: 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.kilocaloriasTotales != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        DataTable(
          columns: [
            DataColumn(
              label: Text('Nutrimento'),
            ),
            DataColumn(
              label: Text('Porcentaje'),
            ),
            DataColumn(
              label: Text('Kilocalorías'),
            ),
          ],
          rows: [
            //HC
            DataRow(
              cells: [
                DataCell(
                  Center(
                    child: Text(
                      "HC",
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Center(
                  child: Text(
                      consulta.porcentajeHidratosCarbono != null ? consulta.porcentajeHidratosCarbono: 'No registrado',
                      style: TextStyle(
                        fontSize: 16,
                        fontStyle: consulta.porcentajeHidratosCarbono != null ? FontStyle.normal : FontStyle.italic,
                      ),
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Center(
                  child: Text(
                      consulta.kilocaloriasHidratosCarbono != null ? consulta.kilocaloriasHidratosCarbono: 'No registrado',
                      style: TextStyle(
                        fontSize: 16,
                        fontStyle: consulta.kilocaloriasHidratosCarbono != null ? FontStyle.normal : FontStyle.italic,
                      ),
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ],
            ),
            //LS
            DataRow(
              cells: [
                DataCell(
                  Center(
                    child: Text(
                      "LS",
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Center(
                  child: Text(
                      consulta.porcentajeGrasas != null ? consulta.porcentajeGrasas: 'No registrado',
                      style: TextStyle(
                        fontSize: 16,
                        fontStyle: consulta.porcentajeGrasas != null ? FontStyle.normal : FontStyle.italic,
                      ),
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Text('')
                ),
              ],
            ),
            //PS
            DataRow(
              cells: [
                DataCell(
                  Center(
                    child: Text(
                      "PS",
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Center(
                  child: Text(
                      consulta.porcentajeProteinas != null ? consulta.porcentajeProteinas: 'No registrado',
                      style: TextStyle(
                        fontSize: 16,
                        fontStyle: consulta.porcentajeProteinas != null ? FontStyle.normal : FontStyle.italic,
                      ),
                      softWrap: true,
                      overflow: TextOverflow.clip,
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
                DataCell(
                  Text('')
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }
}