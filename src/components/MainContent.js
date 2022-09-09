import React from 'react';
import picture from '../images/profil.jpg';
import Button from './Button';

export default function MainContent(){
    return(
        <>

            <div className='mainContent'>
                <h2>Sanida Anna</h2>    
                <div className='titleSecond'>Developeur Web junior</div>
                <div className='titleThird'>Website link</div>

                <Button/>

                <div className='txtSecond'>
                    <div className='txtTitle'>About</div>
                    <div className='txtParagraph'>
                        I am a developer web junior with a particular interest in making things simple and responsive. I am always looking for new things to learn.
                    </div>
                    <br/>
                    <div className='txtTitle'>Interests</div>
                    <div className='txtParagraph'>
                        Food expert. Internet fanatic. Travel geek. Sport lover. Coffee fanatic. 
                    </div>
                </div>
            </div>
            
        </>
    )
}