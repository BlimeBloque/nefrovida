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
            JornadasTableSeeder::class,
            BeneficiariosSeeder::class,
            EvaluacionTableSeeder::class,
            EvaluacionesPreguntasTableSeeder::class,
            OpcionEvaluacionTableSeeder::class,
            TipoNotaSeeder::class
        ]);
    }
}
