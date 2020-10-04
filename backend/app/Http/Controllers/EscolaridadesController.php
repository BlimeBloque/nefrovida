<?php

namespace App\Http\Controllers;


use App\Models\Escolaridades;
use App\Http\Resources\Escolaridad as EscolaridadResource;
use App\Http\Resources\EscolaridadCollection;
use Illuminate\Http\Request;

class EscolaridadesController extends Controller
{
    public function all() {
        return new EscolaridadCollection(Escolaridades::all());
    }
}
