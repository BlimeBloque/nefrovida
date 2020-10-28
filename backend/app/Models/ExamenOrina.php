<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamenOrina extends Model
{
    protected $table = "examen_orina";
    protected $primaryKey = "idExamenOrina";

    protected $fillable = [
        'idBeneficiario',
        'color',
        'aspecto',
        'ph',
        'densidad',
        'nitritos',
        'glucosa',
        'proteinas',
        'hemoglobina',
        'cuerposCetonicos',
        'bilirribuna',
        'urobilinogeno',
        'leucocitos',
        'eritrocitosIntactos',
        'eritrocitosCrenados',
        'observacionLeucocitos',
        'cristales',
        'cilindros',
        'celulasEpiteliales',
        'bacterias',
        'nota',
        'metodo',
    ];
}
