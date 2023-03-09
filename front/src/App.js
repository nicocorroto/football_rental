import logo from './logo.svg';
import './App.css';
import {Router, Route, Routes} from 'react-router-dom'
import Home from './App/home/Home';
import Index from './App/Profile/Index';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/profile' element={ <Index /> } />
    </Routes>
  );
}

export default App;
