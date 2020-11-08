import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:movil/classes/Beneficiario.dart';
import 'package:movil/components/BeneficiarioTabs.dart';

class DetalleBeneficiarioScreen extends StatelessWidget {

  static const String route = '/beneficiariosDetalle';

  final Beneficiario beneficiario;

  DetalleBeneficiarioScreen({Key key, @required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BeneficiarioTabs(beneficiario: this.beneficiario);
  }
}



class CardBeneficiario extends StatelessWidget {

  final Beneficiario beneficiario;
  CardBeneficiario({Key key,@required this.beneficiario}) : super(key: key);

  @override
  Widget build(BuildContext context) {


    return Padding(
      padding: EdgeInsets.all(8.0),
      child: Text(beneficiario.nombreBeneficiario),
    );
  }
}