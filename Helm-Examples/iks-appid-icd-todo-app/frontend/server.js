// https://dev.to/nburgess/creating-a-react-app-with-react-router-and-an-express-backend-33l3


const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');//Parse JSON requests
const path = require('path');             //Navigate to build folder
const proxy = require('http-proxy-middleware');
const isDocker = require('is-docker');

if (!isDocker()) {
  console.log('load config');
  require('dotenv').config();
}

const todoServer = process.env.TODO_GRAPHQL_URI;


app.use(express.static(path.join(__dirname, 'client/build')));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(
  '/graphql',
  proxy({ target: todoServer, changeOrigin: true, ws: true })
);

app.get('*', (req,res) => {
 res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
