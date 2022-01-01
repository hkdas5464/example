import React from "react";
import LabelImportantTwoToneIcon from "@mui/icons-material/LabelImportantTwoTone";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import ListItemText from "@mui/material/ListItemText";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import post from "./postname";
import { Divider, Typography } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function NewTable() {
  return (
    <Card>
      <TableContainer component={Paper}>
        <Typography style={{ background: "rgb(0, 171, 85)" }}>
          UPSC Engineering Services IAS 2021 Vacancy Details
        </Typography>
        <Divider />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Post Name</TableCell>
              <TableCell align="center">Total Post</TableCell>
              <TableCell align="center">Eligibility</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.total}</TableCell>
                <TableCell>
                  {row.eligiliblity.map((e) => (
                    <>
                      <ListItem>
                        <ListItemAvatar>
                          <LabelImportantTwoToneIcon
                            style={{ color: "green" }}
                          />
                        </ListItemAvatar>

                        <ListItemText primary={e.title} />
                      </ListItem>
                    </>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default NewTable;
