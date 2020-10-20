<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarEnumRespuestasEvaluacionesRespuestasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('evaluaciones_respuestas', function (Blueprint $table) {
            $table->enum('respuestasPosibles', ['Sí', 'No'])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('evaluaciones_respuestas', function (Blueprint $table) {
            $table->dropColumn('respuestasPosibles');
        });
    }
}
