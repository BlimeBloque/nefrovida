<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ConsultaMedica extends Model
{
    protected $table = "consulta_medica";
    protected $primaryKey = "idConsultaMedica";

    protected $fillable = [
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