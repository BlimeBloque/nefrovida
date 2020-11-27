class PruebasRegistradas {
  final int numPruebas;

  PruebasRegistradas(this.numPruebas);

  PruebasRegistradas.fromMap(Map<String, dynamic> map)
  :assert(map['numPruebas'] != null),
    numPruebas = map['numPruebas'];
  
} 