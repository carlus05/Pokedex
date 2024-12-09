<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PokemonSeeder extends Seeder
{
    public function run()
    {
        // Dades dels Pokémon
        #Bulbasur
        $pokemons = [
            1 => [
                "nom" => "Bulbasaur",
                "alçada" => 0.7,
                "pes" => 6.9,
                "HP" => 45,
                "atac" => 49,
                "defensa" => 49,
                "atac_esp" => 65,
                "def_esp" => 65,
                "velocitat" => 45,
                "descripcio" => "Bulbasaur, un Pokémon de tipuses planta/verí. Quanta més llum rep, més augmenta la seva força i més es desenvolupa.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20230319203107/Bulbasaur_LGPE.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20200308140321/Bulbasaur_EpEc.gif",
                "gen_id" => 1
            ],
            #Ivysaur
            2 => [
                "nom" => "Ivysaur",
                "alçada" => 1,
                "pes" => 13,
                "HP" => 60,
                "atac" => 95,
                "defensa" => 63,
                "atac_esp" => 80,
                "def_esp" => 80,
                "velocitat" => 60,
                "descripcio" => "Aquest Pokémon treu un bulb al llom i, per poder amb el seu pes, té unes potes i un tronc gruixuts i forts.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/3/37/latest/20230319230138/Ivysaur_LGPE.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/7/79/latest/20200308143212/Ivysaur_EpEc.gif/180px-Ivysaur_EpEc.gif",
                "gen_id" => 2
            ],
            #Venusaur
            3 => [
                "nom" => "Venusaur",
                "alçada" => 2,
                "pes" => 100,
                "HP" => 80,
                "atac" => 198,
                "defensa" => 189,
                "atac_esp" => 100,
                "def_esp" => 100,
                "velocitat" => 80,
                "descripcio" => "Venusaur, la forma final de l'evolució d'un Bulbasaur.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/1/1d/latest/20230319230842/Venusaur_LGPE.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/a/a9/latest/20200308154305/Venusaur_EpEc.gif",
                "gen_id" => 3
            ],
            # Charmander
            4 => [
                "nom" => "Charmander",
                "alçada" => 0.6,
                "pes" => 8.5,
                "HP" => 39,
                "atac" => 52,
                "defensa" => 43,
                "atac_esp" => 60,
                "def_esp" => 50,
                "velocitat" => 80,
                "descripcio" => "Charmander és un Pokémon de tipus foc.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/a/ac/latest/20230322002913/Charmander_LGPE.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/f/f5/latest/20200102192846/Charmander_EpEc.gif",
                "gen_id" => 1
            ],

            # Charmeleon
            5 => [
                "nom" => "Charmeleon",
                "alçada" => 1.1,
                "pes" => 19.0,
                "HP" => 58,
                "atac" => 64,
                "defensa" => 58,
                "atac_esp" => 80,
                "def_esp" => 65,
                "velocitat" => 80,
                "descripcio" => "En agitar la seva ardent cola, eleva a poc a poc la temperatura al seu voltant per sufocar els seus rivals.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/c/ca/latest/20230322002952/Charmeleon_LGPE.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/0/00/latest/20200203225949/Charmeleon_EpEc.gif",
                "gen_id" => 2
            ],

            # Charizard
            6 => [
                "nom" => "Charizard",
                "alçada" => 1.7,
                "pes" => 90.5,
                "HP" => 78,
                "atac" => 84,
                "defensa" => 78,
                "atac_esp" => 109,
                "def_esp" => 85,
                "velocitat" => 100,
                "descripcio" => "Llança flames tan calentes que fonen roques. S'enlaira al cel per buscar adversaris poderosos.",
                "sprite" => "https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20230316204603/Charizard_DBPR.png",
                "sprite_shiny" => "https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20200102060755/Charizard_EpEc.gif",
                "gen_id" => 1
            ]
            
            
        ];

        // Inserir Pokémon a la taula 'pokemon'
        foreach ($pokemons as $id => $pokemon) {
            DB::table('pokemon')->insert([
                'id' => $id,
                'nom' => $pokemon['nom'],
                'alçada' => $pokemon['alçada'],
                'pes' => $pokemon['pes'],
                'HP' => $pokemon['HP'],
                'atac' => $pokemon['atac'],
                'defensa' => $pokemon['defensa'],
                'atac_esp' => $pokemon['atac_esp'],
                'def_esp' => $pokemon['def_esp'],
                'velocitat' => $pokemon['velocitat'],
                'descripcio' => $pokemon['descripcio'],
                'sprite' => $pokemon['sprite'],
                'sprite_shiny' => $pokemon['sprite_shiny'],
                'gen_id' => $pokemon['gen_id']
            ]);
        }

        // Inserir habitat
        $habitat = [
            ["nom" => "pradera"]
        ];

        // Inserir tipus
        $tipus = [
            ["nom" => "Planta"],
            ["nom" => "Verí"],
            ["nom" => "Foc"],
            ["nom" => "Vol"],
        ];

        DB::table('tipuses')->insert($tipus);

        // Associar Pokémon amb tipus
        DB::table('pokemon_tipuses')->insert([
            ["pokemon_id" => 1, "tipuses_id" => 1],
            ["pokemon_id" => 1, "tipuses_id" => 2],
            ["pokemon_id" => 2, "tipuses_id" => 1],
            ["pokemon_id" => 2, "tipuses_id" => 2],
            ["pokemon_id" => 3, "tipuses_id" => 1],
            ["pokemon_id" => 3, "tipuses_id" => 2],
            ["pokemon_id" => 4, "tipuses_id" => 3],
            ["pokemon_id" => 5, "tipuses_id" => 3],
            ["pokemon_id" => 6, "tipuses_id" => 3],
            ["pokemon_id" => 6, "tipuses_id" => 4],
        ]);

        // Habilitats
        $habilitats = [
            ["id" => 1, "nom" => "Gruix", "descripcio" => "Potencia els atacs de tipus planta en un apur", "oculta" => "Clorofila"],
            ["id" => 2, "nom" => "Gruix", "descripcio" => "Potencia els atacs de tipus planta en un apur", "oculta" => "Clorofila"],
            ["id" => 3, "nom" => "Gruix", "descripcio" => "Potencia els atacs de tipus planta en un apur", "oculta" => "Clorofila"],
            ["id" => 4, "nom" => "Mar llamas", "descripcio" => "Augmenta la potència dels atacs de tipus foc quan els punts de salut són baixos.", "oculta" => "Poder solar"],
            ["id" => 5, "nom" => "Poder solar", "descripcio" => "Augmenta l'atac especial de Charmeleon quan hi ha clima assolellat.", "oculta" => "Poder solar"]
        ];
        
        

        DB::table('habilitats')->insert($habilitats);

        // Atacs per a cada Pokémon
        $atacsPokemon = [
            1 => [
                ["nom" => "Làtic soca", "PPs" => 45, "Posicio" => 1, "potencia" => 100],
                ["nom" => "Bomba germen", "PPs" => 45, "Posicio" => 2, "potencia" => 100]
            ],
            2 => [
                ["nom" => "Fulla afilada", "PPs" => 45, "Posicio" => 1, "potencia" => 100],
                ["nom" => "Bomba fang", "PPs" => 45, "Posicio" => 2, "potencia" => 100]
            ],
            3 => [
                ["nom" => "Fuet cep", "PPs" => 45, "Posicio" => 1, "potencia" => 100],
                ["nom" => "Raig solar", "PPs" => 45, "Posicio" => 2, "potencia" => 100]
            ],
            4 => [
                ["nom" => "Grunyit", "PPs" => 40, "Posicio" => 1, "potencia" => 0],
                ["nom" => "Llançaflames", "PPs" => 15, "Posicio" => 2, "potencia" => 90]
            ],
            5 => [
                ["nom" => "Grunyit", "PPs" => 40, "Posicio" => 1, "potencia" => 0],
                ["nom" => "Cua Foc", "PPs" => 15, "Posicio" => 2, "potencia" => 85],
                ["nom" => "Llançaflames", "PPs" => 15, "Posicio" => 3, "potencia" => 90],
                ["nom" => "Triturar", "PPs" => 15, "Posicio" => 4, "potencia" => 80]
            ],
            6 => [
                ["nom" => "Llança drac", "PPs" => 10, "Posicio" => 1, "potencia" => 60],
                ["nom" => "Cua Foc", "PPs" => 15, "Posicio" => 2, "potencia" => 85],
                ["nom" => "Llançaflames", "PPs" => 15, "Posicio" => 3, "potencia" => 90],
                ["nom" => "Triturar", "PPs" => 15, "Posicio" => 4, "potencia" => 80]
            ]
        ];
        

        // Inserir els atacs per a cada Pokémon
        foreach ($atacsPokemon as $pokemonId => $atacs) {
            foreach ($atacs as $atac) {
                $atacId = DB::table("atacs")->insertGetId([
                    'nom' => $atac['nom'],
                    'pokemon_id' => $pokemonId,
                    'PPs' => $atac['PPs'],
                    'Posicio' => $atac['Posicio'],
                    'potencia' => $atac['potencia']
                ]);
                DB::table("atacs_pokemon")->insert([
                    'pokemon_id' => $pokemonId,
                    'atacs_id' => $atacId
                ]);
            }
        }

        // Evolucions
        DB::table("evolucions")->insert([
            ["pokemon_id" => 1, "pokemon_id_evo" => 2],
            ["pokemon_id" => 2, "pokemon_id_evo" => 3]
        ]);

        DB::table("habitats")->insert([
            ["id" => 1, "nom" => "Bosc"],
            ["id" => 2, "nom" => "Muntanya"],
            ["id" => 3, "nom" => "Caverna"],
            ["id" => 4, "nom" => "Prat"],
            ["id" => 5, "nom" => "Urbà"],
            // Afegeix més hàbitats segons sigui necessari
        ]);

        DB::table("pokemon_habitats")->insert([
            ["pokemon_id" => 1, "habitat_id" => 1], // Bosc
            ["pokemon_id" => 1, "habitat_id" => 4], // Prat
        ]);
    }
}

