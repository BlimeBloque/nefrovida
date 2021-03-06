<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarCamposFaltantesConsultaNutricion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consulta_nutricional', function (Blueprint $table) {
            $table->text("nota")->nullable();
            $table->string("url_archivo")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('consulta_nutricional', function (Blueprint $table) {
            $table->dropColumn("nota");
            $table->dropColumn("url_archivo");
        });
    }
}
