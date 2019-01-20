require('./config/config');
let utility = require('./utility');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT || 3000;

// var date;

app.use(bodyParser.json());

// app.use((request, response, next) => {
//     var todaysDate = new Date();
//     var month = todaysDate.getMonth();
//     var day = todaysDate.getDate();
//     date = {
//         month,
//         day
//     }
//     // var log = `${now}: ${request.method} ${request.url}`;
//     // console.log(log);
//     // fs.appendFile('server.log', log + '\n', (err) => {
//     //     if (err) {
//     //         console.log('Unable to append to log')
//     //     }
//     // });
//     next();
// });


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