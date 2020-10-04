<?php

namespace Database\Seeders;

use App\Models\Escolaridades;
use App\Models\Beneficiarios;
use Illuminate\Database\Seeder;

class EscolaridadesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Escolaridades::create([
            'nombreEscolaridad' => 'Profesional',
        ]);

        Escolaridades::create([
            'nombreEscolaridad' => 'Medio Superior',
        ]);

        Escolaridades::create([
            'nombreEscolaridad' => 'Secundaria',
        ]);

        Escolaridades::create([
            'nombreEscolaridad' => 'Primaria',
        ]);

        Escolaridades::create([
            'nombreEscolaridad' => 'Lee/Escribe',
        ]);

        Escolaridades::create([
            'nombreEscolaridad' => 'Analfabeta',
        ]);
    }
}
