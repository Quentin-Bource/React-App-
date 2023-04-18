import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to="/">
                <h1>Réact-Dex</h1>
            </NavLink>

            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/pokemon" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Pokémon</li>
                </NavLink>
                <NavLink to="/table" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Table des Types</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>À propos</li>
                </NavLink>
            </ul>

        </div>
    );
};

export default Navigation;