import React from "react";

export default function PokemonCard({pokemon}) {
    const generateUniqueKey = (data) => {
        const key = `${data.ability.name}_${data.ability.url}`;
        console.log(key);
        return key;
    }

    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.back_default} alt={pokemon.name}/>
            <p>Moves: {pokemon.moves.length}</p>
            <p>Weight: {pokemon.weight}</p>
            <section>
                <p>Abilities:</p>
                <ul>
                        {pokemon.abilities.map(e => <li key={generateUniqueKey(e)}>{e.ability.name}</li>)}
                </ul>
            </section>

        </div>
    );
}