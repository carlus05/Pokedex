<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class habilitats extends Model
{
    public function Pokemon() {
        return $this->belongeToMany(Pokemon::class);
    }
}