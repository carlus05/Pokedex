<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class poke_atacs extends Model
{
    protected $name = 'atacs_pokemon';
    public function poke_atacs() {
        return $this->belongsToMany(poke_atacs::class);
    }
}
