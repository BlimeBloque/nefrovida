<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluacionesTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluaciones_respuestas_ofrecidas', function (Blueprint $table) {
            $table->increments("idRespuestaOfrecida");
            $table->string("respuesta");
            $table->timestamps();
        });

        Schema::create('evaluaciones_preguntas', function (Blueprint $table) {
            $table->increments("idEvaluacionPregunta");
            $table->string("evaluacionPregunta");
            $table->timestamps();
        });

        Schema::create('evaluacion', function (Blueprint $table) {
            $table->increments("idEvaluacion");
            $table->string("nombreEvaluacion");
            $table->timestamps();
        });

        Schema::create('opcion_evaluacion', function (Blueprint $table) {
            $table->increments("idOpcionEvaluacion");
            $table->unsignedInteger("idEvaluacion");
            $table->foreign('idEvaluacion')->references('idEvaluacion')->on('evaluacion');
            $table->unsignedInteger("idEvaluacionPregunta");
            $table->foreign('idEvaluacionPregunta')->references('idEvaluacionPregunta')->on('evaluaciones_preguntas')->onDelete('cascade');
            $table->unsignedInteger("idRespuestaOfrecida");
            $table->foreign('idRespuestaOfrecida')->references('idRespuestaOfrecida')->on('evaluaciones_respuestas_ofrecidas')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('evaluaciones_respuestas', function (Blueprint $table) {
            $table->increments("idEvaluacionRespuesta");
            $table->unsignedInteger("idOpcionEvaluacion");
            $table->foreign('idOpcionEvaluacion')->references('idOpcionEvaluacion')->on('opcion_evaluacion')->onDelete('cascade');
            $table->unsignedInteger("idUsuario");
            $table->foreign('idUsuario')->references('idUsuario')->on('usuarios')->onDelete('cascade');
            $table->text("otraRespuesta");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('evaluaciones_respuestas');
        Schema::dropIfExists('evaluaciones_respuestas_ofrecidas');
        Schema::dropIfExists('evaluaciones_preguntas');
        Schema::dropIfExists('evaluaciones');
        Schema::dropIfExists('opcion_evaluacion');
        
    }
}
