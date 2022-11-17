import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { UserContext } from './UserContext'

function PortalLayout() {
    const {user} = useContext(UserContext)
  return (
    <div id="wrapper">
    <Sidebar />
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
        <Topbar />
        <Outlet/>
        </div>
    </div>
  </div>
  )
}

export default PortalLayout