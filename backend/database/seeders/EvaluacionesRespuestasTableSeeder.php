<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EvaluacionesRespuestasOfrecidas;

class EvaluacionesRespuestasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        EvaluacionesRespuestasOfrecidas::create([
            'respuesta' => 'Sí'
        ]);
        EvaluacionesRespuestasOfrecidas::create([
            'respuesta' => 'No'
        ]);
    }
}
