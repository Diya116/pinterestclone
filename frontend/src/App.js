import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from "./Components/Home/Home"
import Header from "./Components/Header/Header"
import Login from "./Components/Login/Login"
import Createpin from './Components/CreatePin/Createpin';
import Singlepin from "./Components/Singlepin/Singlepin.jsx";
import Userinfo from "./Components/user/User.jsx"
import Data from './data.js';

function App() {
// const [save,setSave]=useState([]);

const[data,setData]=useState(Data);
localStorage.setItem("data",JSON.stringify(data));
var storage = JSON.parse(localStorage.getItem("data"));
console.log(data);
  return (
    <div className="App">
     
     <Router>
      <Header/>    
      <Routes>
          <Route path="/"element={<Home  data={data}/>}/> 
         <Route path="login"element={<Login/>}/>
        <Route path="/createpin"element={<Createpin data={data} setData={setData}/>}/>
        <Route path="/pin/:id"element={<Singlepin  data={data}/>} />
       
        <Route path="/userinfo"element={<Userinfo/>}/> 
       
        <Route path="/"element={<Home data={data}/>}/> 
            <Route path="/pin/:id"element={<Singlepin  data={data}/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
