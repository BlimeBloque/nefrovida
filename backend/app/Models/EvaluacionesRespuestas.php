<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluacionesRespuestas extends Model
{
    protected $table = 'evaluaciones_respuestas';
    protected $primaryKey = 'idEvaluacionRespuesta';

    protected $fillable = [
        'idEvaluacionRespuesta',
        'idOpcionEvaluacion',
        'idBeneficiario',
        'otraRespuesta',
        'respuestasPosibles',
        'grupo'
    ];
}
