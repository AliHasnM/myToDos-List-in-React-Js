import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  // check localStorage for data
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // delete function
  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos");
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  // add todo
  const addTodo = (title, description) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      description: description,
    };
    setTodos([...todos, myTodo]);
  };
  // useState hook use
  const [todos, setTodos] = useState(initTodo);
  // data save on localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="myToDos-List" searchbar={true} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
