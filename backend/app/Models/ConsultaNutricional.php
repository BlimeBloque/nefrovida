<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultaNutricional extends Model
{
    protected $table = "consulta_nutricional";

    protected $fillable = [
        'idBeneficiario',
        'ocupacion',
        'horariosComida',
        'cantidadDestinadaAlimentos',
        'apetito',
        'distension',
        'estreñimiento',
        'flatulencias',
        'vomitos',
        'caries',
        'edema', 
        'mareo',
        'zumbido',
        'cefaleas',
        'disnea',
        'poliuria',
        'actividadFisica',
        'horasSueño',
        'comidasAlDia',
        'lugarComida',
        'preparaComida',
        'comeEntreComidas',
        'alimentosPreferidos',
        'alimentosOdiados',
        'suplementos',
        'medicamentosActuales',
        'consumoAguaNatural',
        'recordatorioDesayuno',
        'recordatorioColacionMañana',
        'recordatorioComida',
        'recordatorioColacionTarde',
        'recordatorioCena',
        'peso',
        'altura',
        'tipoDieta',
        'kilocaloriasTotales',
        'porcentajeHidratosCarbono',
        'kilocaloriasHidratosCarbono',
        'porcentajeProteinas',
        'porcentajeGrasas',
        'diagnostico',
    ];
}


