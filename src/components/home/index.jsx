import React from "react";

import Container from "@mui/material/Container";

import Skeleton from "../Skeleton";
import NewTodo from "./newtodo";
import NoTodos from "./notodos";
import TodoList from "./todolist";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);

  // ---------------------------------------------------------------------------------------------

  // add

  const addTodo = (title) => {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  };

  // ---------------------------------------------------------------------------------------------

  // remove

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ---------------------------------------------------------------------------------------------

  // save

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ---------------------------------------------------------------------------------------------

  // check skeleton

  React.useEffect(() => {
    setTimeout(() => {
      setTodos(todos);
      setLoading(false);
    }, 2000);
  }, []);

  // ---------------------------------------------------------------------------------------------

  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <NewTodo onCreate={addTodo} />
          {todos.length ? <TodoList todos={todos} removeItem={removeItem} /> : loading ? null : <NoTodos />}
        </>
      )}
    </div>
  );
};

export default Home;
