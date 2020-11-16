<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\EvaluacionesPreguntas as EvaluacionesPreguntasResource;
use App\Http\Resources\EvaluacionesPreguntasCollection;
use App\Models\EvaluacionesPreguntas;

class EvaluacionPreguntasController extends Controller
{
    public function all() {

        return new EvaluacionesPreguntasCollection(EvaluacionesPreguntas::all());
    }

    public function editarPreguntas(Request $request) {
        $request->validate([
            "evaluacionPregunta" => "required"
        ]);
        $pregunta = EvaluacionesPreguntas::find($request->input('idEvaluacionPregunta'));
        $pregunta->evaluacionPregunta = $request->input('evaluacionPregunta');
        $pregunta->save();

    }
}
