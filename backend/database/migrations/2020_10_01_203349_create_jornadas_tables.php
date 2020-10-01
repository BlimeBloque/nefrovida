<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJornadasTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estados_mexico', function (Blueprint $table) {
            $table->increments("idEstado");
            $table->string("nombreEstado");
            $table->string("siglas");
            $table->timestamps();
        });

        Schema::create('jornadas', function (Blueprint $table) {
            $table->increments("idJornada");
            $table->string("nombre");
            $table->date("fecha");
            $table->string("localidad");
            $table->string("municipio");
            $table->unsignedInteger("idEstado");
            $table->foreign('idEstado')->references('idEstado')->on('estados_mexico')->onDelete('cascade');;
            $table->timestamps();
        });

        Schema::create('jornada_beneficiario', function (Blueprint $table) {
            $table->increments("idJornadaBeneficiario");
            $table->unsignedInteger("idJornada");
            $table->foreign('idJornada')->references('idJornada')->on('jornadas')->onDelete('cascade');;
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');;
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
        Schema::dropIfExists('jornada_beneficiario');
        Schema::dropIfExists('jornadas');
        Schema::dropIfExists('estados_mexico');

    }
}
