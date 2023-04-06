import Nav from "./Components/Nav/Nav";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";


import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import React from 'react'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact component={Home}/>
        </Routes>
        <Home />
        <Footer />
      </Router>
    </div>
  )
}

export default App
