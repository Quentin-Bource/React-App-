import React from 'react';
import { NavLink } from 'react-router-dom';

const Switch = ({ pokemon }) => {
    return (
        <div className='switch'>

            <NavLink  to={`/fiche/${pokemon.pokedexId -1}`} > 

                <button className='left'>Précedent</button>
            </NavLink>

            <NavLink  to={`/fiche/${pokemon.pokedexId +1}`} > 

                <button className='right'>Suivant</button>
            </NavLink>
            
        </div>
    );
};

export default Switch;