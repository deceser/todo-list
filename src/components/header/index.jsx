import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FlareTwoToneIcon from "@mui/icons-material/FlareTwoTone";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Typography from "@mui/material/Typography";
import { AppBar } from "@mui/material";

const Header = ({ clickTheme, light }) => {
  return (
    <AppBar elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography color="error" variant="h4">
            TODO-LIST
          </Typography>
        </Box>
        <Box>
          <IconButton onClick={clickTheme} variant="dashed">
            {light ? <Brightness3Icon /> : <FlareTwoToneIcon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
