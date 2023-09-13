import "./styles.css"
import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm.jsx"
import {TodoList } from "./TodoList.jsx"
 
function App() {
    const [todos, setTodos] = useState(() => {
        const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []
        return JSON.parse (localValue)
    } )

    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos))
    }, [todos])

    function addTodo(title) {
        setTodos(currentTodos => { // nessa parte é importante "setar" uma função ao invés de apenas um valor, pois caso ocorra novos itens, eles iriam apenas se sobreescrever e não ser adicionados
            return [
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]

        })
    }

    
    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }

    return (
        <>
            <NewTodoForm onSubmit={addTodo} />
            <h1 className="header">Todo list</h1>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            
        </>
    )  
}

export default App
