import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareTwitter, faLinkedin, faGithubSquare  } from '@fortawesome/free-brands-svg-icons';



export default function Footer(){
    
    return(
    
        <div className='footer'>
            <p>
                <span>
                    <a href="https://www.linkedin.com/feed/" className='link'>
                        <FontAwesomeIcon icon={faLinkedin} size={'2xl'}/>
                    </a>
                </span>
                <span>
                    <a href="https://github.com/" className='link'>
                        <FontAwesomeIcon icon={faGithubSquare} size={'2xl'}/>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/home" className='link'>
                        <FontAwesomeIcon icon={faSquareTwitter} size={'2xl'}/>
                    </a>
                </span>
            </p>
        </div>
    )
}