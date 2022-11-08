const express = require("express");
const app = express();

app.use(express.static('./../client'));

app.get('/', (req, res) => {
    res.send('homepage');
})

app.get('/new', (req, res) => {
    res.send('new');
})

app.get('/api', (req, res) => {
    res.json([
        {
          text: "Hi there!",
          user: "Amando",
          added: new Date()
        },
        {
          text: "Hello World!",
          user: "Charles",
          added: new Date()
        }
     ]);
});

app.listen(5000, () => console.log('Server started on port 5000'));