import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Nav from './Nav';
import Composant1 from './Composant1';
import Composant2 from './Composant2';
import Composant3 from './Composant3';
function App() {
  return (
    <div className="App">
      <Nav/>
    <Routes>
      <Route path='/' element={<Composant1/>}/>
      <Route path='/Composant2' element={<Composant2/>}/>
      <Route path='/Composant3' element={<Composant3/>}/>
    </Routes>
    </div>
  );
}

export default App;
