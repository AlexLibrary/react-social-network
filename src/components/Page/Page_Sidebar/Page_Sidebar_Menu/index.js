import React from "react";
import { NavLink } from "react-router-dom"
import './style.scss'
const S = 'Page_Sidebar_Menu';

const Page_Sidebar_Menu = () => {
  return (
    <nav className={`${S}`}>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>

  )
}

export default Page_Sidebar_Menu;

