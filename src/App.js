import React, {useEffect, useState} from 'react';
import './App.css';
import PokemonCard from "./components/PokemonCard";
import axios from "axios";


function App() {
    const [pokemonList, setPokemonList] = useState([])
    const [nextPageUrl, setNextPageUrl] = useState([])
    const [prevPageUrl, setPrevPageUrl] = useState([])

    async function getPokemonList(apiUrl) {
        try {
            const {data: {next, previous, results}} = await axios.get(apiUrl)
            setPokemonList(results);
            setNextPageUrl(next);
            setPrevPageUrl(previous);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPokemonList("https://pokeapi.co/api/v2/pokemon");
    }, [])


    return (
        <div>
            <h1>POKEMON</h1>
            <section>
                <button type="button" onClick={() => getPokemonList(prevPageUrl)}>Vorige</button>
                <button type="button" onClick={() => getPokemonList(nextPageUrl)}>Volgende</button>
            </section>
            <section>
                {pokemonList.length > 0 &&
                <ul>
                    {pokemonList.map((e) => {
                        return <li key={e.name + e.url}><PokemonCard name={e.name}/></li>
                    })}
                </ul>
                }
            </section>

        </div>
    );
}

export default App;
