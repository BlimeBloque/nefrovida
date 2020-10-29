<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\EvaluacionesRespuestas;
use App\Http\Resources\EvaluacionesRespuestas as EvaluacionesRespuestasResource;

class EvaluacionesRespuestasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'idOpcionEvaluacion' => 'required',
            'idBeneficiario' => 'required',
            'otraRespuesta' => 'nullable',
            'respuestasPosibles' => 'required'
        ]);

        $rows = DB::table('evaluaciones_respuestas AS er')
                        ->where('er.idBeneficiario', '=', $request->input('idBeneficiario'))
                        ->orderBy('er.idEvaluacionRespuesta', 'desc')
                        ->limit(1)->get();
 
        
        if(isset($rows[0]->grupo)) {
            if(($rows[0]->idEvaluacionRespuesta) % 9 == 0) {
                $numGrupo = $rows[0]->grupo +1;
            }
            else {
                $numGrupo = $rows[0]->grupo;
            }
        }
        else {
            $numGrupo = 1;
        }

        $evaluacionRespuesta = EvaluacionesRespuestas::create(array_merge($request->all(), ['grupo' => $numGrupo]));

        return (new EvaluacionesRespuestasResource($evaluacionRespuesta))
            ->response()
            ->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function searchByBenefStart($idBeneficiario) {
        return DB::table('evaluaciones_respuestas AS er')
                ->leftJoin('opcion_evaluacion AS oe', 'er.idOpcionEvaluacion', '=', 'oe.idOpcionEvaluacion')
                ->leftJoin('evaluacion AS e', 'oe.idEvaluacion', '=', 'e.idEvaluacion')
                ->where('er.idBeneficiario', '=', $idBeneficiario)
                ->where('oe.idEvaluacion', '=', 1)
                ->orderBy('er.idEvaluacionRespuesta')
                ->groupBy('er.grupo', 'e.nombreEvaluacion')
                ->select('e.nombreEvaluacion', 'er.grupo')
                ->get();

        /*
        JOIN evaluacion e ON oe.idEvaluacion=e.idEvaluacion 
        where er.idBeneficiario=4 AND oe.idEvaluacion=1
        ORDER BY er.idEvaluacionRespuesta
        */
    }

    public function searchByBenefEnd($idBeneficiario) {
        return DB::table('evaluaciones_respuestas AS er')
                ->leftJoin('opcion_evaluacion AS oe', 'er.idOpcionEvaluacion', '=', 'oe.idOpcionEvaluacion')
                ->leftJoin('evaluacion AS e', 'oe.idEvaluacion', '=', 'e.idEvaluacion')
                ->where('er.idBeneficiario', '=', $idBeneficiario)
                ->where('oe.idEvaluacion', '=', 2)
                ->orderBy('er.idEvaluacionRespuesta')
                ->groupBy('er.grupo', 'e.nombreEvaluacion')
                ->select('e.nombreEvaluacion', 'er.grupo')
                ->get();

        /*
        SELECT er.idEvaluacionRespuesta, b.nombreBeneficiario, ep.evaluacionPregunta, er.respuestasPosibles, e.nombreEvaluacion
        FROM evaluaciones_respuestas er
        JOIN opcion_evaluacion oe ON er.idOpcionEvaluacion=oe.idOpcionEvaluacion 
        JOIN evaluaciones_preguntas ep ON oe.idEvaluacionPregunta=ep.idEvaluacionPregunta
        JOIN beneficiarios b ON er.idBeneficiario=b.idBeneficiario 
        JOIN evaluacion e ON oe.idEvaluacion=e.idEvaluacion 
        where er.idBeneficiario=4 AND oe.idEvaluacion=1
        ORDER BY er.idEvaluacionRespuesta
        */
    }
}
