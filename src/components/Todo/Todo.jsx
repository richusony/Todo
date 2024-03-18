import React, { useState } from "react";
import Todos from "../Todos/Todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../Todos/data";
const Todo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(data);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let day = d.getDay();
  let date = d.getUTCDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input) return alert("Enter your task!!")
    setList([...list, { id: list[list.length - 1].id + 1, task: `${input}` }]);
    setInput("");
  };
  return (
    <div className="px-8 py-4 min-h-1/2 bg-[#1CA7EC] rounded-xl shadow-2xl">
      <h1 className="text-center text-white text-2xl font-semibold">{weekday[day]}</h1>
      <h3 className="text-center text-white text-xl">{date} {months[month]}, {year}</h3>

      <div className="my-3 w-full flex justify-between">
        <input
          className="mx-2 px-3 py-2 w-full rounded"
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="transition delay-150 ease-linear px-4 py-3 bg-[#7BD5F5] hover:bg-[#1F2F98] text-md text-center font-semibold text-white rounded-full "
        >
          <span>
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </button>
      </div>

      <Todos todos={list} setTodos={setList}/>
    </div>
  );
};

export default Todo;
