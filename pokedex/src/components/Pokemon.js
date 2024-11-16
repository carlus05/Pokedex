import React, { useEffect, useState } from 'react';
import "../css/pokemon.css";
import blubasur from "../imatges/blubasur.png";
import Ivysaur from "../imatges/Ivysaur.png";
import charmander from "../imatges/charmander.png";
import charmeleon from "../imatges/charmeleon.png";
import Squirtle from "../imatges/Squirtle.png";
import { Grid, accordionSummaryClasses } from '@mui/material';
import { getElements } from "../API";
import { useParams } from 'react-router-dom';

function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [pokemon2, setPokemon2] = useState(null);
    const [pokemon3, setPokemon3] = useState(null);
    const [pokemon4, setPokemon4] = useState(null);
    const [pokemon5, setPokemon5] = useState(null);
    const [pokemon6, setPokemon6] = useState(null);
    const [pokemon7, setPokemon7] = useState(null);
    const [pokemon8, setPokemon8] = useState(null);
    const [pokemon9, setPokemon9] = useState(null);
    const [pokemon10, setPokemon10] = useState(null);
    const [pokemon11, setPokemon11] = useState(null);
    const [pokemon12, setPokemon12] = useState(null);
    const [pokemon13, setPokemon13] = useState(null);
    const [pokemon14, setPokemon14] = useState(null);
    const [pokemon15, setPokemon15] = useState(null);
    const [pokemon16, setPokemon16] = useState(null);
    const [pokemon17, setPokemon17] = useState(null);
    const [pokemon18, setPokemon18] = useState(null);
    const [pokemon19, setPokemon19] = useState(null);
    const [pokemon20, setPokemon20] = useState(null);
    const [pokemon21, setPokemon21] = useState(null);
    const [pokemon22, setPokemon22] = useState(null);
    const [pokemon23, setPokemon23] = useState(null);
    const [pokemon24, setPokemon24] = useState(null);
    const [pokemon25, setPokemon25] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const getItems = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/pokemon/" + id);
            setPokemon(result);
        };
        getItems();

        const getItems2 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/characteristic/" + id)
            setPokemon2(result);
        };
        getItems2();

        const getItems3 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/ability/" + id)
            setPokemon3(result);
        };
        getItems3();

        const getItems4 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/contest-effect/" + id)
            setPokemon4(result);
        };
        getItems4();

        const getItems5 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/encounter-condition-value/" + id)
            setPokemon5(result);
        };
        getItems5();

        const getItems6 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/encounter-method/" + id)
            setPokemon6(result);
        };
        getItems6();

        const getItems7 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/generation/" + id)
            setPokemon7(result);
        };
        getItems7();

        const getItems8 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/growth-rate/" + id)
            setPokemon8(result);
        };
        getItems8();

        const getItems9 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/item/" + id)
            setPokemon9(result);
        };
        getItems9();

        const getItems10 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/item-attribute/" + id)
            setPokemon10(result);
        };
        getItems10();

        const getItems11 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/item-category/" + id)
            setPokemon11(result);
        };
        getItems11();

        const getItems12 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/item-fling-effect/" + id)
            setPokemon12(result);
        };
        getItems12();

        const getItems13 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/item-pocket/" + id)
            setPokemon13(result);
        };
        getItems13();

        const getItems14 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/location/" + id)
            setPokemon14(result);
        };
        getItems14();

        const getItems15 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/location-area/" + id)
            setPokemon15(result);
        };
        getItems15();

        const getItems16 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move/" + id)
            setPokemon16(result);
        };
        getItems16();

        const getItems17 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-ailment/" + id)
            setPokemon17(result);
        };
        getItems17();

        const getItems18 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-battle-style/" + id)
            setPokemon18(result);
        };
        getItems18();

        const getItems19 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-category/" + id)
            setPokemon19(result);
        };
        getItems19();

        const getItems20 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-damage-class/" + id)
            setPokemon20(result);
        };
        getItems20();

        const getItems21 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-learn-method/" + id)
            setPokemon21(result);
        };
        getItems21();

        const getItems22 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/move-target/" + id)
            setPokemon22(result);
        };
        getItems22();

        const getItems23 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/nature/" + id)
            setPokemon23(result);
        };
        getItems23();

        const getItems24 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/pal-park-area/" + id)
            setPokemon24(result);
        };
        getItems24();

        const getItems25 = async () => {
            const { result } = await getElements("https://pokeapi.co/api/v2/pokeathlon-stat/" + id)
            setPokemon25(result);
        };
        getItems25();
    }, []);

    return (
        <div className='Home'>
            <div className='color'>
                <div className='PokeInfo'>
                    <div className='PokeNom'>
                        {pokemon?.name}
                    </div>
                </div>
                <div className='foto1'>
                    <img src={pokemon?.sprites.front_default} class="foto"></img>
                </div>
                <div className='dades'>
                    <div className='tipus'>
                        <div className='titolInfo'>
                            <h2>INFORMATION</h2>
                        </div>
                        <div className='style'>
                            <h4 className='styles'>Styles</h4>
                        </div>
                        {pokemon?.types?.map((pokemon, index) => {
                            return (

                                <div key={index} className={pokemon.type.name + 'tipus'}><div> {pokemon.type.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='heights'>
                        Heights
                        <div className='height'>{pokemon?.height} </div>
                    </div>
                    <div className='weights'>
                        Weights
                        <div className='weight'>{pokemon?.weight}</div>
                    </div>
                    <div className='categorys'>
                        Category
                        <div className='category'>Seed</div>
                    </div>
                    <div className='effect_entries'>
                        {pokemon3?.effect_entries?.map((i, index) => {
                            if (i.language.name == "en") {
                                return (
                                    <div className='effects'>
                                        <h3 className='titol_effect'>Effect</h3>
                                        <p className='text_effect'>{i?.effect}</p>
                                    </div>
                                )
                            }
                        })}

                        <div className='short_effect'>
                            {pokemon3?.effect_entries?.map((i, index) => {
                                if (i.language.name == "en") {
                                    return (
                                        <div>
                                            <h3 className='titol_short_effects'>Short effects</h3>
                                            <p className='text_short_effects'>{i?.short_effect}</p>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Pokemon;