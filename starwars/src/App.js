import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Data from './components/Card';
import Nextpage from './components/Nextpage';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  const [currentPage, setPage] = useState(1);

  
  function turnPage() {
    console.log('clicked');
    setPage(currentPage + 1);
  }
  const api = `https://swapi.co/api/people/?page=${currentPage}`;

  useEffect( () => {
    axios.get(api)
      .then( res => {
        setCharacters(res.data.results)
      })
      .catch( error => {
        console.log(error)
      })
    }, [currentPage]);

  const StyledApp = styled.div`
    h1 {
      padding: 2rem 0;
      margin: 0;
    }
  `;

  return (
    <StyledApp className="App">
      <h1 className="Header">React Wars</h1>
      <Nextpage turnPage={turnPage} />
      <Data data={characters}/>
    </StyledApp>
  );
}

export default App;
