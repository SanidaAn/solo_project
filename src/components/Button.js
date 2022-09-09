import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';




export default function Button(){
    return(
        <div className='buttonDiv'>
            <button className='button'>
                <FontAwesomeIcon icon={faEnvelope} size={'xl'}/>
                 &nbsp; &nbsp;
                <a className='linkTxt'>Email</a>
            </button>
        </div>
    )
}