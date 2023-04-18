import React from 'react';

const Card = ({poke}) => {
    return (
        <div className='card'>
            <h3>N° {poke.pokedexId}</h3>
            <img src={poke.sprites.regular} alt={poke.name.fr} />
            <h4>{poke.name.fr}</h4>
            <p>{poke.category}</p>
            
        </div>
    );
};

export default Card;