

import "./Header.css"

import Hamburger from "../assets/Hamburger.svg";
import PanelLogo from "../assets/PanelLogo.svg";
import Search from "../assets/Search.svg";
import AddVideo from "../assets/AddVideo.svg";
import Bell from "../assets/Bell.svg";
import ProfilePhoto from "../assets/ProfilePhoto.svg"
import PropTypes from "prop-types";



const Header = ({setSearch}) => {
  return (
    <header>
      <nav>
        <div className="header-container">
          <div className="header-links">
            <img src={Hamburger} alt="Hamburger" />
            <img src={PanelLogo} alt="PanelLogo" />
          </div>
          <div className="header-search">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..." />
            <button><img src={Search} alt="Search" /></button>
          </div>
          <div className="header-prof">
            <img src={Bell} alt="" />
            <img src={AddVideo} alt="" />
            <img src={ProfilePhoto} alt="" />
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  setSearch:PropTypes.func
}


export default Header