<?php

namespace App\Http\Controllers;


use App\Models\Jornada;
use App\Http\Resources\Jornada as JornadaResource;
use App\Http\Resources\JornadaCollection;
use Illuminate\Http\Request;

class JornadaController extends Controller {
    public function all() {
        return new JornadaCollection(Jornada::all());
    }

    public function search($id) {
        return new JornadaResource(Jornada::findOrFail($id));
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

    public function delete($id) {
        $jornada = Jornada::findOrFail($id);
        $jornada->delete();

        return response()->json(null, 204);
    }
}
