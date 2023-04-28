import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState("1")
    const radios = ["1" , "2", "3", "4", "5", "6", "7", "8", "9"];
    

    useEffect(() => {
        axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon").then((res) => {
            setPokemon(res.data);
        });
    }, []);

    return (
        <div>
            <Navigation />

                {radios.map((gen)  => (
                    <li key={gen} className='filtre'>
                        <input type="radio" id={gen} name='genfiltre' onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={gen}>Génération {gen}</label>

                    </li>
                ))}
            
                <div className='allCard'>
                    {pokemon
                    .filter((poke) => poke.generation === parseInt(selectedRadio))
                    .map((poke) => (
                        <NavLink key={poke.pokedexId} to={`/fiche/${poke.pokedexId}`}>
                        <Card key={poke.pokedexId} poke={poke} />
                        </NavLink>
                        
                    ))}
                </div>
            
            <Footer />
        </div>
    );
};

export default Pokemon;