import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import TextField from "@mui/material/TextField";

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
      <Paper elevation={12} sx={{ p: 1, borderRadius: "10px" }}>
        <form onSubmit={submitHandler}>
          <Grid container>
            <Grid item sx={{ flexGrow: 1 }}>
              <TextField
                value={addTodo}
                onChange={(event) => setAddTodo(event.target.value)}
                sx={{ width: "450px" }}
                id="standard-basic"
                label="New Todo"
                variant="standard"
              />
            </Grid>
            <IconButton disabled={!addTodo} sx={{ boxShadow: 5 }} type="submit">
              <AddTwoToneIcon />
            </IconButton>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default NewTodo;
