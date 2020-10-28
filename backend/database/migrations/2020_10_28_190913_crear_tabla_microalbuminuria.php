<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaMicroalbuminuria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('microalbuminuria', function (Blueprint $table) {
            $table->increments("idQuimicaSanguinea");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->decimal("microAlbumina", 5,2)->nullable();
            $table->decimal("valorMicroAlbuminaBajo", 5,2)->nullable();
            $table->decimal("valorMicroAlbuminaAlto", 5,2)->nullable();
            $table->decimal("creatinina", 5,2)->nullable();
            $table->decimal("valorCreatininaBajo", 5,2)->nullable();
            $table->decimal("valorCreatininaAlto", 5,2)->nullable();
            $table->decimal("valorRelacionNormalBajo", 5,2)->nullable();
            $table->decimal("valorRelacionNormalAlto", 5,2)->nullable();
            $table->decimal("valorRelacionAnormalBajo", 5,2)->nullable();
            $table->decimal("valorRelacionAnormalAlto", 5,2)->nullable();
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
        Schema::dropIfExists('microalbuminuria');
    }
}
