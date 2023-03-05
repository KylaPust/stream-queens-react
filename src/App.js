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
        
    
        <Card isFront={true} movieTitle='ShrekPassedIn' 
        movieDesc='Shrek is a movie about an ogre who lives in a swap and he wants you to stay out of it!'
        movieLink='www.shrekmovie.dotcom'></Card>
        
        <Card isFront={false} movieTitle='BarbiePassedIn' movieLink='www.google.com'></Card>
        
      </header>
    </div>
  );
}

export default App;
