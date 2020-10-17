<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\OpcionEvaluacion;
use Carbon\Carbon;

class OpcionEvaluacionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jornada = DB::table('evaluacion')->get();
        $preguntas = DB::table('evaluaciones_preguntas')->get();
        $respuestaOfrecida = DB::table('evaluaciones_respuestas_ofrecidas')->get();

        //Insertar todas las respuestas 'Si' a las evaluaciones del inicio de la jornada
        foreach($preguntas as $pregunta) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[0]->idEvaluacion,
                'idEvaluacionPregunta' => $pregunta->idEvaluacionPregunta,
                'idRespuestaOfrecida' => $respuestaOfrecida[0]->idRespuestaOfrecida,
            ]);
        }
        
        //Insertar todas las respuestas 'No' a las evaluaciones del inicio de la jornada
        foreach($preguntas as $pregunta) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[0]->idEvaluacion,
                'idEvaluacionPregunta' => $pregunta->idEvaluacionPregunta,
                'idRespuestaOfrecida' => $respuestaOfrecida[1]->idRespuestaOfrecida,
            ]);
        }

        //Insertar todas las respuestas 'Si' a las evaluaciones del fin de la jornada
        foreach($preguntas as $pregunta) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[1]->idEvaluacion,
                'idEvaluacionPregunta' => $pregunta->idEvaluacionPregunta,
                'idRespuestaOfrecida' => $respuestaOfrecida[0]->idRespuestaOfrecida,
            ]);
        }

        //Insertar todas las respuestas 'No' a las evaluaciones del fin de la jornada
        foreach($preguntas as $pregunta) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[1]->idEvaluacion,
                'idEvaluacionPregunta' => $pregunta->idEvaluacionPregunta,
                'idRespuestaOfrecida' => $respuestaOfrecida[1]->idRespuestaOfrecida,
            ]);
        }
    }
}
