import React, { useState } from 'react';
import logo from './logo.svg';
import { Typography, TextField, makeStyles } from '@material-ui/core';

// TODO:
// track this: https://github.com/socketio/engine.io/pull/583
// uws, a dependency, is deprecated and has an empty version on its current
// release.  Workaround: npm install uws@10.148.1
const port = process.env.PORT;
const io = require('socket.io')();
io.listen(port);

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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

// client connections come in here...
io.on('connection', (client: any) => {
	// ...and the server emits things here
});

function getNameString(name: string): string {
  if (!name) {
    return "Enter Name";
  }
  return `Your name is ${name}`;
}

const App: React.FC = () => {

  const classes = useStyles();
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <Typography className={classes.nameInput}>
          {getNameString(name)}
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
