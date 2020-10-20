<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EliminarIdRespuestaOfrecidaOpcionEvaluacion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('opcion_evaluacion', function (Blueprint $table) {
            $table->dropForeign(['idRespuestaOfrecida']);
            $table->dropColumn('idRespuestaOfrecida');
            $table->dropColumn('idRespuestaOfrecida');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('opcion_evaluacion', function (Blueprint $table) {
            $table->unsignedInteger('idRespuestaOfrecida');
            $table->foreign('idRespuestaOfrecida')->references('idRespuestaOfrecida')->on('evaluaciones_respuestas_ofrecidas')->onDelete('cascade');
        });
    }
}
