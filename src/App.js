import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/PokemonCard";


function App() {
    const [pokemon, setPokemon] = useState({});

    // async function getPokemonList() {
    //     try {
    //         const {data: {count, next, previous, results}} = await axios.get("https://pokeapi.co/api/v2/pokemon")
    //         console.log(results[4].url);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    async function getPokemon() {
        try{
            const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            setPokemon(data);
            console.log(data);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        // getPokemonList()
        if(pokemon) {
            getPokemon();
        }
    }, [])

    return (
        <div>
            <PokemonCard pokemon={pokemon} />
        </div>
    );
}

export default App;
