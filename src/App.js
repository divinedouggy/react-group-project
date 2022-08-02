
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Ajdin from './components/Ajdin'
import HomePage from './screens/HomePage'
import Doug from './components/Doug';
import Haeyoung from './components/Haeyoung';
import Sabrina from './components/Sabrina';
import Tamera from './components/Tamera';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ajdin" element={<Ajdin/>}/>
        <Route path="/doug" element={<Doug/>}/>
        <Route path="/haeyoung" element={<Haeyoung/>}/>
        <Route path="/sabrina" element={<Sabrina/>}/>
        <Route path="/tamera" element={<Tamera/>}/>


      </Routes>

     

    </div>
  );
}

export default App;
