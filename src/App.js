import React from 'react';
import './style.css';
import { useState } from 'react';
import RestaurantForm from './RestaurantForm'


export default function App() {
  const [items, setItems] = useState([])
 
  return (
    <>
      <RestaurantForm items= {items} setItems={setItems}/>
    {
      items.length ? items.map((item, index) => <h1 key={index} >{item?.restaurantName}</h1>) :
      <h1>No items.</h1>
    }
    </>
  );
}
