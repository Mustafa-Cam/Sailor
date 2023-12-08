const express = require('express')
const app = express()
const SailorPhoto = require('./models/photo')
const connectToDatabase = require('./db');

// MongoDB bağlantısını başlat
connectToDatabase();

const ships = [
    { name: 'Gemi 1', type: 'Kargo Gemisi', year: 2020, image: 'ship1.jpg' },
    { name: 'Gemi 2', type: 'Yolcu Gemisi', year: 2022, image: 'ship2.jpg' },
    // Diğer gemi verileri
  ];


app.use(express.static('public'));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index')
})


app.get('/submarine', (req, res) => {
  res.render('submarine')
}
)
app.get('/ships', (req, res) => {
  res.render('ships',{ships})
}
)
const port = 3000
app.listen(port, () => {
  console.log('listening on port :' + port)
})
