import React from "react";
import { NavLink } from "react-router-dom"
import styles from './style.module.scss'

const links = [
  'Profile',
  'Dialogs',
  'Users',
  'News',
  'Music',
  'Settings'
]

const Menu = () => {
  const NavLinks = () => (
    links.map((link, i) => {
      return <NavLink key={i} activeClassName={styles.a_active} to={`/${link.toLowerCase()}`}>{link}</NavLink>
    })
  )
  return (
    <nav className={styles.menu}>
      <NavLinks />
    </nav>
  )
}

export default Menu;

