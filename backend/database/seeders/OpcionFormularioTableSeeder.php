<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class OpcionFormularioTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $formulario = DB::table('formularios')->get(); // Obtiene el tipo de formulario (Factor de riesgo)
        $preguntas = DB::table('preguntas')->get(); // Obtiene todas las preguntas (12)

        //Insertar todas las respuestas al formulario de factor de riesgo
        for($i = 0; $i < count($preguntas); $i++) {
            DB::table('opcion_formulario')->insert([
                'idFormulario' => $formulario[0]->idFormulario,
                'idPregunta' => $preguntas[$i]->idPregunta,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);
        }
    }
}
