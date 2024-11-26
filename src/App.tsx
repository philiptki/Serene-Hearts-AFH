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

          <Router>
              <Navbar />
              <Routes>
                  <Route path='/' />
              </Routes>
          </Router>



      </div>
  )
}

export default App;