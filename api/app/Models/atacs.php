<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atacs extends Model
{
    use HasFactory;

    public function rols() {
        return $this->belongsToMany(Pokemon::class);
    }

    public function atacsRapids()
    {
        return $this->hasMany(Atac::class)->where('tipus', 'ràpid');
    }

    public function atacsCarregats()
    {
        return $this->hasMany(Atac::class)->where('tipus', 'carregat');
    }
}

