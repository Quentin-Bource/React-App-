import React from 'react';

const AllFichePoke = ({ pokemon }) => {
    
    return (
        <div className='fichePokemon'>

            <div className='basePokemon'>
            {pokemon && pokemon.sprites && pokemon.sprites.regular &&
                <img className='sprite' src={pokemon.sprites.regular} alt={pokemon.name.fr} />

            }
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
            

            


             <div className='pokeInfo'>


    {pokemon && pokemon.pokedexId && <p>N°{pokemon.pokedexId}</p>}

    {pokemon && pokemon.name && pokemon.name.fr && <p>Nom : {pokemon.name.fr}</p>}

    <p className='types'>Type(s) : {pokemon && pokemon.types && pokemon.types[0] && pokemon.types[0].image && <img className='type0' src={pokemon.types[0].image} alt={pokemon.types[0].name} title={pokemon.types[0].name} />}
    {pokemon && pokemon.types && pokemon.types[1] && pokemon.types[1].image && <img className='type1' src={pokemon.types[1].image} alt={pokemon.types[1].name} title={pokemon.types[1].name} />}</p>

    <p> Catégorie :  {pokemon && pokemon.category }</p>

    <div className='infoTalent'>
    
    Talent(s): 
    
   
        
    <ul> {pokemon && pokemon.talents && pokemon.talents[0] && pokemon.talents[0].name && 
    <li> {pokemon.talents[0].name} </li>}
    {pokemon && pokemon.talents && pokemon.talents[1] && pokemon.talents[1].name && 
    <li>  {pokemon.talents[1].name} </li>}
    {pokemon && pokemon.talents && pokemon.talents[2] && pokemon.talents[2].name && 
    <li> {pokemon.talents[2].name} </li>}
         
    </ul>
    </div> 

    <p>Poids : {pokemon && pokemon.weight}</p>
    <p>Taille : {pokemon && pokemon.height}</p>

    <ul className='resiste'>Resistances : 
    {pokemon && pokemon.resistances && pokemon.resistances.map((resistance) => {
    if (resistance.multiplier <= 0.5) {
      let className = "";
      switch (resistance.name) {
        case "Acier":
          className = "bg-steel";
          break;
        case "Combat":
          className = "bg-fighting";
          break;
        case "Dragon":
          className = "bg-dragon";
          break;
        case "Eau":
          className = "bg-water";
          break;
        case "Électrik":
          className = "bg-electric";
          break;
        case "Fée":
          className = "bg-fairy";
          break;
        case "Feu":
          className = "bg-fire";
          break;
        case "Glace":
          className = "bg-ice";
          break;
        case "Insecte":
          className = "bg-bug";
          break;
        case "Normal":
          className = "bg-normal";
          break;
        case "Plante":
          className = "bg-grass";
          break;
        case "Poison":
          className = "bg-poison";
          break;
        case "Psy":
          className = "bg-psychic";
          break;
        case "Roche":
          className = "bg-rock";
          break;
        case "Sol":
          className = "bg-ground";
          break;
        case "Spectre":
          className = "bg-ghost";
          break;
        case "Ténèbres":
          className = "bg-dark";
          break;
        case "Vol":
          className = "bg-flying";
          break;
        default:
          className = "bg-gray";
          break;
      }
      return (
        <li key={resistance.name} className={className}>
          {resistance.name}
        </li>
      );
    }
    return null;
  })}
</ul>
<ul className='resiste'>
  Faiblesses :
  {pokemon && pokemon.resistances && pokemon.resistances.map((resistance) => {
    if (resistance.multiplier >= 2) {
      let className = "";
      switch (resistance.name) {
        case "Acier":
          className = "bg-steel";
          break;
        case "Combat":
          className = "bg-fighting";
          break;
        case "Dragon":
          className = "bg-dragon";
          break;
        case "Eau":
          className = "bg-water";
          break;
        case "Électrik":
          className = "bg-electric";
          break;
        case "Fée":
          className = "bg-fairy";
          break;
        case "Feu":
          className = "bg-fire";
          break;
        case "Glace":
          className = "bg-ice";
          break;
        case "Insecte":
          className = "bg-bug";
          break;
        case "Normal":
          className = "bg-normal";
          break;
        case "Plante":
          className = "bg-grass";
          break;
        case "Poison":
          className = "bg-poison";
          break;
        case "Psy":
          className = "bg-psychic";
          break;
        case "Roche":
          className = "bg-rock";
          break;
        case "Sol":
          className = "bg-ground";
          break;
        case "Spectre":
          className = "bg-ghost";
          break;
        case "Ténèbres":
          className = "bg-dark";
          break;
        case "Vol":
          className = "bg-flying";
          break;
        default:
          className = "bg-gray";
          break;
      }
      return (
        <li key={resistance.name} className={className}>
          {resistance.name}
        </li>
      );
    }
    return null;
  })}
</ul>
   
    </div>



            
 </div>
    );
};

export default AllFichePoke;