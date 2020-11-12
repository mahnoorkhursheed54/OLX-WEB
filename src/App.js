import React from 'react';
import './Props.css'
import './App.css';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import HomePage from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App(){
  return(
    <BrowserRouter>
    <Header/>
      <Route path="/" component={HomePage}/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;