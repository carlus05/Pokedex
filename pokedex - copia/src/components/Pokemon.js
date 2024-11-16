import React, { useEffect, useState } from 'react';
import "../css/pokemon.css";
import { getElements } from "../API";
import { useParams } from 'react-router-dom';

function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchPokemonData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const { result } = await getElements(`http://127.0.0.1:8000/api/pokemons/${id}`);
                if (result && result.length > 0) {
                    setPokemon(result[0]);
                } else {
                    throw new Error("No s'han trobat dades del Pokémon");
                }
            } catch (err) {
                console.error("Error fetching Pokemon:", err);
                setError("No s'ha pogut carregar el Pokémon. Si us plau, intenta-ho de nou més tard.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchPokemonData();
    }, [id]);

    if (isLoading) return <div className="loading">Carregant...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!pokemon) return <div className="not-found">No s'ha trobat el Pokémon</div>;

    return (
        <div className='Home'>
            <div className='color'>
                <div className='PokeInfo'>
                    <h1 className='PokeNom'>{pokemon.nom}</h1>
                </div>
                <div className='foto1'>
                    <img src={pokemon.sprite} className="foto" alt={`Imatge de ${pokemon.nom}`} />
                </div>
                <div className='dades'>
                    <section className='tipus'>
                        <h2>INFORMACIÓ</h2>
                        <h3>Tipus</h3>
                        {pokemon.tipuses?.map((tipus, index) => (
                            <div key={index} className={`${tipus.nom.toLowerCase()}tipus`}>
                                {tipus.nom}
                            </div>
                        ))}
                    </section>
                    <section className='caracteristiques'>
                        <p className='heights'>
                            Alçada: <span className='height'>{pokemon.alçada} m</span>
                        </p>
                        <p className='weights'>
                            Pes: <span className='weight'>{pokemon.pes} kg</span>
                        </p>
                        <p className='categorys'>
                            Categoria: <span className='category'>{pokemon.categoria || 'Desconeguda'}</span>
                        </p>
                    </section>
                    {pokemon.efectes && (
                        <section className='efectes'>
                            <h3>Efectes</h3>
                            <p>{pokemon.efectes}</p>
                        </section>
                    )}
                    <div className='container-atac-description'>
                        <section className='atacs'>
                            <h3>Atacs</h3>
                            {pokemon.atacs?.map((atac, index) => (
                                <div key={index} className='atac'>
                                    <h4>{atac.nom}</h4>
                                    <p>PPs: {atac.PPs}</p>
                                    <p>Potència: {atac.potencia}</p>
                                </div>
                            ))}
                        </section>
                        {pokemon.descripcio && (
                            <section className='descripcio'>
                                <h3>Descripció</h3>
                                <p>{pokemon.descripcio}</p>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;