import React, { useEffect, useState } from 'react';
import axios from "axios";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { NavLink } from 'react-router-dom';

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);
    const [selectedRadio, setSelectedRadio] = useState("")
    const radios = [1 , 2];
    

    useEffect(() => {
        axios.get("https://api-pokemon-fr.vercel.app/api/v1/pokemon").then((res) => {
            const filteredPokemon = res.data.filter((poke) => poke.pokedexId <= 165 && poke.pokedexId > 0);
            setPokemon(filteredPokemon);
        });
    }, []);
    return (
        <div>
            <Navigation />

                {radios.map((gen) => (
                    <li>
                        <input type="radio" id={gen} name='genfiltre' onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={gen}>Génération {gen}</label>

                    </li>
                ))}
            
                <div className='allCard'>
                    {pokemon
                    // .filter((poke) => poke.generation[0].includes(selectedRadio))
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