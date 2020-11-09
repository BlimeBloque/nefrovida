<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaQuimicaSanguinea extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quimica_sanguinea', function (Blueprint $table) {
            $table->increments("idQuimicaSanguinea");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->decimal("glucosa", 5,2)->nullable();
            $table->decimal("valorGlucosaBajo", 5,2)->nullable();
            $table->decimal("valorGlucosaAlto", 5,2)->nullable();
            $table->decimal("urea", 5,2)->nullable();
            $table->decimal("valorUreaBajo", 5,2)->nullable();
            $table->decimal("valorUreaAlto", 5,2)->nullable();
            $table->decimal("bun", 5,2)->nullable();
            $table->decimal("valorBunBajo", 5,2)->nullable();
            $table->decimal("valorBunAlto", 5,2)->nullable();
            $table->decimal("creatinina", 5,2)->nullable();
            $table->decimal("creatininaMujerBajo", 5,2)->nullable();
            $table->decimal("creatininaMujerAlto", 5,2)->nullable();
            $table->decimal("creatininaHombreBajo", 5,2)->nullable();
            $table->decimal("creatininaHombreAlto", 5,2)->nullable();
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
        Schema::dropIfExists('quimica_sanguinea');
    }
}
