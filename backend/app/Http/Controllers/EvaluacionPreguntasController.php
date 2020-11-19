<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EvaluacionesPreguntas as EvaluacionesPreguntasResource;
use App\Http\Resources\EvaluacionesPreguntasCollection;
use App\Models\EvaluacionesPreguntas;
use Illuminate\Support\Facades\DB;

class EvaluacionPreguntasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {

        return new EvaluacionesPreguntasCollection(EvaluacionesPreguntas::all());
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        return DB::table('evaluaciones_preguntas')->where('idEvaluacionPregunta', '=', $id)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        $request->validate([
            "evaluacionPregunta" => "required"
        ]);


        $pregunta = EvaluacionesPreguntas::find($request->input('idEvaluacionPregunta'));
        $pregunta->evaluacionPregunta = $request->input('evaluacionPregunta');
        //echo $pregunta;
        $pregunta->save();

    }
}
