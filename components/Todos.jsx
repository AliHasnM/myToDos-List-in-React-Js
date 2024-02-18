import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, onDelete }) => {
  const rows = [];
  for (let i = 0; i < todos.length; i += 3) {
    rows.push(todos.slice(i, i + 3));
  }

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-4">Todos List</h3>
      {rows.map((row, index) => (
        <div key={index} className="flex flex-wrap -mx-4 mb-4">
          {row.map((todo) => (
            <div key={todo.sno} className="w-1/3 px-4 mb-4">
              <TodoItem todo={todo} onDelete={onDelete} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Todos;
