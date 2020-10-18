<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EstadoController extends Controller {
    public function all() {
        return DB::table('estados_mexico')->select('idEstado as id', 'nombreEstado as nombre')->get();
    }
}
