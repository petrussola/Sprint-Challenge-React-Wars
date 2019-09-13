import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Data from './components/Data';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  const api = 'https://swapi.co/api/people';

  useEffect( () => {
    axios.get(api)
      .then( res => {
        setCharacters(res.data.results)
        debugger
      })
      .catch( error => {
        console.log('you are getting an error')
      })
    }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Data data={characters}/>
    </div>
  );
}

export default App;
