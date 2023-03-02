import logo from './logo.svg';
import './App.css';
import Card from "./components/card.jsx";
import CardBack from "./components/cardback.jsx";
import CardFront from './components/cardfront';
import Shrek from './static/Shrek.png';
function App() {
  // Insert Ajax call here
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          StreamQueens <code>src/App.js</code> and save to reload.
        </p>
    
        <Card sideCard={<CardBack movieName= "CardBack"/>}></Card>
        
        <Card sideCard={<CardFront movieImage= {Shrek} movieTitle="SHREK!!!!"/>}></Card>
        
        <img alt="movieImage" src={Shrek} />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
