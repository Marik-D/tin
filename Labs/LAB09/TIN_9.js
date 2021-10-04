const express = require('express')
const app = express()
const path = require('path');
const bodyParser = require("body-parser");
const port = 3000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/jsonCalculator', (req, res) => {
    let myJSON = req.body;
    let operationResult;

    if (typeof myJSON.num1 !== "number" || typeof myJSON.num2 !== "number") {
        res.json(JSON.stringify("Error: Invalid input"));
    } else {
        switch (myJSON.operation) {
            case "+":
                operationResult = myJSON.num1 + myJSON.num2;
                break;
            case "-":
                operationResult = myJSON.num1 - myJSON.num2;
                break;
            case "*":
                operationResult = myJSON.num1 * myJSON.num2;
                break;
            case "/":
                operationResult = myJSON.num1 / myJSON.num2;
                break;
            default:
                operationResult = "Error: Invalid operation";
        }
        res.json(JSON.stringify(operationResult));
    }



})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})