import React, {useEffect, useState} from "react";
import axios from "axios";

export default function PokemonCard({name}) {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        async function getPokemon(name) {
            try {
                const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                setPokemon(data);
                console.log(data)
            } catch (e) {
                console.log(e)
            }
        }

        getPokemon(name);

    }, [name]) // <--- Mount Cycle

    return (
        <>
            {
                pokemon.name &&
                <div className="pokemon-data">
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    <p><strong>Moves:</strong> <em>{pokemon.moves.length}</em></p>
                    <p><strong>Weight:</strong> <em>{pokemon.weight}</em></p>
                    <section>
                        <p><strong>Aembilities:</strong></p>
                        <ul>
                            {pokemon.abilities.map(e =>
                                <em><li key={e.ability.name + e.ability.url}>{e.ability.name}</li></em>)}
                        </ul>
                    </section>
                    <section>
                        <p><strong>Type(s):</strong></p>
                        <ul>
                            {pokemon.types.map(e =>
                                <em><li key={e.type.name + e.type.url}>{e.type.name}</li></em>)}
                        </ul>
                    </section>

                </div>
            }
        </>
    );
}