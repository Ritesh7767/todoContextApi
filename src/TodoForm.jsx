import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoContextProvider'

const TodoForm = () => {

    let [text, setText] = useState("")
    let {todo, setTodo} = useContext(TodoContext)

    const handleSubmit = event => {
        event.preventDefault()
        
        setTodo([...todo, {taskName : text, isActive : true}])
    }

  return (
    <form onSubmit={event => handleSubmit(event)}>
        <input type="text" placeholder='Enter your todo here' onChange={e => setText(e.target.value)} />
        <input type="submit" />
    </form>
  )
}

export default TodoForm