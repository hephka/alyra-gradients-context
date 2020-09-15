import React, {useState, createContext} from 'react';
import { gradients, uniqueTags} from "./../gradients"

export const GradientsContext = createContext()

const GradientsContextProvider = ({ children }) => {
    return (
        <GradientsContext.Provider value={{ gradients, uniqueTags }}>
            {children}
        </GradientsContext.Provider>
    )
}

export default GradientsContextProvider