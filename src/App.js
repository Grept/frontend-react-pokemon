import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {

    async function getPokemonList() {
        try {
            const {data: {count, next, previous, results}} = await axios("https://pokeapi.co/api/v2/pokemon")
            console.log(results[4].url);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPokemonList()
    }, [])

    return (
        <div>
            Begin hier met de opdracht!
        </div>
    );
}

export default App;
