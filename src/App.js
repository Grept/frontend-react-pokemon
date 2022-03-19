import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";
import axios from "axios";


function App() {
    const [pokemonListData, setPokemonListData] = useState({})

    async function getPokemonList(apiUrl) {
        try {
            const {data} = await axios.get(apiUrl)
            setPokemonListData(data);
            // console.log(data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPokemonList("https://pokeapi.co/api/v2/pokemon");
    }, [])


    return (
        <main>
            <h1>POKEDEX</h1>
            <nav>
                <button type="button" onClick={() => getPokemonList(pokemonListData.previous)}>Vorige</button>
                <button type="button" onClick={() => getPokemonList(pokemonListData.next)}>Volgende</button>
            </nav>
            <section className="pokemon-list">
                {pokemonListData.results &&
                <>
                    {pokemonListData.results.map((e) => {
                        return <PokemonCard name={e.name} key={e.name + e.url}/>
                    })}
                </>

                }
            </section>

        </main>
    );
}

export default App;
