
import { useState, useEffect } from "react";

function Haeyoung() {
  const [data, setData] = useState([]);
 async function random(){ 

  await fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
  .then(response => response.json())
  .then(data => setData(data.en));
    
  }
  
  
   useEffect(() => {
   
    random()
   }, []);
  



  return (<div className="wrapper">
    <div>
      {data}
    <p>Here is my favoriate song I often listen to </p> 
    </div>
    <div className="youtube">

    <iframe width="450" height="250" src="https://www.youtube.com/embed/TQ8WlA2GXbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    <div className="youtube1">
    <iframe width="450" height="250" src="https://www.youtube.com/embed/k9vJKFfTu4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

    </div>
  );
}
export default Haeyoung;






