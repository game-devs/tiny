var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var express = require('express');
var port = process.env.PORT || 3000;
app.use(express.static('public'))
var Player = require('./player');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

var players = [];
var boardRows = 7;
var boardColumns = 7;

io.on('connection', (socket) => {
    console.log('a player connected');

    socket.on('player-login', (player) => {
        if (player.name == 'reset') {
            players = [];
            return;
        }

        console.log(player.name + ' make login');

        const newPlayer = new Player(socket.id, player.name, player.color, 0, 0);
        players.push(newPlayer);
    });

    socket.on('walk-command', (msg) => {
        var player = players.filter(player => player.name == msg.name)[0];

        if (!player) return;
 
        switch (msg.key) {
            case 'right':
                if (player.x + 1 < boardRows) {
                    player.x++;
                }
                break;
            case 'down':
                if (player.y + 1 < boardColumns) {
                    player.y++;
                }
                break;
            case 'left':
                if (player.x - 1 >= 0) {
                    player.x--;
                }
                break;
            case 'up':
                if (player.y - 1 >= 0) {
                    player.y--;
                }
                break;
        }

        // TODO: Check player identity
        //console.log('walk-command:' + msg);
        io.emit('players', players); // broadcast
    });

    socket.on('disconnect', () => {
        players = players.filter(player => player.id != socket.id);
        console.log('player [' + socket.id + '] disconnected ');
    });
});

http.listen(port, () => {
  console.log('listening on *:3000');
});