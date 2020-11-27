<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Respuestas extends Model
{
    protected $table = 'respuestas';
    protected $primaryKey = 'idRespuesta';

    protected $fillable = [
        'idRespuesta',
        'idOpcionFormulario',
        'idBeneficiario',
        'textoRespuesta',
        'respuesta',
        'ponderacion',
        'grupo'
    ];
}