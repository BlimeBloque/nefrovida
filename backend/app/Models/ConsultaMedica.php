<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultaNutricional extends Model
{
    protected $table = "consulta_nutricional";

    protected $fillable = [
        'idConsultaMedica',
        'idBeneficiario',
        'padecimientoActual',
        'taDerecho',
        'taIzquierdo',
        'frecuenciaCardiaca',
        'frecuenciaRespiratoria',
        'temperatura',
        'peso',
        'talla',
        'cabezaCuello',
        'torax',
        'abdomen',
        'extremidades',
        'neurologicoEstadoMental',
        'otros',
        'diagnosticos',
        'plan de tratamiento'
    ];
}