<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TipoNota;

class TipoNotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        TipoNota::create([
            'nombre' => 'Nota General',
        ]);

        TipoNota::create([
            'nombre' => 'Nota Medica',
        ]);

        TipoNota::create([
            'nombre' => 'Nota de Nutrición',
        ]);

        TipoNota::create([
            'nombre' => 'Nota de Laboratorio',
        ]);
    }
}
