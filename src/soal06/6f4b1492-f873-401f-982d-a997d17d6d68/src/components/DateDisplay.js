import React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";

const DateDisplay = ({ apiResponse }) => (
  <Paper className="container">
    <List>
      <ListItem>
        <ListItemText data-testid="day">
          Day: {new Date(apiResponse).getDay() || ""}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText data-testid="month">
          Month: {new Date(apiResponse).getMonth() === 0 ? 0 : ""}
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText data-testid="year">
          Year: {new Date(apiResponse).getFullYear() || ""}
        </ListItemText>
      </ListItem>
    </List>
  </Paper>
);

DateDisplay.propTypes = {
  apiResponse: PropTypes.string,
};

export default DateDisplay;
