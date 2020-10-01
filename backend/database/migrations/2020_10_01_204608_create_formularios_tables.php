<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormulariosTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pool_respuestas', function (Blueprint $table) {
            $table->increments("idPoolRespuesta");
            $table->string("respuesta");
            $table->timestamps();
        });

        Schema::create('preguntas', function (Blueprint $table) {
            $table->increments("idPregunta");
            $table->string("pregunta");
            $table->timestamps();
        });

        Schema::create('formularios', function (Blueprint $table) {
            $table->increments("idFormulario");
            $table->string("nombre");
            $table->text("descripcion");
            $table->timestamps();
        });

        Schema::create('opcion_formulario', function (Blueprint $table) {
            $table->increments("idOpcionFormulario");
            $table->unsignedInteger("idFormulario");
            $table->foreign('idFormulario')->references('idFormulario')->on('formularios')->onDelete('cascade');
            $table->unsignedInteger("idPregunta");
            $table->foreign('idPregunta')->references('idPregunta')->on('preguntas');
            $table->unsignedInteger("idPoolRespuesta");
            $table->foreign('idPoolRespuesta')->references('idPoolRespuesta')->on('pool_respuestas')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('respuestas', function (Blueprint $table) {
            $table->increments("idRespuesta");
            $table->unsignedInteger("idOpcionFormulario");
            $table->foreign('idOpcionFormulario')->references('idOpcionFormulario')->on('opcion_formulario')->onDelete('cascade');
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->text("textoRespuesta");
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
        Schema::dropIfExists('respuestas');
        Schema::dropIfExists('opcion_formulario');
        Schema::dropIfExists('formularios');
        Schema::dropIfExists('preguntas');
        Schema::dropIfExists('pool_respuestas');
    }
}
