import React, { useState } from 'react';
import logo from './logo.svg';
import { Typography, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: theme.palette.primary.contrastText,
  },
  nameInput: {
    color: theme.palette.primary.contrastText
  },
  '@keyframes logo-spin': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  logo: {
    animation: '$logo-spin infinite 20s linear',
    height: '40vmin',
    pointEvents: 'none'
  }
}));

const App: React.FC = () => {

  const classes = useStyles();
  const [name, setName] = useState("");
  function getNameString() {
    if (!name) {
      return "Enter Name";
    }
    return `Your name is ${name}`;
  }

  return (
    <div className="App">
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography className={classes.nameInput}>
          {getNameString()}
        </Typography>
        <TextField onChange={e => {
          setName(e.target.value)
        }} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}
export default App;