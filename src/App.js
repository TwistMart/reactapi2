
//import { useState } from 'react';
import './App.css';
import Axios from "axios"; 
import { useState } from 'react';
// import {useState } from 'react';



function App() { 
  const[generatedExcuse, setGeneratedExcuse]=useState("")

  const HandleExcuse = (excuse)=>{
    Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`)
    .then((res) =>{
      setGeneratedExcuse(res.data[0].excuse);
    });
  };

  return (
    <div className="App">
    <h1> Generate an excuse </h1>
    <button onClick={() => HandleExcuse("party")}>Party</button>
    <button onClick={() => HandleExcuse("family")}>Family</button>
    <button onClick={() => HandleExcuse("office")}>office</button>

    {generatedExcuse}
   
    </div>
  );
}

export default App;
