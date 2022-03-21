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

    }, []) // <--- mount Cycle

    return (
        <>
            {
                pokemon.name &&
                <div className="pokemon-data">
                    <h1>{pokemon.name}</h1>

                    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>

                    <h4><strong>Moves:</strong> <em>{pokemon.moves.length}</em></h4>

                    <h4><strong>Weight:</strong> <em>{pokemon.weight}</em></h4>

                    <section>
                        <h4><strong>Abilities:</strong></h4>
                        <ul>
                            {pokemon.abilities.map(e =>
                                <em>
                                    <li key={e.ability.name + e.ability.url}>{e.ability.name}</li>
                                </em>)}
                        </ul>
                    </section>

                    <section>
                        <h4><strong>Type(s):</strong></h4>
                        <ul>
                            {pokemon.types.map(e =>
                                <em>
                                    <li key={e.type.name + e.type.url}>{e.type.name}</li>
                                </em>)}
                        </ul>
                    </section>

                </div>
            }
        </>
    );
}