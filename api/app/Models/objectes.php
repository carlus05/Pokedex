<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class objectes extends Model
{
    public function Pokemon() {
        return $this->hasMany(Pokemon::class);
    }
}
