<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepuracionCreatinina extends Model
{
    protected $table = "depuracion_creatinina";
    protected $primaryKey = "idDepuracionCreatinina";

    protected $fillable = [
        'idBeneficiario',
        'talla',
        'peso',
        'volumen',
        'superficieCorporal',
        'creatininaEnSuero',
        'valorCreatininaBajoMujer',
        'valorCreatininaAltoMujer',
        'valorCreatininaBajoHombre',
        'valorCreatininaAltoHombre',
        'depuracionCreatinina',
        'valorDepuracionBajoMujer',
        'valorDepuracionAltoMujer',
        'valorDepuracionBajoHombre',
        'valorDepuracionAltoHombre',
        'nota',
        'metodo',
    ];
}
