import React from "react";
import { NavLink } from "react-router-dom"
import styles from './Navigation.module.scss'

const links = [
  'Profile',
  'Dialogs',
  'Users',
  'News',
  'Music',
  'Settings'
]

const NavLinks = () => (
  links.map((link, i) => {
    return <NavLink key={i} activeClassName={styles.a_active} to={`/${link.toLowerCase()}`}><h3>{link}</h3></NavLink>
  })
)

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLinks />
    </nav>
  )
}

export default Menu;

