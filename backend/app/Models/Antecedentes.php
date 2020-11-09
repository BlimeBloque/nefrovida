<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Antecedentes extends Model
{
    protected $table = "antecedentes";
    protected $primaryKey = "idAntecedentes";

    protected $fillable = [
        'idBeneficiario',
        'casa',
        'serviciosBasicos',
        'personalesPatologicos',
        'personalesNoPatologicos',
        'padreVivo',
        'enfermedadesPadre',
        'madreVivo',
        'enfermedadesMadre',
        'numHermanos',
        'numHermanosVivos',
        'enfermedadesHermanos',
        'otrosHermanos',
        'menarquia',
        'ritmo',
        'fum',
        'gestaciones',
        'partos',
        'abortos',
        'cesareas',
        'ivsa',
        'metodosAnticonceptivos'
    ];
}