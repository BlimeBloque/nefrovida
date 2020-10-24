<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TipoNota;
use App\Http\Resources\TipoNota as EscolaridadResource;
use App\Http\Resources\TipoNotaCollection;

class TipoNotaController extends Controller
{
    public function all() {
        return new TipoNotaCollection(TipoNota::all());
    }
}
