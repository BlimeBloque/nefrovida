<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultaMedicaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consulta_medica', function (Blueprint $table) {
            $table->increments("idConsultaMedica");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->text("padecimientoActual")->nullable();
            //la tension arterial es formada por tension sistolica/tension diastolica
            $table->string("taDerecho")->nullable();//tension arterial brazo derecho
            $table->string("taIzquierdo")->nullable();//tension arterial brazo izquierdo
            $table->unsignedInteger("frecuenciaCardiaca")->nullable();
            $table->unsignedInteger("frecuenciaRespiratoria")->nullable();
            $table->decimal("temperatura", 2,1)->nullable();
            $table->decimal("peso", 5,2)->nullable();
            $table->decimal("talla", 5,2)->nullable();
            $table->text("cabezaCuello")->nullable();
            $table->text("torax")->nullable();
            $table->text("abdomen")->nullable();
            $table->text("extremidades")->nullable();
            $table->text("neurologicoEstadoMental")->nullable();
            $table->text("otros")->nullable();
            $table->text("diagnosticos")->nullable();
            $table->text("plan de tratamiento")->nullable();
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
        Schema::dropIfExists('consulta_medica');
    }
}
