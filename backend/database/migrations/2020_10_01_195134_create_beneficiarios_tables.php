<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeneficiariosTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('escolaridades', function (Blueprint $table) {
            $table->increments("idEscolaridad");
            $table->string("nombreEscolaridad");
            $table->timestamps();
        });

        Schema::create('beneficiarios', function (Blueprint $table) {
            $table->increments("idBeneficiario");
            $table->string("nombreBeneficiario");
            $table->unsignedInteger("edad");
            $table->unsignedInteger("idEscolaridad");
            $table->foreign('idEscolaridad')->references('idEscolaridad')->on('escolaridades')->onDelete('cascade');
            $table->enum('sexo', ['H', 'M'])->nullable();
            $table->string("enfermedad")->nullable();
            $table->string("telefono")->nullable();
            $table->string("direccion")->nullable();
            $table->boolean("activo");
            $table->date("fechaNacimiento")->nullable();
            $table->timestamps();
        });

        Schema::create('archivos', function (Blueprint $table) {
            $table->increments("idArchivo");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->string("nombre");
            $table->string("url");
            $table->timestamps();
        });

        Schema::create('tamizajes', function (Blueprint $table) {
            $table->increments("idTamizaje");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->string("presionArterial")->nullable();
            $table->decimal("peso", 5 , 2)->nullable();
            $table->decimal("circunferenciaCintura", 5 , 2)->nullable();
            $table->decimal("circunferenciaCadera", 5, 2)->nullable();
            $table->decimal("glucosaCapilar", 5 , 2)->nullable();
            $table->decimal("talla", 4, 2)->nullable();
            $table->decimal("indiceCinturaCadera", 5, 3)->nullable();
            $table->text("comentario")->nullable();
            $table->timestamps();
        });

        Schema::create('tipo_nota', function (Blueprint $table) {
            $table->increments("idTipoNota");
            $table->string("nombre");
            $table->timestamps();
        });

        Schema::create('notas', function (Blueprint $table) {
            $table->increments("idNota");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->unsignedInteger("idTipoNota");
            $table->foreign('idTipoNota')->references('idTipoNota')->on('tipo_nota');
            $table->text("comentario")->nullable();
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
        Schema::dropIfExists('archivos');
        Schema::dropIfExists('tamizajes');
        Schema::dropIfExists('notas');
        Schema::dropIfExists('tipo_nota');
        Schema::dropIfExists('beneficiarios');
        Schema::dropIfExists('escolaridades');
    }
}
