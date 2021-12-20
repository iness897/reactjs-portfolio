import React from 'react'
import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
return (
  <div className={'menu ' + (menuOpen && "active")}> 

    <ul>
      <li onClick={()=>setMenuOpen(false)}>
        <a href="#intro">Accueil</a>
      </li>
      <li onClick={()=>setMenuOpen(false)}>
        <a href="#competences">Compétences</a>
      </li>
      <li onClick={()=>setMenuOpen(false)}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li onClick={()=>setMenuOpen(false)}>
        <a href="#parcours">Parcours</a>
      </li>
      <li onClick={()=>setMenuOpen(false)}>
        <a href="#contact">Contact</a>
      </li>

    </ul>
          
  </div>
)
}
