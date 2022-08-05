import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

function App() {

  const [character, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl ="https://rickandmortyapi.com/api/character";

  const charactersEffect =(initialUrl)=>{
      fetch(initialUrl)
      .then(response => response.json())
      .then(data =>{
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }
  const onPrevious=() =>{
    charactersEffect(info.prev);
  }

  const onNext=() =>{
    charactersEffect(info.next);
  }

  useEffect (()=>{
    charactersEffect(initialUrl);
  }, [])

  return (
<>
<Navbar title="Rick and Morty App" />
<div className="container mt-5">
  <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
  <Characters character={character} />
  <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
  </div>
  </>
  );
}

export default App;
