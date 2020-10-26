<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        $this->call([
            EscolaridadesSeeder::class,
            BeneficiariosSeeder::class,
            EvaluacionTableSeeder::class,
            JornadasTableSeeder::class,
            EvaluacionesPreguntasTableSeeder::class,
            EvaluacionesRespuestasTableSeeder::class,
            OpcionEvaluacionTableSeeder::class,
        ]);
    }
}
