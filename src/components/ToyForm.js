import React, {useState} from "react";

function ToyForm({addNewToy}) {

  const [toyName, setToyName] = useState('')
  const [toyImage, setToyImage] = useState('')

  const handleToyName = (event) => setToyName(event.target.value)
  const handleToyImage = (event) => setToyImage(event.target.value)

  const handleNewToySubmit = (event) => {
    event.preventDefault()
    console.log('form clicked')

    const OPTIONS = {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name: toyName,
        image: toyImage, 
        likes: 0
      })
    }

    fetch('http://localhost:3000/toys', OPTIONS)
    .then(res => res.json())
    .then(newToy => addNewToy(newToy))


    // resetForm()
  }

  return (
    <div className="container">
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={toyName} // event listener steps: write the value + onChange for form
          onChange={handleToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={toyImage}
          onChange={handleToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onClick={handleNewToySubmit}
        />
      </form>
    </div>
  );
}

export default ToyForm;
