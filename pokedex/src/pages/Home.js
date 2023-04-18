import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import RandomPoke from '../components/RandomPoke';
import axios from 'axios';


const Home = () => {

    const [randomPokemon, setRandomPokemon] = useState([]);

    useEffect(() => {
        const randomPokemonId = Math.floor(Math.random() * 1000) + 1;
        axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${randomPokemonId}`).then((res) => setRandomPokemon(res.data))
    }, []);

    return (
        <div>
            <Navigation />
            <p className='accueil'>Bonjour et bienvenue sur Réact-Dex, un site qui sert de pokedex pokemon. Grâce à notre site,
                vous pouvez retrouver toutes les informations sur les 9 premières générations de pokemons, y compris leurs stats.
                Nous avons également inclus une table des types pour vous aider à mieux comprendre les forces et les faiblesses de chaque pokemon.
                <br />
                Nous sommes très fiers du résultat et espérons que vous trouverez notre site utile dans votre parcours pour devenir un maître Pokémon.
                <br />
                Le nom Réact-Dex vient du fait que nous avons utilisé la technologie React pour créer ce site.
                <br />
                Merci beaucoup pour votre visite et à bientôt !</p>

            <div>
                <RandomPoke pokemon={randomPokemon} />
            </div>

            <Footer />
        </div>
    );
};

export default Home;