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
        $jornada = DB::table('evaluacion')->get(); // Obtiene los tipos de jornada (Inicio de la jornada/Fin de la jornada)
        $preguntas = DB::table('evaluaciones_preguntas')->get(); // Obtiene todas las preguntas (9)
        $respuestaOfrecida = DB::table('evaluaciones_respuestas_ofrecidas')->get(); // Obtiene las respuestas ofrecidas (Sí/No)
        
        $modulador = true; // Controla el cambio de respuesta entre 'Sí' y 'No'
        
        //Insertar todas las respuestas a las evaluaciones del inicio de la jornada
        for($i = 0; $i < 2*count($preguntas); $i++) {
            if($i > (2*count($preguntas)/2)-1) {
                OpcionEvaluacion::create([
                    'idEvaluacion' => $jornada[0]->idEvaluacion,
                    'idEvaluacionPregunta' => $preguntas[$i-9]->idEvaluacionPregunta,
                    'idRespuestaOfrecida' => $modulador  ? $respuestaOfrecida[0]->idRespuestaOfrecida : $respuestaOfrecida[1]->idRespuestaOfrecida,
                ]);
            }
            else {
                OpcionEvaluacion::create([
                    'idEvaluacion' => $jornada[0]->idEvaluacion,
                    'idEvaluacionPregunta' => $preguntas[$i]->idEvaluacionPregunta,
                    'idRespuestaOfrecida' => $modulador  ? $respuestaOfrecida[0]->idRespuestaOfrecida : $respuestaOfrecida[1]->idRespuestaOfrecida,
                ]);
            }
            $modulador = !$modulador;
        }
        
        //Insertar todas las respuestas a las evaluaciones del fin de la jornada
        $modulador = true; //Reinicia a true para empezar desde 'Sí' (en caso de que hayan más o menos preguntas en un futuro)
        for($i = 0; $i < 2*count($preguntas); $i++) {
            if($i > (2*count($preguntas)/2)-1) {
                OpcionEvaluacion::create([
                    'idEvaluacion' => $jornada[1]->idEvaluacion,
                    'idEvaluacionPregunta' => $preguntas[$i-9]->idEvaluacionPregunta,
                    'idRespuestaOfrecida' => $modulador  ? $respuestaOfrecida[0]->idRespuestaOfrecida : $respuestaOfrecida[1]->idRespuestaOfrecida,
                ]);
            }
            else {
                OpcionEvaluacion::create([
                    'idEvaluacion' => $jornada[1]->idEvaluacion,
                    'idEvaluacionPregunta' => $preguntas[$i]->idEvaluacionPregunta,
                    'idRespuestaOfrecida' => $modulador  ? $respuestaOfrecida[0]->idRespuestaOfrecida : $respuestaOfrecida[1]->idRespuestaOfrecida,
                ]);
            }
            $modulador = !$modulador;
        }
    }
}
