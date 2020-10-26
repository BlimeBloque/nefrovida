<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tamizaje extends Model{
    protected $fillable = [
        'idTamizaje',
        'idBeneficiario',
        'presionArterial',
        'peso',
        'circunferenciaCintura',
        'circunferenciaCadera',
        'glucosaCapilar',
        'talla',
        'indiceCinturaCadera',
        'comentario',
    ];
}
