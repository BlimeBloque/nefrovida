import 'package:flutter/material.dart';
import 'package:movil/classes/ConsultaNutricion.dart';

class DetalleDatosDieteticos extends StatelessWidget {
  final ConsultaNutricion consulta;
  DetalleDatosDieteticos({Key key, @required this.consulta}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Padding(
          padding: EdgeInsets.symmetric(vertical: 5.0),
          child: Text(
            "Datos Dietéticos",
            style: TextStyle(
              fontSize: 20,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        //COMIDAS AL DIA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "N• comidas al día: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.comidasAlDia != null ? consulta.comidasAlDia : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.comidasAlDia != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //DONDE REALIZA COMIDAS
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "¿Dónde realiza sus comidas? ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.lugarComida != null ? consulta.lugarComida : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.lugarComida != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //QUIEN PREPARA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "¿Quién prepara? ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.preparaComida != null ? consulta.preparaComida : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.preparaComida != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //COME ENTRE COMIDAS
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "¿Come entre comidas? ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.comeEntreComidas != null ? consulta.comeEntreComidas : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.comeEntreComidas != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //ALIMENTOS PREFERIDOS
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Alimentos Preferidos: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.alimentosPreferidos != null ? consulta.alimentosPreferidos : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.alimentosPreferidos != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //ALIMENTOS QUE NO LE GUSTAN
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Alimentos que no le gustan: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.alimentosOdiados != null ? consulta.alimentosOdiados : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.alimentosOdiados != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //SUPLEMENTOS
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Consumo de suplementos o complementos alimentarios: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
                textAlign: TextAlign.center,
              ),
            ),
            Center(
              child: Text(
                consulta.suplementos != null ? consulta.suplementos : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.suplementos != null ? FontStyle.normal : FontStyle.italic,
                ),
                textAlign: TextAlign.center,
              )
            ),
          ],
        ),
        //MEDICAMENTOS ACTUALES
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Medicamentos consumidos actualmente: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.medicamentosActuales != null ? consulta.medicamentosActuales : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.medicamentosActuales != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
        //CONSUMO DE AGUA
        Wrap(
          children: <Widget>[
            Center(
              child: Text(
                "Consumo de agua natural: ",
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Center(
              child: Text(
                consulta.consumoAguaNatural != null ? consulta.consumoAguaNatural : 'No registrado',
                style: TextStyle(
                  fontSize: 16,
                  fontStyle: consulta.consumoAguaNatural != null ? FontStyle.normal : FontStyle.italic,
                ),
              ),
            ),
          ],
        ),
      ],
    );
  }
}