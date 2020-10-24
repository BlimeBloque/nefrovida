<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\EvaluacionesPreguntas;
use Carbon\Carbon;

class EvaluacionesPreguntasTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $preguntas = [
            1 => '¿La diabetes es el aumento de glucosa (azúcar) presente en la sangre?',
            2 => '¿La presión aumenta cuando se consumen alimentos salados y grasos?',
            3 => '¿La enfermedad renal es la pérdida de las funciones del riñón?',
            4 => '¿La obesidad es la acumulación anormal o excesiva de grasa en el cuerpo, dañina para la salud?',
            5 => '¿El IMC es un indicador simple en el que se necesita conocer el peso y talla para identificar si se padece sobrepeso y obesidad?',
            6 => '¿La obesidad o sobrepeso puede ser una causa para desarrolar diabetes e hipertensión arterial?',
            7 => '¿Conoces el significado de las siglas ERC?',
            8 => '¿Es verdad que el estrés puede ocasionarme una enfermedad crónica?',
            9 => '¿Tengo alguna idea de cómo detectar que estoy estresado(a)?',
        ];

        for($i = 1; $i < 10; $i++) {
            EvaluacionesPreguntas::create([
                'evaluacionPregunta' => $preguntas[$i],
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]);

        }
    }
}
