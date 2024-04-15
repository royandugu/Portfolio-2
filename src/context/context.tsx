import {createContext} from "react";

type ContextType={
    activeNav:number,
    setActiveNav:React.Dispatch<React.SetStateAction<number>>,
}

const defaultValue:ContextType={
    activeNav: 0,
    setActiveNav: () => {},
};

const context=createContext(defaultValue);

export default context;
