<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class PreguntasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $preguntas = [
            1 => '¿Padece Diabetes Mellitus?',
            2 => '¿Sus padres padecen alguna enfermedad crónica? ¿Cuál?',
            3 => '¿Ha sido o actualmente está siendo tratado por presión arterial Alta (Hipertensión)?',
            4 => '¿Tiene algún familiar que padezca enfermedad renal crónica (Es decir con tratamiento de diálisis peritoneal o hemodiálisis?',
            5 => '¿Regularmente se auto medica con analgésicos de venta libre (Como ibuprofeno o naproxeno)?',
            6 => '¿Se le ha diagnosticado VIH/SIDA, lupus o Hepatitis C?',
            7 => '¿Padece frecuentemente infecciones urinarias?',
            8 => '¿Tiene sobrepeso u obesidad?',
            9 => '¿Acutalmente fuma o ha fumado en el pasado por más de 10 años?',
            10 => '¿Ingiere frecuentemente bebidad alcohólicas (una vez a la semana)?',
            11 => '¿Consume o ingiere drogas?',
            12 => '¿Nació con bajo peso al nacer o fue prematuro?',
        ];

        for($i = 1; $i < 13; $i++) {
            DB::table('preguntas')->insert([
                'pregunta' => $preguntas[$i],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);

        }
    }
}
