import React, {useState} from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom"


function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (    
    <div className="header">

         <div className="header__left">
         <MenuIcon/>
         <Link to={`/`}>
         <img 
          class="header__logo" 
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" rel="youtube logo" />
         </Link>
         </div>

        <div className="header__input">
        <input 
        onChange={e => setInputSearch(e.target.value)} 
        value={inputSearch} 
        placeholder="Search"
         type="text" >          
         </input> 
        <Link to={`/search/${inputSearch}`}>
        <SearchIcon className="header__inputButton"/>
        </Link>
        
        </div>

        <div className="header__icons">
        <VideoCallIcon fontSize="large" className="header__icon"/>
        <AppsIcon fontSize="large" className="header__icon"/>
        <NotificationsNoneIcon fontSize="large" className="header__icon"/>
      
        <Avatar 
        src="https://avatars.githubusercontent.com/u/116481131?v=4" 
        atl="ThangMN avatar" />  
        </div>
   
    
    
    </div>
    
  )
}

export default Header