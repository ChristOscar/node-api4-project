require('dotenv').config();
const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;



server.listen(PORT, () =>{
  console.log(`Listening on ${PORT}`);
});

server.get('/api/users', (req, res)=>{
  res.json([
    {id: 1, username: 'JeffRomos', password:'MoneyMoneySwag'},
    {id: 2, username: 'PhanTacos', password:'FillmeUp'},
    {id: 3, username: 'Garelt', password:'RivaKillMonsters'},
    {id: 4, username: 'CirciRocks', password:'Ihavenocluewhatsgoingon'},
    {id: 5, username: 'Yennefer', password:'PowerGreedGarelt'},
    {id: 6, username: 'hunterxhunter', password:'dadWhereareyou'},
    {id: 7, username: 'narutoSwat', password:'TrymeandDie'},
  ]);
});

server.post('/api/users/add', (req,res)=>{
  
});

server.use('*', (req, res) => {
  res.send('<h1>Hello, Heroku!</h1>');
});
