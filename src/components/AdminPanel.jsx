import { NavLink } from "react-router-dom"
import "./AdminPanel.css"


import Home from "../assets/Home.svg";
import Explore from "../assets/Explore.svg";
import Shorts from "../assets/Shorts.svg";
import Subscriptions from "../assets/Subscriptions.svg";
import Library from "../assets/Library.svg";
import Yourvideos from "../assets/YourVideos.svg";
import Watchlater from "../assets/Watchlater.svg";
import Pop from "../assets/Pop.svg";





const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="main-panel py-2">
      </div>
      <div className="main-panel">
        <NavLink to="/" className="nav-link panel-links" ><img src={Home} alt="Home" /> Home</NavLink>
        <NavLink to="/explore" className="nav-link panel-links" ><img src={Explore} alt="Explore" /> Explore</NavLink>
        <NavLink to="/shorts" className="nav-link panel-links" ><img src={Shorts} alt="Shorts" />Shorts</NavLink>
        <NavLink to="/subscriptions" className="nav-link panel-links" ><img src={Subscriptions} alt="Subscriptions" />Subscriptions</NavLink>
      </div>
      <hr />
      <div className="secondary-panel">
        <NavLink to="/library" className="nav-link panel-links" ><img src={Library} alt="Library" />Library</NavLink>
        <NavLink to="/yourvideos" className="nav-link panel-links" ><img src={Yourvideos} alt="Yourvideos" />Your videos</NavLink>
        <NavLink to="/watchlater" className="nav-link panel-links" ><img src={Watchlater} alt="Watchlater" />Watch later</NavLink>
        <NavLink to="/pop" className="nav-link panel-links" ><img src={Pop} alt="Pop" />Pop</NavLink>
      </div>
      <hr />
      <div className="subscriptions">
        <NavLink to="/subscriptions" className="nav-link panel-links subscriptions-title" >Subscriptions</NavLink>
      </div>
    </div>
  )
}

export default AdminPanel