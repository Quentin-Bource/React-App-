import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AllFichePoke from '../components/AllFichePoke'


const FichePoke = () => {

    const params = useParams();
    

    const [fichePokemon, setFichePokemon] = useState([]);

    useEffect(() => {
        
        axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${params.id}`).then((res) => setFichePokemon(res.data))
    }, [params.id]);
    
    return (
        <div>
            <Navigation />
            
            <div className='AllFichePoke'>
                <AllFichePoke  pokemon={fichePokemon} />

            </div>
            

            <Footer />

        </div>
    );
};

export default FichePoke;