<?php
    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\PokemonController;

    
    Route::get("pokemons", [PokemonController::class, "index"]);
    Route::get("pokemons/{id}", [PokemonController::class, "show"]);