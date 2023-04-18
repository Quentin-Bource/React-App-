import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';

const Pokemon = () => {

    const [pokemon , setPokemon] = useState([]);

    useEffect(()=> {
        axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon").then((res) => setPokemon(res.data))
    }, [])

    return (
        <div>
            <Navigation />
                    {pokemon.map((poke) => (
                        <Card />
                    ))}
            <Footer />
        </div>
    );
};

export default Pokemon;