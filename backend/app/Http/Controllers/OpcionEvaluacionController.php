<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Jornada;
use App\Http\Resources\Jornada as JornadaResource;
use App\Http\Resources\JornadaCollection;

class OpcionEvaluacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

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
        //
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

    public function searchByTipoJornada($idEvaluacion) {
        return DB::table('opcion_evaluacion')
            ->leftJoin('evaluaciones_preguntas', 'opcion_evaluacion.idEvaluacionPregunta', '=', 'evaluaciones_preguntas.idEvaluacionPregunta')
            ->where('opcion_evaluacion.idEvaluacion', '=', $idEvaluacion)
            ->select('opcion_evaluacion.idOpcionEvaluacion', 'opcion_evaluacion.idEvaluacion', 'evaluaciones_preguntas.evaluacionPregunta')
            ->get();


        /*SELECT oe.idOpcionEvaluacion, oe.idEvaluacion, oe.idEvaluacionPregunta, ep.evaluacionPregunta
        FROM opcion_evaluacion oe
        LEFT JOIN evaluaciones_preguntas ep ON oe.idEvaluacionPregunta=ep.idEvaluacionPregunta
        WHERE oe.idEvaluacion=2*/
    }
}
