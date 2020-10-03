<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJornadasTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('jornadas', function (Blueprint $table) {
            $table->increments("id");
            $table->string("nombre");
            $table->date("fecha");
            $table->string("localidad");
            $table->string("municipio");
            $table->integer("idEstado");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('jornadas');
    }
}
