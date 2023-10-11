import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Aboutus from './Aboutus';

const App=()=>{
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element=<Home /> />
        <Route path="Aboutus" exact element=<Aboutus/> />
        </Routes>
    </div>
  )
}

export default App;