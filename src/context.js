import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children})=> {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const modalToTrue = () => {
        setIsModalOpen(true)
    }
    const modalToFalse = () => {
        setIsModalOpen(false)
    }
    const sideBarToTrue = () => {
        setIsSideBarOpen(true)
    }
    const sideBarToFalse = () => {
        setIsSideBarOpen(false)
    }

    return (
        <AppContext.Provider value={{isModalOpen, isSideBarOpen, modalToTrue, modalToFalse, sideBarToTrue, sideBarToFalse}}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }