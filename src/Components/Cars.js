import React from 'react';
import './Props.css'
import './App.css';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function Cars(){
    return(
      <BrowserRouter>
      <Header/>
        {/* <Route path="/cars" component={Cars}/> */}
        <Link to={"/browser/" + item.label} className="names color noul bl">{item.label}</Link>
      <Footer/>
      </BrowserRouter>
    )
  }
  
  export default Cars;