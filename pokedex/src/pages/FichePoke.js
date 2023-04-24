import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const FichePoke = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div>
            <Navigation />

            <Footer />

        </div>
    );
};

export default FichePoke;