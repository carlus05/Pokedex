<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    public function habilidades() {
        return $this->belongsToMany(Habilitats::class);
    }

    public function atacs() {
        return $this->belongsToMany(Atacs::class);
    }

    public function evolucions() {
        return $this->hasMany(evolucions::class);
    }

    public function generacions() {
        return $this->belongsToMany(generacions::class);
    }

    public function migracions() {
        return $this->belongsToMany(poke_atacs::class);
    }

    public function tipuses() {
        return $this->belongsToMany(tipuses::class);
    }


    public function objectes() {
        return $this->hasMany(objectes::class);
    }
}

