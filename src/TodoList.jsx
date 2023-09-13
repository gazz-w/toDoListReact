
import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className="list">
            {todos.length === 0 && "Nothing to do for today"}
            {todos.map(todo => {
                return (
                    <TodoItem   // poderia utilizar "{...todo}" para substituir as props "id, completed, title abaixo"
                        id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        deleteTodo={deleteTodo}
                    />
                )
            })}
        </ul>
    )
    
}