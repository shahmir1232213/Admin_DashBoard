import React,{createContext,useState} from 'react'
export const DataContext = createContext();

const ContextProvider = (props) => {
    const [activemenu,setActiveMenu] = useState(true); ;
    return (
        <DataContext.Provider value={{activemenu,setActiveMenu}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default ContextProvider