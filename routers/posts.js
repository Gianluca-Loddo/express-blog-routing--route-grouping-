// routers/posts.js
const express = require('express');
const router = express.Router();




// -------------------------------------------



// INDEX – GET /posts
router.get('/', (req, res) => { // si utilizza router invece di app e si elimina il pattern della rotta '/posts' perché già definito in main.js
  res.send('Hello World! All\'inizio ero soooooloooo🎶🎵🎤 (pinguini tattici nucleari 🐧)');
});

// SHOW – GET /posts/:id
router.get('/:id', (req, res) => { // si elimina il pattern della rotta '/posts' perché già definito in main.js
  res.send(`Dettagli del post ${req.params.id}`);
});

// CREATE – POST /posts
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

// UPDATE – PUT /posts/:id
router.put('/:id', (req, res) => {
  res.send(`Aggiornamento del post ${req.params.id}`);
});

// MODIFY – PATCH /posts/:id
router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
});

// DELETE – DELETE /posts/:id
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router; // esportiamo il router per poterlo usare in main.js
