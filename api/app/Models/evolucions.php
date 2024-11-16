<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class evolucions extends Model
{
    public function rols() {
        return $this->hasMany(Pokemon::class);
    }
}
