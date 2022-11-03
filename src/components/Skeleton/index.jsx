import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Skeltn = () => {
  return (
    <Box sx={{ mt: 20 }}>
      <Skeleton variant="rounded" height={60} />
      <Skeleton sx={{ mt: 2 }} variant="rounded" height={40} />
      <Skeleton sx={{ mt: 2 }} variant="rounded" height={40} />
    </Box>
  );
};

export default Skeltn;
