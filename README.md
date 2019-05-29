# One Night Ultimate Werewolf/onuw-game

### Introduction

**One Night Ultimate Werewolf** is a web adaption of the board game by Ted Alspach and Akihisa Okui and published by Bezier Games.  It is not endorsed by or affiliated with the designer or publisher.  The original GitHub repository can be found [here](https://github.com/tnishida95/onuw-game).

### Gameplay

ONUW is a social deduction game where players a given a secret role, aligned to the Villagers or the Werewolves.  During the night, roles take special actions which change roles or reveal information, then the players must work together to find a Werewolf.

This instance of **One Night Ultimate Werewolf** attempts to play in accordance to the original board game's rules.  Though this web version removes some of the difficulties of managing game pieces and cards, it is still meant to be played with all players in the same room.

### Workspace Set Up

You will need Node and npm.  If you don't have these already, run the following commands:
```
sudo apt-get install nodejs
sudo apt-get install npm
```
Call `npm init` to start up the npm package manager.  Then, get the needed packages with `npm install` or `npm install <package>`:
```
npm install express
npm install socket.io
```
~~To start the server, call `node app.js` and open `localhost:2000` in a browser window.~~
