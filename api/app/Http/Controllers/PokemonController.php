<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;

class PokemonController extends Controller {
    public function index() {
        $data = Pokemon::with('tipuses')->with('atacs')->get();
        return response()->json([
            "success"=> true,
            "data"=> $data
        ]);
    }

    public function show($id) {
        $data = Pokemon::where('id', '=',$id)->with('tipuses')->with('atacs')->get();
        return response()->json([
            "success"=> true,
            "data"=> $data
        ]);
    }
    
}


