import React from 'react';

const RandomPoke = ({ pokemon }) => {

    return (
        <div>

            {pokemon && pokemon.sprites && pokemon.sprites.regular &&
                <img src={pokemon.sprites.regular} alt="" />
            }



        </div>
    );
};

export default RandomPoke;