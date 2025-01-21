import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "@mui/material/styles";
import AppBarComponent from "./Header";

const MiniDrawer = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "",
        width: "100%",
      }}
    >
      <CssBaseline />
      <AppBarComponent open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main"
      sx={{
        overflow:"hidden"
      }}
      
      >{children}</Box>
    </Box>
  );
};

export default MiniDrawer;
