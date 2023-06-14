import React from 'react';
import { useState } from 'react';

export default function RestaurantForm({ items, setItems }) {
  const [formData, setFormData] = useState([
    {
      restaurantName: '',
      cuisine: '',
    }
]);


  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setItems([...items, formData])
    // console.log({formData})
    
  }


  return (
  <form>
          <label htmlFor="restaurantName">Name</label>
          <br />
          <input
            onChange={handleInput}
            value={formData.restaurantName}
            type="text"
            name="restaurantName"
          />
          <br />
          <br />

          <label htmlFor="cuisine">Cuisine</label>
          <br />
          <input
            onChange={handleInput}
            value={formData.name}
            type="text"
            name="cuisine"
          />
          <br />
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
  )
}