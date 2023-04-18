import React from 'react';
import Navigation from '../components/Navigation';
import imgTable from '../assets/img/tableau.png';
import Footer from '../components/Footer';

const Table = () => {
    return (
        <div>
            <Navigation />
            <img className='tb_types' src={imgTable} alt="tableau des types"/>   

            <Footer />     
        </div>
    );
};

export default Table;