import React from 'react';
import Footer from './Footer';
import Image from './Image';
import MainContent from './MainContent';


export default function Card(){
    return(
        <div className='card'>
            <Image />
            <MainContent />
            <Footer />
        </div>
    )
}