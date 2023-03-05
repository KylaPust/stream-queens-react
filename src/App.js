import './App.css';
import React from 'react';
import Card from "./components/card.jsx";
import Shrek from './static/Shrek.png';
import Barbie from './static/barbie.png';

function App() {
  // Insert Ajax call here
  return (
    <div className="App">
      <header className="App-header">
        
    
        <Card isFront={false} movieTitle='ShrekPassedIn' 
        movieDesc='Shrek is a movie about an ogre who lives in a swap and he wants you to stay out of it!'
        movieLink='www.shrekmovie.dotcom'
        movieImage={Shrek}></Card>
        
        <Card isFront={false} movieTitle='BarbiePassedIn' 
        movieDesc='Everyone is so excited for the upcoming barbie movie! Greta Gerwig is Qween'
        movieLink='www.google.com'
        movieImage={Barbie}></Card>
        
      </header>
    </div>
  );
}

export default App;
