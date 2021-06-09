import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext } from './context';

const Home = () => {
  const {modalToTrue, sideBarToTrue} = useContext(AppContext)
  
  return (
    <main>
      <button onClick={sideBarToTrue} className='sidebar-toggle'>
        <FaBars/>
      </button>
      <button onClick={modalToTrue} className='btn'>Show Modal</button>
    </main>
  )
}

export default Home
