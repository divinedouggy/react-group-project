import about1 from './aboutsabrina1.jpg';
import about2 from './aboutsabrina2.jpg';
import about3 from './aboutsabrina3.jpg';
import './AboutSabrina.css';

function Sabrina() {
    return (
        <div>
            <h1>About Sabrina</h1>
            <h2>I like listening to music and watching YouTube.</h2>
            <h2>I also like traveling and visiting new places.</h2>
            <h2>I am a student of Per Scholas. I am learning the following...</h2>
            <h3>JavaScript</h3>
            <h3>ReactJS</h3>
            <h3>Visual Studio Code</h3>
            <div class="row">
                <div class="column">
                    <img src={about1} alt="About1" className="photo" />
                </div>
                <div class="column">
                    <img src={about2} alt="About2" className="photo" />
                </div>
                <div class="column">
                    <img src={about3} alt="About3" className="photo" />
                </div>
            </div>
        </div>
    );
}

export default Sabrina;