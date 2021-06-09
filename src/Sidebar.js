import React,{useContext} from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import {AppContext} from './context'

const Sidebar = () => {
  const {isSideBarOpen, sideBarToFalse} = useContext(AppContext)

  return (
    <aside className={isSideBarOpen? 'show-sidebar sidebar' : 'sidebar'}>
      <div className="sidebar-header"> 
      <img className='logo' src={logo} alt="Coding Addict"/>
      <button onClick={sideBarToFalse} className='close-btn'>
        <FaTimes/>
      </button>
      </div>
      <ul className='links'>
      {links.map((link) => {
        const {id, url, text, icon} = link;
        return (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        )
      })}
      </ul>
      <ul className='social-icons'>
        {social.map((link)=> {
          const {id, url, icon} = link
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
