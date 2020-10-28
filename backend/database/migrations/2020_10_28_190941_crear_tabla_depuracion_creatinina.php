<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaDepuracionCreatinina extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('depuracion_creatinina', function (Blueprint $table) {
            $table->increments("idDepuracionCreatinina");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->decimal("talla", 5,2)->nullable();
            $table->decimal("peso", 5,2)->nullable();
            $table->decimal("volumen", 5,2)->nullable();
            $table->decimal("superficieCorporal", 5,2)->nullable();
            $table->decimal("creatininaEnSuero", 5,2)->nullable();
            $table->decimal("valorCreatininaBajoMujer", 5,2)->nullable();
            $table->decimal("valorCreatininaAltoMujer", 5,2)->nullable();
            $table->decimal("valorCreatininaBajoHombre", 5,2)->nullable();
            $table->decimal("valorCreatininaAltoHombre", 5,2)->nullable();
            $table->decimal("depuracionCreatinina", 5,2)->nullable();
            $table->decimal("valorDepuracionBajoMujer", 5,2)->nullable();
            $table->decimal("valorDepuracionAltoMujer", 5,2)->nullable();
            $table->decimal("valorDepuracionBajoHombre", 5,2)->nullable();
            $table->decimal("valorDepuracionAltoHombre", 5,2)->nullable();
            $table->text("nota")->nullable();
            $table->string("metodo")->nullable();
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
        Schema::dropIfExists('depuracion_creatinina');
    }
}
