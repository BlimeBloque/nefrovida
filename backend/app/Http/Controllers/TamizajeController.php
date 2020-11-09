<?php

namespace App\Http\Controllers;

use App\Models\Tamizaje;
use App\Http\Resources\Tamizaje as TamizajeResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TamizajeController extends Controller {
    public function all() {
        return DB::table('tamizajes')->get();
    }

    public function searchAll($id) {
        return DB::table('tamizajes')->where('idBeneficiario', '=', $id)->select('idTamizaje', 'created_at')->get();
    }

    public function searchOne($idBeneficiario, $idTamizaje){
        return DB::table('tamizajes')->where('idBeneficiario', '=', $idBeneficiario)->where('idTamizaje', '=', $idTamizaje)->get();
    }

    public function insert(Request $request) {
        $rules = [
            'idBeneficiario' => 'required',
            'presionArterial' => 'required',
            'peso' => 'required|numeric',
            'circunferenciaCintura' => 'required|numeric',
            'circunferenciaCadera' => 'required|numeric',
            'glucosaCapilar' => 'required|numeric',
            'talla' => 'required|numeric',
            'comentario' => 'required',
        ];
        $customMessages = [
            'required' => 'Este campo es requerido.',
            'numeric' => 'Este campo debe contener solo números.',
        ];


        $this->validate($request, $rules, $customMessages);

        $tamizaje = Tamizaje::create($request->all());

        return (new TamizajeResource($tamizaje))
            ->response()
            ->setStatusCode(201);
    }

    public function edit($id, Request $request) {
        /*
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
        */
    }

    public function delete($id) {
        /*
        $query = DB::table('jornadas')->where('idJornada', $id)->delete();

        return response()->json(null, 204);
        */
    }
}
