import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

const styles = {
  Paper: {
    padding: "8px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    backGroundColor: "#cfcfe0",
    width: "100%",
  },
  Typography: {
    marginLeft: "10px",
    flexGrow: 1,
  },
};

const TodoList = ({ todos, removeItem }) => {
  return (
    <>
      {todos.map((todo) => (
        <Box sx={{ mt: 2 }} key={todo.id}>
          <Paper elevation={8} style={styles.Paper} className="animate__animated animate__fadeInUp">
            <Typography style={styles.Typography}>{todo.title}</Typography>
            <IconButton onClick={() => removeItem(todo.id)} variant="dashed">
              <DeleteTwoToneIcon />
            </IconButton>
          </Paper>
        </Box>
      ))}
    </>
  );
};

export default TodoList;
