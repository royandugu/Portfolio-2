"use client"

import { useState } from "react";

import Context from "./context";

const ContextState=(props:any)=>{
    const [activeNav,setActiveNav]=useState(0);

    const collection={
        activeNav:activeNav,
        setActiveNav:setActiveNav,
    }

    return(
        <Context.Provider value={collection}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextState;