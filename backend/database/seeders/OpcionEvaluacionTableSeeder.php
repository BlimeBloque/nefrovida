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

        //Insertar todas las respuestas a las evaluaciones del inicio de la jornada
        for($i = 0; $i < count($preguntas); $i++) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[0]->idEvaluacion,
                'idEvaluacionPregunta' => $preguntas[$i]->idEvaluacionPregunta
            ]);
        }

        //Insertar todas las respuestas a las evaluaciones del fin de la jornada
        for($i = 0; $i < count($preguntas); $i++) {
            OpcionEvaluacion::create([
                'idEvaluacion' => $jornada[1]->idEvaluacion,
                'idEvaluacionPregunta' => $preguntas[$i]->idEvaluacionPregunta
            ]);
        }
    }
}
