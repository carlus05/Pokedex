<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pokemon', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->double("alçada");
            $table->double("pes");
            $table->double("HP");
            $table->double("atac");
            $table->double("defensa");
            $table->double("atac_esp");
            $table->double("def_esp");
            $table->double("velocitat");
            $table->string("descripcio");
            $table->string("sprite");
            $table->string("sprite_shiny");
            $table->integer("gen_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();

        // Elimina primer les taules relacionades
        Schema::dropIfExists('pokemon_habitats');
        Schema::dropIfExists('atacs_pokemon');
        Schema::dropIfExists('pokemon_tipuses');
        Schema::dropIfExists('evolucions');
        Schema::dropIfExists('habilitats');

        // Finalment, elimina la taula pokemon
        Schema::dropIfExists('pokemon');

        Schema::enableForeignKeyConstraints();
    }
};
