<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CambiosOpcionFormulario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasColumn('opcion_formulario', 'idPoolRespuesta'))
        {
            Schema::table('opcion_formulario', function (Blueprint $table) {
                $table->dropForeign(['idPoolRespuesta']);
                $table->dropColumn('idPoolRespuesta');
            });
        }
        Schema::table('opcion_formulario', function (Blueprint $table) {
            $table->integer('ponderacion');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('opcion_formulario', function (Blueprint $table) {
            $table->dropColumn('ponderacion');
        });
    }
}
