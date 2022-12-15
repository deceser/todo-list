import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import TextField from "@mui/material/TextField";

const styles = {
  Paper: {
    padding: "8px",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
};

const NewTodo = ({ onCreate }) => {
  const [addTodo, setAddTodo] = React.useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    if (addTodo.trim()) {
      onCreate(addTodo);
      setAddTodo("");
    }
  };

  return (
    <Box sx={{ mt: 20 }}>
      <form onSubmit={submitHandler}>
        <Paper elevation={8} style={styles.Paper}>
          <TextField
            value={addTodo}
            onChange={(event) => setAddTodo(event.target.value)}
            sx={{ width: "100%" }}
            id="standard-basic"
            label="New Todo"
            variant="standard"
            color="error"
          />
          <IconButton disabled={!addTodo} type="submit" variant="dashed">
            <AddTwoToneIcon />
          </IconButton>
        </Paper>
      </form>
    </Box>
  );
};

export default NewTodo;
