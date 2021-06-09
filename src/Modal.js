import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import {AppContext} from './context'

const Modal = () => {
  const {isModalOpen, modalToFalse} = useContext(AppContext)

  return (
    <div className={isModalOpen? 'show-modal modal-overlay' : 'modal-overlay'}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button onClick={modalToFalse} className='close-modal-btn'>
          <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
