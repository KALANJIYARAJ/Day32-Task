import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { UserContext } from './UserContext';

function Sidebar() {
    const {user,setUser} = useContext(UserContext);
  return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

   
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
        </div>
        <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    
    <hr class="sidebar-divider my-0"/>

    <li class="nav-item active">
        <Link to={"books"} class="nav-link">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Books</span></Link>
    </li>

   
    <hr class="sidebar-divider"/>

   
    <div class="sidebar-heading">
        Interface
    </div>

  {user.enable?
    <li class="nav-item">
        <Link to={"members"} class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Members</span>
        </Link>

        
    

        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">Custom Components:</h6>
                <a class="collapse-item" href="buttons.html">Buttons</a>
                <a class="collapse-item" href="cards.html">Cards</a>
            </div>
        </div>
    </li>:null}
</ul>
  )
}

export default Sidebar