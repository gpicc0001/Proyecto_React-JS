import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


export default function App() {

  const nombreEcommerce = "E-Commerce" 
  const saludo = "Bienvenidos"
  return (
    <>
      <div className='appContainer'>
        <BrowserRouter>
            <NavBar />
            <h1 className='title'> {nombreEcommerce} </h1>
            <Routes>
              <Route exact path= '/' element ={<ItemListContainer mensaje={saludo} />} />
              <Route exact path= '/category/:categoryId' element ={<ItemListContainer />} />
              <Route exact path= '/item/:itemId' element ={<ItemDetailContainer />} />
              <Route exact path= '*' element = {<h1>PAGINA NO ENCONTRADA</h1>} />       
            </Routes>        
        </BrowserRouter>
      </div>

    </>
  );
}


//colocar en el parrafo de la card el array.map para que aparezca en cada card lo q se bsuca.