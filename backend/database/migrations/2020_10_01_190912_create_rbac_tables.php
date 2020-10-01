<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRbacTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments("idRol");
            $table->string("nombreRol");
            $table->timestamps();
        });


        Schema::create('privilegios', function (Blueprint $table) {
            $table->increments("idPrivilegio");
            $table->string("nombrePrivilegio");
            $table->timestamps();
        });

        Schema::create('privilegios_roles', function (Blueprint $table) {
            $table->unsignedInteger("idRol");
            $table->foreign('idRol')->references('idRol')->on('roles')->onDelete('cascade');;
            $table->unsignedInteger("idPrivilegio");
            $table->foreign('idPrivilegio')->references('idPrivilegio')->on('privilegios')->onDelete('cascade');;
            $table->timestamps();
        });

        Schema::create('usuarios', function (Blueprint $table) {
            $table->increments("idUsuario");
            $table->unsignedInteger("idRol");
            $table->foreign('idRol')->references('idRol')->on('roles')->onDelete('cascade');;
            $table->string("usuario");
            $table->string("nombre");
            $table->string("contraseña");
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
        Schema::dropIfExists('privilegios_roles');
        Schema::dropIfExists('roles');
        Schema::dropIfExists('privilegios');
        Schema::dropIfExists('usuarios');
        
    }
}
