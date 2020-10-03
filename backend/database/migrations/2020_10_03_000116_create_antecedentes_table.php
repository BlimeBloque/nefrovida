<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAntecedentesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('antecedentes', function (Blueprint $table) {
            $table->increments('idAntecedentes');
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->enum("casa", ['propia', 'rentada', 'prestada'])->nullable();
            $table->boolean("serviciosBasicos")->nullable();
            $table->text("personalesPatologicos")->nullable();
            $table->text("personalesNoPatologicos")->nullable();
            $table->boolean("padreVivo")->nullable();
            $table->text("enfermedadesPadre")->nullable();
            $table->boolean("madreVivo")->nullable();
            $table->text("enfermedadesMadre")->nullable();
            $table->unsignedInteger("numHermanos");
            $table->unsignedInteger("numHermanosVivos")->nullable();
            $table->text("enfermedadesHermanos")->nullable();
            $table->text("otrosHermanos")->nullable();
            $table->unsignedInteger("menarquia")->nullable();//edad de primera menstruacion
            $table->unsignedInteger("ritmo")->nullable();
            $table->date("fum")->nullable(); //fecha de ultima menstruacion
            $table->unsignedInteger("gestaciones")->nullable();
            $table->unsignedInteger("partos")->nullable();
            $table->unsignedInteger("abortos")->nullable();
            $table->unsignedInteger("cesareas")->nullable();
            $table->unsignedInteger("ivsa")->nullable();//edad del inicio de la vida sexual activa
            $table->text("metodosAnticonceptivos")->nullable();
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
        Schema::dropIfExists('antecedentes');
    }
}
