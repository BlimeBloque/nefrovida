<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaExamenOrina extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('examen_orina', function (Blueprint $table) {
            $table->increments("idExamenOrina");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->string("color")->nullable();
            $table->string("aspecto")->nullable();
            $table->decimal("ph", 4,2)->nullable();
            $table->decimal("densidad", 5,2)->nullable();
            $table->string("nitritos")->nullable();
            $table->string("glucosa")->nullable();
            $table->string("proteinas")->nullable();
            $table->string("hemoglobina")->nullable();
            $table->string("cuerposCetonicos")->nullable();
            $table->string("bilirribuna")->nullable();
            $table->string("urobilinogeno")->nullable();
            $table->string("leucocitos")->nullable();
            $table->string("eritrocitosIntactos")->nullable();
            $table->string("eritrocitosCrenados")->nullable();
            $table->string("observacionLeucocitos")->nullable();
            $table->string("cristales")->nullable();
            $table->string("cilindros")->nullable();
            $table->string("celulasEpiteliales")->nullable();
            $table->string("bacterias")->nullable();
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
        Schema::dropIfExists('examen_orina');
    }
}
