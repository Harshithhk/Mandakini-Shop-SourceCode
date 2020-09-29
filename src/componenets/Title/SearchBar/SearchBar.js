import React from "react";
import "./SearchBar.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60%",
      border: "green",
    },
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard">
        <Button variant="contained">Default</Button>
      </TextField>
    </form>
  );
};

export default SearchBar;
