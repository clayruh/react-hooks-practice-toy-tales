import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  // STATE
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addNewToy(newToy) {
    setToys( [...toys, newToy] )
  }

  useEffect( () => {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => setToys(toys)) // why do we need to set state to manage data coming in?
  }, [])

  return (
    <>
      <Header />
      {showForm ? <ToyForm addNewToy={addNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer addNewToy={addNewToy} toys={toys}/>
    </>
  );
}

export default App;
