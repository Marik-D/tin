const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require("body-parser");
const port = 3000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'pug');


app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname + '/form.html'))
})

app.post('/formdata', (req, res) => {
    res.render('8c', {
        title: 'task 8c using pug',
        h1: "Parameters from the form are below",
        p1: "Chosen number is " + req.body.inp1 + ", email is " + req.body.inp2 + ", name is " + req.body.inp3
    });
})

app.post('/jsondata', (req, res) => {
    let myJSON = req.body;
    res.render('8d', { title: "title", h1: "Information about employee with id: " + myJSON.id, p1: "Name: " + myJSON.name + ", Surname:" + myJSON.surname });
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})