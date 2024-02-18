import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //   stop refreshing page on submit form data
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title of Description cannot be blank.");
    } else {
      addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div className="container m-auto mt-16">
      <h1 className="text-3xl font-bold">Add a Todo</h1>
      <form onSubmit={submit}>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            className="border-2 border-blue-200 rounded mt-2 py-2 px-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={description}
            className="border-2 border-blue-200 rounded mt-2 py-2 px-2"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 rounded p-1 px-2 my-1 mt-4 text-white hover:bg-green-500"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
