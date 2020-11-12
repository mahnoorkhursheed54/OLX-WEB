import React from 'react';
import './Props.css'
import './App.css';
import {BrowserRouter , Route , Link} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function MobilePhone(){
    return(
      <BrowserRouter>
      <Header/>
        {/* <Route path="/" component={HomePage}/> */}
        <Link to={"/browser/" + item.ID} className="names color noul bl">{item.label}</Link>
      <Footer/>
      </BrowserRouter>
    )
  }
  
  export default MobilePhone;