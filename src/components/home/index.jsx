import React, { useEffect } from "react";

import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

import NewTodo from "./newtodo";
import TodoList from "./todolist";

const Home = () => {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=0")
      .then((response) => response.json())
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      });
  }, []);

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
      <NewTodo onCreate={addTodo} />
      {loading && <CircularProgress />}
      {todos.length ? (
        <TodoList todos={todos} removeItem={removeItem} />
      ) : loading ? null : (
        <h1>No Todos!</h1>
      )}
    </Container>
  );
};

export default Home;
