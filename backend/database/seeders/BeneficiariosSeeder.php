<?php

namespace Database\Seeders;

use App\Models\Beneficiarios;
use Illuminate\Database\Seeder;

class BeneficiariosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
        for($i = 0; $i < 30; $i++)
        {
            Beneficiarios::create([
                'nombreBeneficiario' => $faker->name,
                'idEscolaridad' => $faker->numberBetween($min = 1, $max = 6),
                'sexo' => $faker->randomElement($array = array('H', 'M')),
                'telefono' => $faker->tollFreePhoneNumber,
                'direccion' => $faker->address,
                'activo' => $faker->numberBetween($min = 0, $max = 1),
                'fechaNacimiento' => explode( " ", ($faker->dateTimeBetween($startDate = '-19 years', $endDate = '-4 years', $timezone = null)->format('Y-m-d')))[0],
                'seguimiento' => $faker->numberBetween($min = 0, $max = 1),
                'idJornada' => $faker->numberBetween($min = 1, $max = 1),
            ]);
        }
    }
}
