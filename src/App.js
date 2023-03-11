import React from "react";
import "./App.css"
import Header from "./Header"
import Sidebar from "./Sidebar"
import RecommendedVideos from "./RecommendedVideos"
import SearchPage from "./SearchPage"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="app">    
    <Router>
    <Header/>

    <Routes>
      <Route 
      path='/search/:searchTerm' 
      element={      
        <div className="app_page">
        <Sidebar />
        <SearchPage />
        </div>} /> 
      <Route 
      path='/' 
      element={
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      } />
           
    </Routes>
    </Router>
      {/* <Header />
      <div className="app_page">
        <Sidebar />
        <RecommendedVideos />
      </div> */}

    </div>

  );
}

export default App;
