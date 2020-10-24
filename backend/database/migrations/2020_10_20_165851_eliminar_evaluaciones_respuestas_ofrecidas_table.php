<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EliminarEvaluacionesRespuestasOfrecidasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('evaluaciones_respuestas_ofrecidas', function (Blueprint $table) {
            Schema::dropIfExists('evaluaciones_respuestas_ofrecidas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('evaluaciones_respuestas_ofrecidas', function (Blueprint $table) {
            //
        });
    }
}
