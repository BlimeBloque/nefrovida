<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Nota extends Model
{
    protected $table = "notas";
    protected $primaryKey = "idNota";

    protected $fillable = [
        'idBeneficiario',
        'idTipoNota',
        'tituloNota',
        'comentario',
        'url_archivo',
    ];
}
