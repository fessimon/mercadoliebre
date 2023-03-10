/*const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

//app.listen(3000, ()=> {console.log("Servidor corriendo");});
const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log("Servidor corriendo"));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/views/register.html'));
});

*/


const express = require("express");
const app = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000, function(){
    console.log("Servidor corriendo");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + '/views/register.html')
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
});


