import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import crypto from 'crypto-js';
import './Styles.css'

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const publicKey = '96d6f8d103014e36d02dd2841c4bb73f';
    const privateKey = '50e9db6016cbe8cb09dbaa2d5eff19372528178e';
    const timestamp = Date.now().toString();
    const hash = crypto.MD5(timestamp + privateKey + publicKey);
    const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;

    axios.get(url)
      .then(response => {
        setCharacters(response.data.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    
    <div id='global'>
        <img src='https://i.postimg.cc/4xrpzV68/14358.jpg' id='imagenPrincipal'/>
    <div className="characters-container">

    
        
      {characters.map((character) => (
        <div key={character.id} className="character">
          <div>
            <img id="image"
              src={`${character.thumbnail.path}/portrait_fantastic.${character.thumbnail.extension}`}
              alt={character.name}
              style={{ 
                boxShadow: '0 0 5px 0 #dc143c, 0 0 10px 0 #dc143c, 0 0 15px 0 #dc143c',
                transition: 'box-shadow 0.3s ease-in-out' // agregar transición para suavizar el efecto
              }} 
              onMouseEnter={ e => e.target.style.boxShadow = '0 0 10px 0 #dc143c, 0 0 20px 0 #dc143c, 0 0 30px 0 #dc143c' } 
              onMouseLeave={ e => e.target.style.boxShadow = '0 0 5px 0 #dc143c, 0 0 10px 0 #dc143c, 0 0 15px 0 #dc143c' }
            />
          </div>
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Characters;
