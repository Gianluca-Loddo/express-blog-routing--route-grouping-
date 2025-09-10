// importiamo il nostro express in maniera da poterlo utilizzare
const express = require('express');
// creiamo una costante app che rappresenta la nostra applicazione
const app = express();


// definiamo una porta su cui il nostro server ascolterà le richieste
const port = 3000;

// importiamo il router dei post
const postsRouter = require('./routers/posts');

// usiamo il router dei post per tutte le rotte che iniziano con /posts
app.use('/posts', postsRouter);


// facciamo in modo che il nostro server ascolti le richieste sulla porta definita (avvio del server: ascolto delle richieste)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Configurazione della cartella 'images' per servire file statici (in questo caso le nostre immagini)
app.use(express.static('images'));

// definiamo un array di oggetti che rappresentano dei post
const post = [
    { id: 1, titolo: 'Primo Post', contenuto: 'Questo è il contenuto del primo post: ciambellone', immagine: '/ciambellone.jpeg', tags: ['intro', 'benvenuto'] },
    { id: 2, titolo: 'Secondo Post', contenuto: 'Questo è il contenuto del secondo post: cracker alla barbabietola', immagine: '/cracker_barbabietola.jpeg', tags: ['aggiornamento', 'news'] },
    { id: 3, titolo: 'Terzo Post', contenuto: 'Questo è il contenuto del terzo post: pane fritto dolce', immagine: '/pane_fritto_dolce.jpeg', tags: ['tutorial', 'javascript'] },
    { id: 4, titolo: 'Quarto Post', contenuto: 'Questo è il contenuto del quarto post: pasta alla barbabietola', immagine: '/pasta_barbabietola.jpeg', tags: ['nodejs', 'express'] },
    { id: 5, titolo: 'Quinto Post', contenuto: 'Questo è il contenuto del quinto post: torta paesana', immagine: '/torta_paesana.jpeg', tags: ['conclusione', 'fine'] },
];






























/*
// BOUNS (INDEX) -> ottenere tutti i post (GET /posts)
app.get('/posts', (req, res) => {
    res.json(post); // rispondi con i dati in formato JSON
});


//1. INDEX (R) -> ottenere tutti i post (GET /posts) -> già fatto sopra

//2. SHOW (R) -> ottenere un singolo post (GET /posts/:id)
app.get('/posts/:id', (req, res) => {   // pattern della rotta '/posts/:id' e placeholder :id
    const { id } = req.params; //Qui si sta facendo destructuring → estrae direttamente id da req.params
    //id è un nome convenzionale (dato da noi), si va a recuperare (req) params che contiene l'id
    const postID = post.find((postEL) => postEL.id === parseInt(id));
    if (!postID) { // se non trovi il post con quell'id
        return res.status(404).json({ message: 'Pagina non trovata', error: 'not found' }); // ritorna errore 404
    }
    res.send('Mostrami il singolo post: ' + req.params.id);
});

//3. CREATE (C) -> creare un nuovo post (POST /posts)
app.post('/posts', (req, res) => {
    res.send('Creo un nuovo post');
});
//4. UPDATE (U) -> aggiornare un post esistente (PUT /posts/:id)
app.put('/posts/:id', (req, res) => {
    res.send('Aggiorno un post esistente: ' + req.params.id);
});

//5. MODIFY (U) -> modificare parzialmente un post esistente (PATCH /posts/:id)
app.patch('/posts/:id', (req, res) => {
    res.send('Modifico parzialmente un post esistente: ' + req.params.id);
});


//6. DELETE (D) -> eliminare un post esistente (DELETE /posts/:id)
app.delete('/posts/:id', (req, res) => {
    res.send('Elimino un post esistente: ' + req.params.id);
});
*/ 