const express = require('express');
const app = express();
const port = process.env.PORT || 8888;
const bodyParser = require('body-parser');//Parse JSON requests
const path = require('path');             //Navigate to build folder
const proxy = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, 'client/build')));




// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.use(
  '/graphql',
  proxy({ target: 'http://localhost:8080', changeOrigin: true })
);

app.get('*', (req,res) => {
 res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
