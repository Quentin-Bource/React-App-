import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
    return (
        <div>
            <Navigation />
            <div className='about'>
            <p>Mon site Pokedex React est un projet que j'ai travaillé pendant un certain temps, étant donné que c'était mon premier projet utilisant React. L'objectif de ce site est de permettre aux utilisateurs de voir les différentes caractéristiques de chaque Pokémon en utilisant l'API de ce site: <a href="https://api-pokemon-fr.vercel.app/">https://api-pokemon-fr.vercel.app/</a>.</p>
            <p>Le site comporte plusieurs fonctionnalités, telles que la table des types, le Pokedex de chaque région et une fiche détaillée pour chaque Pokémon. J'ai essayé de m'assurer que toutes les informations étaient présentées de manière claire et organisée afin que les utilisateurs puissent trouver ce qu'ils cherchent rapidement et facilement.</p>
            <p>En cours de route, j'ai rencontré quelques difficultés avec les filtres et le design général du site, qui n'est pas mon point fort. Cependant, j'ai appris beaucoup de choses en travaillant sur ce projet et j'ai pu améliorer mes compétences en développement web.</p>
            <p>Mon objectif principal en créant ce site était de me familiariser avec une nouvelle technologie tout en travaillant sur quelque chose qui m'intéressait vraiment. L'univers Pokémon a été une grande partie de ma vie depuis mon enfance, et je voulais créer quelque chose qui rende hommage à cela.</p>
            <p>Merci de votre visite sur mon site, j'espère que vous avez apprécié votre expérience.</p>
            </div> 
             <Footer />

        </div>
    );
};

export default About;