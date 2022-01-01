import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link, useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

const sections = [
  { title: "Home", url: "" },
  { title: "Latest Jobs", url: "/1" },
  { title: "Results", url: "/result/1" },
  { title: "AdmitCard", url: "/admitcard" },
  { title: "AnswerKey", url: "/answerkey" },
  { title: "Syllebus", url: "/syllebus" },
  { title: "Admission", url: "/admission" },
  { title: "Contact Us", url: "/contactus" }
];

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="newprimary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Box style={{ background: "white" }}>
          <Card position="fixed">
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}></Toolbar>
            <Toolbar
              component="nav"
              variant="dense"
              sx={{ justifyContent: "space-between", overflowX: "auto" }}
            >
              {sections.map((section) => (
                <Link
                  to={section.url}
                  style={{ textDecoration: "none", cursor: "pointer" }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "inline",
                      color: "green",
                      textDecoration: "none"
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={section.title}
                        style={{ color: "#00ab55" }}
                        variant="outlined"
                      />
                    </Stack>
                  </Box>
                </Link>
              ))}
            </Toolbar>
            <marquee behavior="alternate" style={{ color: "#00ab55" }}>
              Sarkari Result Android Apps || Sarkari Result Youtube Channel ||
              Sarkari Result Apple / IOS Apps|| Follow Instagram
            </marquee>
          </Card>
        </Box>
      </AppBar>
    </Box>
  );
}
