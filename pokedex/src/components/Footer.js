import React from 'react';
import { Link } from 'react-router-dom';
import Linkedin from '../assets/img/linkedinlogo.png'
import Pokeball from '../assets/img/pokelogo.png'
import Github from '../assets/img/github-logo.png'


const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <h3>Réact-Dex</h3>

            <ul>
                <Link to={"https://github.com/Quentin-Bource"}>
                
                <li>
                <img src={Github} alt="githublogo" />
                    Mon Github
                </li>
                </Link>
               
                <Link to={"https://www.linkedin.com/in/quentin-bource/"}>
                <li>
                <img src={Linkedin} alt="linkedinlogo" />

                    Linkedin
                </li>
                </Link>
                <Link to={"https://github.com/Quentin-Bource/React-App-"}>
                <li>
                <img src={Pokeball} alt="pokélogo" />

                    Projet Github

                </li>
                </Link>
               
            </ul>
            
        </div>
    );
};

export default Footer;