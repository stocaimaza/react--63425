import { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
    const [todos, setTodos] = useState(() => {
        const todosGuardados = localStorage.getItem("todos"); 
        if(todosGuardados) {
            return JSON.parse(todosGuardados); 
        } else {
            return []; 
        }
    }); 

    //Crear un estado para almacenar el value del input: 
    const [inputValue, setInputValue] = useState(""); 

    //Como valor inicial del useState vamos a tomar los datos que ya se encuentran en el LocalStorage.  

    useEffect(() => {
        //¿Para que voy a usar el useEffect?
        //Lo voy a usar para guardar todos los datos en el LocalStorage. 
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    //Función que agrega tareas:
    const agregarTodo = (texto) => {
        setTodos([...todos, texto]); 
    }

    const manejadorSubmit = (e) => {
        e.preventDefault(); 

        if(inputValue.trim()) {
            agregarTodo(inputValue); 
            setInputValue(""); 
        }
    }

    //Funcion para eliminar "Todos": 

    const borrarTodo = (todoABorrar) => {
        const actualizarTodos = todos.filter(todo => todo !== todoABorrar); 
        setTodos(actualizarTodos); 
    }

    

  return (
    <div>
        <h1> Lista de Tareas Pendientes </h1>
        <form onSubmit={manejadorSubmit}>
            <input type="text" placeholder="Agrega una tarea" onChange={(e) =>  setInputValue(e.target.value)}  value={inputValue} />
            <button type="submit"> Agregar </button>
        </form>

        <ul>
            {
                todos.map((todo, index) => (
                    <TodoItem 
                        key={index}
                        todo = {todo}
                        borrarTodo = {borrarTodo}
                    />
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList