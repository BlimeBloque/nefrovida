<?php

namespace Database\Seeders;

use App\Models\Jornada;
use Illuminate\Database\Seeder;

class JornadasTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     * 
     * protected $fillable = [
        'id',
        'nombre',
        'fecha',
        'localidad',
        'municipio',
        'idEstado'
    ];
     * 
     */
    public function run() {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Jornada::create([
                'nombre' => $faker->name,
                'fecha' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'localidad' => $faker->state,
                'municipio' => $faker->city,
                'idEstado' => $faker->randomDigit,
            ]);
        }
    }
}
