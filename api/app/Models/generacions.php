<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class generacions extends Model
{
    public function rols() {
        return $this->belongsToMany(Pokemon::class);
    }
}
