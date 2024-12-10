import './App.css'
import Header from './components/Header'
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return(
      <div>

          <Header/>

          {/*<Navbar/>*/}

          <Router basename="/Serene-Hearts-AFH">
              <Navbar />
              <Routes>
                  <Route path='/' element={<Home/>}/>
              </Routes>
          </Router>



      </div>
  )
}

export default App;