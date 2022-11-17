import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from './UserContext';

function Sidebar() {
    const {user,setUser} = useContext(UserContext);
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    
    <hr className="sidebar-divider my-0"/>

    <li className="nav-item active">
        <Link to={"books"} className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Books</span></Link>
    </li>

   
    <hr className="sidebar-divider"/>

   
    <div className="sidebar-heading">
        Interface
    </div>

  {user.enable?
    <li className="nav-item">
        <Link to={"members"} className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Members</span>
        </Link>

        
    

        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                <a className="collapse-item" href="buttons.html">Buttons</a>
                <a className="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>:null}
</ul>
  )
}

export default Sidebar