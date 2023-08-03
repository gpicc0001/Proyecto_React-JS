import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


export default function App() {
  return (
    <>

      <div className='appContainer'>
        <NavBar />
        <h1 className='title'>E-Commerce</h1>
        <ItemListContainer />

      </div>

    </>
  );
}


