import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ModeNightTwoToneIcon from "@mui/icons-material/ModeNightTwoTone";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography>TODO LIST</Typography>
        </Box>
        <Box>
          <IconButton>
            <ModeNightTwoToneIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
