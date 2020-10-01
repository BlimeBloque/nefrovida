<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jornada extends Model {
    protected $fillable = [
        'id',
        'nombre',
        'fecha',
        'localidad',
        'municipio',
        'idEstado'
    ];
}
