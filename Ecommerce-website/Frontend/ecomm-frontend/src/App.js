

import React,{useEffect} from 'react'
import "./App.css";
import Header from "./Header/Header";
import LoginSignup from "./LoginSignup/LoginSignup";
import Cards from "./ProductCards/Cards";
import axios from 'axios'

function App() {
// testing purpose
  useEffect(() => {
    axios.get(`http://localhost:8000/product/new`)
        .then((response) => {
          console.log(response)
        })
}, [])


  return (
    <div className="App">

      <Header  />
       <Cards />
       <LoginSignup />

    </div>
  );
}

export default App;
