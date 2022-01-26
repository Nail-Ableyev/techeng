import React, {useState} from "react";

const Context=React.createContext()

function ContextProvider({children}){

    const [currentPage, setCurrentPage] = useState("blah")

    return (
        <Context.Provider value={{currentPage,setCurrentPage}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}