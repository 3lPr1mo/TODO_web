import React from "react";
import { TodoContext } from "./TodoContext/TodoContext";
import { TodoCounter } from './TodoCounter'
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import { TodosError } from "./TodosError";
import { TodosLoading } from "./TodosLoading";
import { EmpyTodos } from "./EmpyTodos";
//import './App.css';

function AppUI(){

    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
    <>
      <TodoCounter/>
      <TodoSearch/>

            <TodoList>
            {loading && <TodosLoading/>}
            {error && <TodosError error={error}/>}
            {(!loading && !searchedTodos.length) && <EmpyTodos/>}
    
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
            ))}
            </TodoList>

        {!!openModal && (<Modal>
          <TodoForm/>
        </Modal>)
        }

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
    </>
    );
}

export {AppUI};