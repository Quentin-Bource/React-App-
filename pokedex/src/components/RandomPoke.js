import React from 'react';

const RandomPoke = ({ pokemon }) => {

    return (
        <div className='randomPoke'>

            {pokemon && pokemon.sprites && pokemon.sprites.regular &&
                <img className='sprite' src={pokemon.sprites.regular} alt={pokemon.name.fr} />

            }
            <div className='infoPoke'>


                {pokemon && pokemon.pokedexId && <p>N°{pokemon.pokedexId}</p>}
                {pokemon && pokemon.name && pokemon.name.fr && <p>Nom : {pokemon.name.fr}</p>}
                <p className='types'>Type(s) : {pokemon && pokemon.types && pokemon.types[0] && pokemon.types[0].image && <img className='type0' src={pokemon.types[0].image} alt={pokemon.types[0].name} title={pokemon.types[0].name} />}
                    {pokemon && pokemon.types && pokemon.types[1] && pokemon.types[1].image && <img className='type1' src={pokemon.types[1].image} alt={pokemon.types[1].name} title={pokemon.types[1].name} />}</p>

                {pokemon && pokemon.stats &&
                    <ul>
                        <li>
                            HP :
                            <div className={`stat-bar  ${pokemon.stats.hp >= 180 ? 'max' : pokemon.stats.hp >= 140 ? 'very-high' : pokemon.stats.hp >= 100 ? 'high' : pokemon.stats.hp >= 80 ? 'medium' : pokemon.stats.hp >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.hp}%` }}></div>
                            </div>
                            {pokemon.stats.hp}

                        </li>
                        <li>
                            Attaque :
                            <div className={`stat-bar ${pokemon.stats.atk >= 180 ? 'max' : pokemon.stats.atk >= 140 ? 'very-high' : pokemon.stats.atk >= 100 ? 'high' : pokemon.stats.atk >= 80 ? 'medium' : pokemon.stats.atk >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.atk}%` }}></div>

                            </div>
                            {pokemon.stats.atk}
                        </li>
                        <li>
                            Défense :
                            <div className={`stat-bar ${pokemon.stats.def >= 180 ? 'max' : pokemon.stats.def >= 140 ? 'very-high' : pokemon.stats.def >= 100 ? 'high' : pokemon.stats.def >= 80 ? 'medium' : pokemon.stats.def >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.def}%` }}></div>

                            </div>
                            {pokemon.stats.def}
                        </li>
                        <li>
                            Attaque Spé. :
                            <div className={`stat-bar ${pokemon.stats.spe_atk >= 180 ? 'max' : pokemon.stats.spe_atk >= 140 ? 'very-high' : pokemon.stats.spe_atk >= 100 ? 'high' : pokemon.stats.spe_atk >= 80 ? 'medium' : pokemon.stats.spe_atk >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.spe_atk}%` }}></div>

                            </div>
                            {pokemon.stats.spe_atk}
                        </li>

                        <li>
                            Défense Spé. :
                            <div className={`stat-bar ${pokemon.stats.spe_def >= 180 ? 'max' : pokemon.stats.spe_def >= 140 ? 'very-high' : pokemon.stats.spe_def >= 100 ? 'high' : pokemon.stats.spe_def >= 80 ? 'medium' : pokemon.stats.spe_def >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.spe_def}%` }}></div>
                            </div>
                            {pokemon.stats.spe_def}
                        </li>
                        <li>
                            Vitesse :
                            <div className={`stat-bar ${pokemon.stats.vit >= 180 ? 'max' : pokemon.stats.vit >= 140 ? 'very-high' : pokemon.stats.vit >= 100 ? 'high' : pokemon.stats.vit >= 80 ? 'medium' : pokemon.stats.vit >= 50 ? 'low' : 'very-low'}`}>
                                <div className="value" style={{ width: `${pokemon.stats.vit}%` }}></div>
                            </div>
                            {pokemon.stats.vit}
                        </li>
                    </ul>
                }

            </div>









        </div>
    );
};

export default RandomPoke;