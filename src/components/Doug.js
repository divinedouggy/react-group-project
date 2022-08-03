import '../App.css'
import { useEffect } from 'react';

function Doug() {
    useEffect(()  => {
        document.body.classList.add('doug-bg');
    
        return () => {
            document.body.classList.remove('doug-bg');
        };
    });
    return(
        <div className='doug'>
            <h1>Hello</h1>
            <h2>My Name is Doug</h2>
            <h3>I like to code, turns out.</h3>
            <br></br>
            <h4>Other things I like:</h4>
            <li>Video Game Music</li>
            <li><i>Making</i> Music</li>
            <li>Herbalism</li>
            <li>My fly girlfriend</li>
            <li>Animals vvv</li> <img src={require("../images/jazz.jpg")} alt="doggo"/>
            <p>(this is a textbook example of an animal)</p>

   
        </div>
    )
}

export default Doug;