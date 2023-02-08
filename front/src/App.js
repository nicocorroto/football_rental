import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/NavBar';
import Card from './components/card/Card';
import Header from './components/header/Header';
import Info from './components/info/Info';
import Card2 from './components/card/Card2';
import Info2 from './components/info/Info2';
import Header2 from './components/header/Header2';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header2/>
      <Info2/>
      <Card2/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
