import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css"
import { useState } from "react";
import Login from "../../Login";


export default function Navbar(){

  const [isMobile,setIsMobile]=useState(false)
  function handleMenu(){
    setIsMobile(!isMobile);
  }


  return (
    <div className="content">
      <div className="navbar">
        <h1><span className="heading">Drive</span> Smart</h1>
        <div className={isMobile ? "navbar-ul-container-mobile" : "navbar-ul-container"}>     
          <ul className="navbar-ul">
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>
              <Link to="./about">About</Link>
            </li>
            <li>
              <Link to="./catalogue">Catalogue</Link>
            </li>
            <li>
              <Link to="./termsandconditions">Terms and conditions</Link>
            </li>
            <li><Login /></li>
          </ul>
          
        </div>
        <div className="navbar-menu" onClick={handleMenu}>
            <button > {isMobile ? <CloseIcon />: <MenuIcon /> } </button>
          </div>
      </div>
    </div>
  )
}