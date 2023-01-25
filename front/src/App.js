import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Info from './components/info/Info';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Info/>
      <Card />
    </div>
  );
}

export default App;
