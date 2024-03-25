import React , {createContext, useState} from "react"

export let TodoContext = createContext()

const TodoContextProvider = ({children}) => {

    let [todo, setTodo] = useState([])

    return (
        <TodoContext.Provider value={{todo, setTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
