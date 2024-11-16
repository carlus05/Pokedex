<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHabitatsTable extends Migration
{
    public function up()
    {
        Schema::create('habitats', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->timestamps();
        });

        Schema::create('pokemon_habitats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pokemon_id');
            $table->unsignedBigInteger('habitat_id');
            $table->timestamps();

            $table->foreign('pokemon_id')->references('id')->on('pokemon')->onDelete('cascade');
            $table->foreign('habitat_id')->references('id')->on('habitats')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::disableForeignKeyConstraints();
        
        Schema::dropIfExists('pokemon_habitats');
        Schema::dropIfExists('habitats');
        
        Schema::enableForeignKeyConstraints();
    }
}
