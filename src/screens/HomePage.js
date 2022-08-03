import { useEffect } from "react";


function HomePage() {
    useEffect(()  => {
        document.body.classList.add('home-bg');
    
        return () => {
            document.body.classList.remove('home-bg');
        };
    });
    return(
        <div className="homepage">
            <br/>
            <br/>
          
         <p><b>Hello!</b> Welcome to our website.</p>
         <br></br>
         <p>This is a website by our group, <i>about</i> our group.</p>
         <p>Our group of Per Scholas champions.</p>
        </div>
    )
}

export default HomePage;