import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Tasks from "./Tasks";
import TaskItem from "./TaskItem";
function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([])
    const handleSubmit = (e) => {
      e.preventDefault();
      setTodos([...todos ,todo]);
      setTodo("")
    };
  return (
    <>
        <div className="w-1/2 px-4">
          <form
            className="flex flex-col items-center gap-3 "
            onSubmit={handleSubmit}
          >
            <Input type="text" placeholder="Add Task" className="bg-zinc-900 text-white w-1/2" value={todo} onChange = {(e)=>setTodo(e.target.value)} />
            <Button className="w-2/2 bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white border border-white">Add</Button>
          </form>
        </div>
        <div className="w-1/2 px-4">
          <Tasks />
          {todos.map((item)=>(
          <TaskItem key={item} item={item} />
          ))}
        </div>
    </>
  );
}

export default Todo;
