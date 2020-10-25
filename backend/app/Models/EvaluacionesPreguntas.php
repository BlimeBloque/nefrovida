<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluacionesPreguntas extends Model
{
    protected $primaryKey = 'idEvaluacionPregunta';
    protected $fillable = [
        'evaluacionPregunta'
    ];
}