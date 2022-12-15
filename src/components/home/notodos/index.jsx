import React from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const styles = {
  Paper: {
    padding: "8px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backGroundColor: "#cfcfe0",
    opacity: 0.3,
    width: "100%",
  },
};

const NoTodos = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Paper elevation={6} style={styles.Paper} className="animate__animated animate__pulse animate__slow animate__infinite">
        <Typography variant="h8">No Todos!</Typography>
      </Paper>
    </Box>
  );
};

export default NoTodos;
