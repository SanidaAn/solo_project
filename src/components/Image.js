import React from 'react';
import picture from '../images/profil.jpg';


export default function Image(){
    return(
        <div className='imageDiv'>
            
            <img src={picture} className="image"/>

        </div>
    )
}