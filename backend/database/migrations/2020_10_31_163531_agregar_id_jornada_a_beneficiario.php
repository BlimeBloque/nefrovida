<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AgregarIdJornadaABeneficiario extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('beneficiarios', function (Blueprint $table) {
            $table->unsignedInteger('idJornada');
            $table->foreign('idJornada')->references('idJornada')->on('jornadas')->onDelete('cascade')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('beneficiarios', 'idJornada'))
        {
            Schema::table('beneficiarios', function (Blueprint $table) {
                $table->dropForeign(['idJornada']);
                $table->dropColumn('idJornada');
            });
        }
    }
}
