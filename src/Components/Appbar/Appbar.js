import React from "react";
import Appbar from "./Navbar";

function Header() {
  return (
    <Appbar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    />
  );
}

export default Header;
