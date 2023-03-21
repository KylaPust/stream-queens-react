import './App.css';
import React from 'react';
import Card from "./components/card.jsx";
import Search from "./components/search.jsx";
import Shrek from './static/Shrek.png';
import Barbie from './static/barbie.png';
import ApiComponent from './components/api.jsx'

function App() {
  // Insert Ajax call here
  
  return (
    <div className="App">
      <header className="App-header">
        <ApiComponent></ApiComponent>
        <Search></Search>
    
        <Card isFront={false} movieTitle='Shrek' 
        movieDesc='Shrek is a movie about an ogre who lives in a swap and he wants you to stay out of it!'
        movieLink='https://www.dreamworks.com/movies/shrek'
        movieImage={Shrek}></Card>
        
        <Card isFront={false} movieTitle='Barbie' 
        movieDesc='Everyone is so excited for the upcoming barbie movie! Greta Gerwig is Qween'
        movieLink='https://www.imdb.com/title/tt1517268/'
        movieImage={Barbie}></Card>
        
      </header>
    </div>
  );
}

export default App;
