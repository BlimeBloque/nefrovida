<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beneficiarios extends Model
{
    protected $fillable = [
        'nombreBeneficiario',
        'edad',
        'idEscolaridad',
        'sexo',
        'enfermedad',
        'telefono',
        'direccion',
        'activo',
        'fechaNacimiento',
        'seguimiento'
    ];
}
