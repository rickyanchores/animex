import React from 'react';
import {HashLink as Link}  from "react-router-hash-link";

const Nav = () => {

  const navList = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/"
    },
    {
      name: "Contact",
      href: "/"
    }
  ]

  return (
    <div className='Nav'>
        <h3>Nav</h3>
        <div className="navLinks">
          {navList.map((link) => {
            return(
              <Link className="link" to={link.href}>{link.name}</Link>
            )
          })}
        </div>
    </div>
  )
}

export default Nav