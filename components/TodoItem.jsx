import React from "react";

// props directly use then use this type {todo, onDelete} ye 2 props use keye hain
const TodoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4 className="font-bold text-xl my-1">{todo.title}</h4>
      <p className="my-1">{todo.description}</p>
      <button
        className="bg-red-600 rounded p-1 px-2 my-1 text-white hover:bg-red-500"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
