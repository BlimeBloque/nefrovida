<?php

namespace App\Http\Controllers;


use App\Models\Jornada;
use App\Http\Resources\Jornada as JornadaResource;
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
        $rules = [
            'nombre' => 'required|string',
            'fecha' => 'required',
            'localidad' => 'required|string',
            'municipio' => 'required|string',
            'idEstado' => 'required|numeric',
        ];

        $customMessages = [
            'required' => 'Este campo es requerido.',
            'numeric' => 'Este campo debe contener solo números.',
            'string' => 'Este campo debe ser texto.',
        ];

        $this->validate($request, $rules, $customMessages);

        $jornada = Jornada::create($request->all());

        return (new JornadaResource($jornada))
            ->response()
            ->setStatusCode(201);
    }

    public function edit($id, Request $request) {
        //$request->merge(['correct' => (bool) json_decode($request->get('correct'))]);
        $rules = [
            'nombre' => 'required|string',
            'fecha' => 'required',
            'localidad' => 'required|string',
            'municipio' => 'required|string',
            'idEstado' => 'required|numeric',
        ];

        $customMessages = [
            'required' => 'Este campo es requerido.',
            'numeric' => 'Este campo debe contener solo números.',
            'string' => 'Este campo debe ser texto.',
        ];

        $this->validate($request, $rules, $customMessages);

        $query = DB::table('jornadas')->where('idJornada', $id)->update(['nombre' => $request->get('nombre'), 'fecha' => $request->get('fecha'), 'localidad' => $request->get('localidad'), 'municipio' => $request->get('municipio'), 'idEstado' => $request->get('idEstado')]);
        return $query;
    }

    public function delete($id) {
        $query = DB::table('jornadas')->where('idJornada', $id)->delete();

        return response()->json(null, 204);
    }

    public function compararAll() {
        return DB::table('jornadas')->select('idJornada as value', 'nombre as label')->get();
    }

    public function compare($id0, $id1, $id2, $id3, $id4) {
        $arrFecha = ["Fecha" => DB::table('jornadas')->select('fecha')->where('idJornada', "=", $id0)->orWhere('idJornada', "=", $id1)->orWhere('idJornada', "=", $id2)->orWhere('idJornada', "=", $id3)->orWhere('idJornada', "=", $id4)->get()];

        $arrLocalidad = ['Localidad' => DB::table('jornadas')->select('localidad')->where('idJornada', "=", $id0)->orWhere('idJornada', "=", $id1)->orWhere('idJornada', "=", $id2)->orWhere('idJornada', "=", $id3)->orWhere('idJornada', "=", $id4)->get()];

        return $arrFecha + $arrLocalidad;
    }
}
