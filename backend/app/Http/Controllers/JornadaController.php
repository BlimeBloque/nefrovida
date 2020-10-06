<?php

namespace App\Http\Controllers;


use App\Models\Jornada;
use App\Http\Resources\Jornada as JornadaResource;
use App\Http\Resources\JornadaCollection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class JornadaController extends Controller {
    public function all() {
        return DB::table('jornadas')->leftJoin('estados_mexico', 'jornadas.idEstado', '=', 'estados_mexico.idEstado')->select('jornadas.*', 'estados_mexico.nombreEstado', 'estados_mexico.siglas')->get();
    }

    public function search($idJornada) {
        return DB::table('jornadas')->leftJoin('estados_mexico', 'jornadas.idEstado', '=', 'estados_mexico.idEstado')->where('idJornada', '=', $idJornada)->select('jornadas.*', 'estados_mexico.nombreEstado', 'estados_mexico.siglas')->get();
    }

    public function insert(Request $request) {
        $request->validate([
            'nombre' => 'required',
            'fecha' => 'required',
            'localidad' => 'required',
            'municipio' => 'required',
            'idEstado' => 'required',
        ]);

        $jornada = Jornada::create($request->all());

        return (new JornadaResource($jornada))
            ->response()
            ->setStatusCode(201);
    }

    public function edit($id, Request $request) {
        //$request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $request->validate([
            'nombre' => 'required',
            'fecha' => 'required',
            'localidad' => 'required',
            'municipio' => 'required',
            'idEstado' => 'required',
        ]);

        $query = DB::table('jornadas')->where('idJornada', $id)->update(['nombre' => $request->get('nombre'), 'fecha' => $request->get('fecha'), 'localidad' => $request->get('localidad'), 'municipio' => $request->get('municipio'), 'idEstado' => $request->get('idEstado')]);
        return $query;
    }

    public function delete($id) {
        $query = DB::table('jornadas')->where('idJornada', $id)->delete();

        return response()->json(null, 204);
    }
}
