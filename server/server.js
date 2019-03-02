require('./config/config');
let utility = require('./utility');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/disneyskill', (req, res) => {
    res.send(
        utility.getText()
    );
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};