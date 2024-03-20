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
      todo.id === id
        ? { ...todo, task: newInput ? newInput : todo.task, isEditing: false }
        : todo
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
    <div className="transition delay-150 ease-linear my-5">
      {todos.length ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="my-2 px-3 py-2 rounded bg-slate-200 flex justify-between text-md md:text-xl"
          >
            {todo.isEditing ? (
              <div className="flex justify-between items-center">
                <input
                  className="p-1 rounded"
                  type="text"
                  value={newInput}
                  onChange={(e) => setNewInput(e.target.value)}
                />
                <button
                  id={todo.id}
                  className="ml-2 px-2 py-1 bg-blue-500 rounded text-white shadow-md"
                  onClick={(e) => onSave(e)}
                >
                  save
                </button>
              </div>
            ) : (
              <>
                <p className="">
                  {todo.isDone ? (
                    <s className="text-gray-500 font-semibold">{todo.task}</s>
                  ) : (
                    todo.task
                  )}
                </p>
                <div className="flex justify-between items-center ml-20 text-gray-700">
                  <FontAwesomeIcon
                    className="bg-blue-300 mx-2 p-2 cursor-pointer rounded-lg shadow-md hover:text-gray-800"
                    id={todo.id}
                    onClick={(e) => onCheck(e)}
                    icon={faCheck}
                  />
                  <FontAwesomeIcon
                    className="bg-blue-300 mx-2 p-2 cursor-pointer rounded-lg shadow-md hover:text-gray-800"
                    id={todo.id}
                    onClick={(e) => onEdit(e)}
                    icon={faPenToSquare}
                  />
                  <FontAwesomeIcon
                    className="bg-blue-300 mx-2 p-2 cursor-pointer rounded-lg shadow-md hover:text-gray-800"
                    id={todo.id}
                    onClick={(e) => onDelete(e)}
                    icon={faTrash}
                  />
                </div>
              </>
            )}
          </div>
        ))
      ) : (
        <h1 className="text-center text-slate-100 font-semibold text-sm md:text-xl">
          📝Add your task
        </h1>
      )}
    </div>
  );
};

export default Todos;
