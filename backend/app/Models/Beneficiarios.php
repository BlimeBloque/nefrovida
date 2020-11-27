<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Beneficiarios extends Model
{

    protected $primaryKey = 'idBeneficiario';
    
    protected $fillable = [

        'idBeneficiario',
        'nombreBeneficiario',
        'idEscolaridad',
        'sexo',
        'telefono',
        'direccion',
        'activo',
        'fechaNacimiento',
        'seguimiento',
        'idJornada',
    ];
}
