import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Todos = ({ todos, setTodos }) => {
  const [newInput, setNewInput] = useState("");
  const onCheck = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id, 10);
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(newTodos);
  };

  const onEdit = (e) => {
    const id = parseInt(e.target.id, 10);
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    );
    setNewInput(todos[id - 1].task);
    setTodos(newTodos);
  };

  const onSave = (e) => {
    const id = parseInt(e.target.id, 10);
    
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: newInput? newInput : todo.task ,isEditing: false} : todo
    );
    setTodos(newTodos);
  };

  const onDelete = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id, 10);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="my-5">
      {todos &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="my-2 px-3 py-2 rounded bg-slate-200 flex justify-between text-xl"
          >
            {todo.isEditing ? (
              <div>
                <input
                  type="text"
                  value={newInput}
                  onChange={(e) => setNewInput(e.target.value)}
                />
                <button
                  id={todo.id}
                  className="ml-2 px-2 py-1 bg-blue-500 rounded text-white"
                  onClick={(e) => onSave(e)}
                >
                  save
                </button>
              </div>
            ) : (
              <span>{todo.isDone ? <s>{todo.task}</s> : todo.task}</span>
            )}
            <div className="ml-20 text-gray-700">
              <FontAwesomeIcon
                className="mx-2 cursor-pointer"
                id={todo.id}
                onClick={(e) => onCheck(e)}
                icon={faCheck}
              />
              <FontAwesomeIcon
                className="mx-2 cursor-pointer"
                id={todo.id}
                onClick={(e) => onEdit(e)}
                icon={faPenToSquare}
              />
              <FontAwesomeIcon
                className="mx-2 cursor-pointer"
                id={todo.id}
                onClick={(e) => onDelete(e)}
                icon={faTrash}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Todos;
