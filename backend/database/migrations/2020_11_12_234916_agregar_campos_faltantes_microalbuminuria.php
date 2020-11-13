<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarCamposFaltantesMicroalbuminuria extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('microalbuminuria', function (Blueprint $table) {
            $table->decimal("valorRelacionAnormalAltoBajo", 5,2)->nullable();
            $table->decimal("valorRelacionAnormalAltoAlto", 5,2)->nullable();
            $table->decimal("relacion", 5,2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('microalbuminuria', function (Blueprint $table) {
            $table->dropColumn("valorRelacionAnormalAltoBajo");
            $table->dropColumn("valorRelacionAnormalAltoAlto");
            $table->dropColumn("relacion");
        });
    }
}
