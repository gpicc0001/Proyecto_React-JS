import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



export default function App() {

  const nombreEcommerce = "E-Commerce" 
  const message = "Hola Mundo"
  return (
    <>

      <div className='appContainer'>
        <NavBar />
        <h1 className='title'> {nombreEcommerce} </h1>
        <ItemListContainer mensaje={message} />
      </div>

    </>
  );
}


