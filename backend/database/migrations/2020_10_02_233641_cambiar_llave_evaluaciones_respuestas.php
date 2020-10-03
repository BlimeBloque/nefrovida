<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CambiarLlaveEvaluacionesRespuestas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('evaluaciones_respuestas', function (Blueprint $table) {
            $table->dropForeign(['idUsuario']);
            $table->renameColumn('idUsuario', 'idBeneficiario');
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
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
            //
        });
    }
}
