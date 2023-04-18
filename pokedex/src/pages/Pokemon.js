import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Pokemon = () => {

    const [pokemon , setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon").then((res) => {
            const filteredPokemon = res.data.filter((poke) => poke.pokedexId <= 151 && poke.pokedexId > 0 );
            setPokemon(filteredPokemon);
        });
    }, []);
    return (
        <div>
            <Navigation />
                    <div className='allCard'>
                    {pokemon.map((poke) => (
                        <Card key={poke.pokedexId} poke={poke}/>
                    ))}
                    </div>
                    
            <Footer />
        </div>
    );
};

export default Pokemon;