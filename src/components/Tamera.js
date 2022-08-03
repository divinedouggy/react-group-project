import React, { useEffect } from 'react';


function Tamera () {
    useEffect(()  => {
        document.body.classList.add('tam-bg');
    
        return () => {
            document.body.classList.remove('tam-bg');
        };
    });
    return (
        <div className='tamera'>
            <h1>Hi, I'm Tamera! 😊</h1>
            <p className="tam-intro">Below, you'll find a few fun facts about me.</p>
            <ol>
                <li className ="aboutme-list"> I enjoy doing freelance photography in my spare time.

                </li>

                <li className ="aboutme-list"> I'd only taken one coding class before being accepted
                    into Per Scholas.
                </li>
                
                <li className ="aboutme-list"> My favorite color is brown, it's super underrated.
                </li>
                
                <li className ="aboutme-list"> My favorite TV show is the Twilight Zone.

                </li>
                
                <li className ="aboutme-list"> I love Pixar movies, my favorite one is Ratatouille.</li>

                <li className ="aboutme-list" >I'm a Pescetarian!</li>
            </ol>
        </div>
    )
}

export default Tamera;