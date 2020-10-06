<?php

namespace Database\Seeders;

use App\Models\Jornada;
use App\Models\Estados;
use Illuminate\Database\Seeder;

class JornadasTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     * 
     * 
     */
    public function run() {
        $Estados = array("Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán	", "Zacatecas");
        $Siglas = array("Ags.", "BCN.", "BCS.", "Camp.", "Chis.", "Chih.", "Coah.", "Col.", "D.F.", "Dgo.", "Gto.", "Gro.", "Hgo.", "Jal.", "Edo. Mex.", "Mich.", "Mor.", "Nay.", "MTY.", "Oax.", "Pue.", "Roo.", "SLP.", "Sin.", "Son.	", "Tab.", "Tam.", "Tlx.", "Ver.", "Yuc.", "Zac.");
        for ($i = 0; $i < 31; $i++) {
            Estados::create([
                'nombreEstado' => $Estados[$i],
                'siglas' => $Siglas[$i],
            ]);
        }

        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 50; $i++) {
            Jornada::create([
                'nombre' => $faker->name,
                'fecha' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'localidad' => $faker->state,
                'municipio' => $faker->city,
                'idEstado' => $faker->numberBetween($min = 1, $max = 31),
            ]);
        }
    }
}
