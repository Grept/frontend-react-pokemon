import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PokemonCard({name}) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        async function getPokemon(name) {
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                setPokemon(data);
            } catch (e) {
                console.log(e)
            }
        }

        getPokemon(name);

    }, [])

    return (
        <>
            {
                pokemon.name &&
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
                    <p>Moves: {pokemon.moves.length}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <section>
                        <p>Abilities:</p>
                        <ul>
                            {pokemon.abilities.map(e =>
                                <li key={e.ability.name + e.ability.url}>{e.ability.name}</li>)}
                        </ul>
                    </section>
                    <section>
                        <p>Type(s):</p>
                        <ul>
                            {pokemon.types.map(e =>
                                <li key={e.type.name + e.type.url}>{e.type.name}</li>)}
                        </ul>
                    </section>

                </div>
            }
        </>
    );
}