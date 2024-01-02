
import './App.css';

import Button from 'react-bootstrap/Button';

import React, {useEffect, useState} from 'react';

const App = () => {
  const[dog, setDog] = useState(null);
  const[currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getDogRequest();
}, []);

  const getDogRequest = async () => {
    try{
      const apiKey = "live_rbBzPEVCwxUrcL9rrV20rzrBFXdH1rZXbLCGhwM9uRuf8xQhZG9n9TJsEw5hWDAT";
      const response = await fetch(`https://api.thedogapi.com/v1/breeds`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
      })
     
   const data = await response.json();
   const randomBreed = data[Math.floor(Math.random() * data.length)];
   setDog(randomBreed)

    }catch(error){
      console.log('Error Fetching Data', error)
    }
  }  
  
  
  const HandleNext = () => {
      getDogRequest();
  };


  return (
    <>
    <div className="App">
      {dog ? (
        <div>
          <h2>{dog.name}</h2>
          <img src={dog.image.url} alt={dog.name} style={{maxWidth:'300px'}} />
          <p>{dog.description}</p>
        </div>
      ):(
        <p>Loading...</p>
      )}
      <Button onClick={HandleNext}>Next</Button>
    </div>

    </>
  );
  
}

export default App;
