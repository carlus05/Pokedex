import React, { useEffect, useState } from 'react';
import "../css/home.css";
import blubasur from "../imatges/blubasur.png";
import Ivysaur from "../imatges/Ivysaur.png";
import charmander from "../imatges/charmander.png";
import charmeleon from "../imatges/charmeleon.png";
import Squirtle from "../imatges/Squirtle.png";
import { Grid } from '@mui/material';
import { getElements } from "../API";
import { useNavigate } from 'react-router-dom';

function Home({ busca }) {
    const [pokemon, setPokemon] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const getItems = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1008");
            const itemData = await Promise.all(result?.results.map(async (poke) => {
                const ajuda = await getElements(poke.url);
                return ajuda.result;
            }));
            setPokemon(itemData);
        };
        getItems();
    }, []);
    return (
        <div className='Home'>
            <Grid className='grid' container spacing={2}>
                {pokemon?.map((poke) => {
                    if (poke?.name.includes(busca))
                        return (
                            <Grid key={poke.id} item xs={6}>
                                <div className='bulbasur' onClick={() => { navigate('/pokemon/' + poke.id) }}>
                                    <img src={poke.sprites.front_default} class="img1" />
                                    <div className='info'>
                                        <b class="id">
                                            Nº {poke.id}
                                        </b>
                                        <div className='titol'>
                                            <h5>{poke.name}</h5>
                                        </div>
                                        <div className='habilitats'>
                                            {poke.types?.map((tipu) => {
                                                return (
                                                    <div key={tipu.id} className='habilitats'>
                                                        <div className='habilitats1'>
                                                            <div class={tipu.type.name}> {tipu.type.name}</div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </div>
                            </Grid>
                        )
                })}
            </Grid>
        </div>
    );
}

export default Home;