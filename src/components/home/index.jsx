import React from "react";

import Container from "@mui/material/Container";

import Skeleton from "../Skeleton";
import NewTodo from "./newtodo";
import NoTodos from "./notodos";
import TodoList from "./todolist";

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const [todos, setTodos] = React.useState(JSON.parse(localStorage.getItem("todos")) || []);

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

  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

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

  return (
    <Container maxWidth="sm">
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <NewTodo onCreate={addTodo} />
          {todos.length ? <TodoList todos={todos} removeItem={removeItem} /> : loading ? null : <NoTodos />}
        </>
      )}
    </Container>
  );
};

export default Home;
