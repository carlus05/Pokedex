<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('atacs', function (Blueprint $table) {
            $table->id();
            $table->string("nom");
            $table->integer("pokemon_id");
            $table->integer("PPs");
            $table->integer("posicio");
            $table->double("potencia");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('atacs');
    }
};
