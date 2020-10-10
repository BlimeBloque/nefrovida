<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarDxTablaConsultaNutricional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('consulta_nutricional', function (Blueprint $table) {
            $table->string('diagnostico')->nullable(); //DX
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
            //
        });
    }
}
