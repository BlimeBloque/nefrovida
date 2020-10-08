<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConsultaNutricionalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('consulta_nutricional', function (Blueprint $table) {
            $table->increments("idConsultaNutricional");
            $table->unsignedInteger("idBeneficiario");
            $table->foreign('idBeneficiario')->references('idBeneficiario')->on('beneficiarios')->onDelete('cascade');
            $table->string("ocupacion")->nullable();
            $table->string("horariosComida")->nullable();
            $table->string("cantidadDestinadaAlimentos")->nullable();
            $table->string("apetito")->nullable();
            $table->string("distension")->nullable();
            $table->string("estreñimiento")->nullable();
            $table->string("flatulencias")->nullable();
            $table->string("vomitos")->nullable();
            $table->string("caries")->nullable();
            $table->string("edema")->nullable();
            $table->string("mareo")->nullable();
            $table->string("zumbido")->nullable();
            $table->string("cefaleas")->nullable();
            $table->string("disnea")->nullable();
            $table->string("poliuria")->nullable();
            $table->text("actividadFisica")->nullable();
            $table->string("horasSueño")->nullable();
            $table->string("comidasAlDia")->nullable();
            $table->string("lugarComida")->nullable();
            $table->string("preparaComida")->nullable();
            $table->string("comeEntreComidas")->nullable();
            $table->string("alimentosPreferidos")->nullable();
            $table->string("alimentosOdiados")->nullable();
            $table->string("suplementos")->nullable();
            $table->string("medicamentosActuales")->nullable();
            $table->string("consumoAguaNatural")->nullable();
            $table->string("recordatorioDesayuno")->nullable();
            $table->string("recordatorioColacionMañana")->nullable();
            $table->string("recordatorioComida")->nullable();
            $table->string("recordatorioColacionTarde")->nullable();
            $table->string("recordatorioCena")->nullable();
            $table->decimal("peso", 5,2)->nullable();
            $table->decimal("altura", 5,2)->nullable();
            //falta PI y DX
            $table->string("tipoDieta")->nullable();
            $table->decimal("kilocaloriasTotales", 7, 2)->nullable();
            $table->decimal("porcentajeHidratosCarbono", 5,2)->nullable();
            $table->decimal("kilocaloriasHidratosCarbono", 7, 2)->nullable();
            //no se cual es LS y cual PS
            $table->decimal("porcentajeProteinas", 5,2)->nullable();
            $table->decimal("porcentajeGrasas", 5,2)->nullable();
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
        Schema::dropIfExists('consulta_nutricional');
    }
}
