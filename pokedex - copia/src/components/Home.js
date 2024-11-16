import React, { useEffect, useState } from 'react';
import "../css/home.css";
import { Grid, Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';
import { getElements } from "../API";
import { useNavigate } from 'react-router-dom';

function Home({ busca }) {
    const [pokemon, setPokemon] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            try {
                const response = await getElements("http://127.0.0.1:8000/api/pokemons");
                const result = response?.result;
                
                if (Array.isArray(result)) {
                    setPokemon(result);
                } else {
                    console.error("Expected an array but got:", result);
                    setPokemon([]);
                }
            } catch (error) {
                console.error("Error al recuperar Pokémon:", error);
                setPokemon([]);
            }
        };

        getItems();
    }, []);

    return (
        <div className='Home'>
            <Grid className='grid' container spacing={2}>
                {pokemon?.filter(poke => poke.nom.toLowerCase().includes(busca.toLowerCase()))
                    .map((poke) => (
                    <Grid key={poke.id} item xs={12} sm={6} md={4} lg={3}>
                        <Card className='pokemon-card' onClick={() => navigate(`/pokemon/${poke.id}`)}>
                        <CardMedia
                            component="img"
                            height="100%"
                            image={poke.sprite_shiny}
                            alt={poke.nom}
                            className="pokemon-image"
                            style={{ objectFit: "contain" }}
                        />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {poke.nom}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nº {poke.id}
                                </Typography>
                                <div className='tipus-container'>
                                    {poke.tipuses?.map((tip) => (
                                        <Chip 
                                            key={tip.id} 
                                            label={tip.nom} 
                                            className={`tipus-chip ${tip.nom.toLowerCase()}`}
                                        />
                                    ))}
                                </div>
                                <Typography variant="body2">
                                    Alçada: {poke.alçada}m | Pes: {poke.pes}kg
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Home;

