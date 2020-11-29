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

    public function searchOne($idBeneficiario, $idTamizaje) {
        return DB::table('tamizajes')->leftJoin('beneficiarios', 'tamizajes.idBeneficiario', '=', 'beneficiarios.idBeneficiario')->where('tamizajes.idBeneficiario', '=', $idBeneficiario)->where('tamizajes.idTamizaje', '=', $idTamizaje)->select('tamizajes.*', 'beneficiarios.nombreBeneficiario')->get();
    }

    public function insert(Request $request) {
        $rules = [
            'idBeneficiario' => 'required',
            'presionArterial' => 'required|string',
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
            'string' => 'Este campo debe ser texto.',
        ];


        $this->validate($request, $rules, $customMessages);

        $tamizaje = Tamizaje::create($request->all());

        return (new TamizajeResource($tamizaje))
            ->response()
            ->setStatusCode(201);
    }

    public function edit($idBeneficiario, $idTamizaje, Request $request) {
        $rules = [
            'idBeneficiario' => 'required',
            'idTamizaje' => 'required',
            'presionArterial' => 'required|string',
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
            'string' => 'Este campo debe ser texto.',
        ];

        $this->validate($request, $rules, $customMessages);

        $query = DB::table('tamizajes')->where(
            ['idBeneficiario' => $idBeneficiario, 'idTamizaje' => $idTamizaje]
        )->update(
            [
                'presionArterial' => $request->get('presionArterial'),
                'peso' => $request->get('peso'),
                'circunferenciaCintura' => $request->get('circunferenciaCintura'),
                'circunferenciaCadera' => $request->get('circunferenciaCadera'),
                'glucosaCapilar' => $request->get('glucosaCapilar'),
                'talla' => $request->get('talla'),
                'indiceCinturaCadera' => $request->get('indiceCinturaCadera'),
                'comentario' => $request->get('comentario'),
                'updated_at' => DB::raw('NOW()'),
            ]
        );
        return $query;
    }

    public function delete($idBeneficiario, $idTamizaje) {

        $query = DB::table('tamizajes')->where(['idBeneficiario' => $idBeneficiario, 'idTamizaje' => $idTamizaje])->delete();

        return response()->json(null, 204);
    }
}
