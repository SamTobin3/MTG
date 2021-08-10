const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); //req.body statement


// ROUTES //

// create a deck
app.post('/deck', async (req,res) => {
    try {
    const {deck_name} = req.body;
    const newDeck = await pool.query(
        "INSERT INTO decks(deck_name) VALUES($1) RETURNING *", 
        [deck_name]
        );

    res.json(newDeck);
    } catch (err) {
        console.error(err.message)
    }
});

// create a description
app.post('/description', async (req,res) => {
    try {
        const {deck_desc} = req.body;
        const newDesc = await pool.query("INSERT INTO decks(deck_desc) VALUES($1) RETURNING *",
        [deck_desc]
        );
    
        res.json(newDesc);
    } catch (err) {
        console.error(err.message);
    }
})

// get all decks
app.get('/deck', async (req,res) => {
    try {
        const allDecks = await pool.query(
            "SELECT * FROM decks"
            );

        res.json(allDecks.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a deck
app.get('/deck/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const getDeck = await pool.query(
            "SELECT * FROM decks WHERE id = $1", 
            [id]
            );

        res.json(getDeck.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// update a deck 
app.put('/deck/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const {deck_name, deck_desc} = req.body;
        const updateDeck = await pool.query(
            "UPDATE decks SET deck_name = $1, deck_desc = $2 WHERE id = $3", 
            [deck_name, deck_desc, id]
            );

        res.json("Deck was updated!");
    } catch (err) {
        console.error(err.message);
    }
})


// delete a deck
app.delete('/deck/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const deleteDeck = await pool.query
            ("DELETE FROM decks WHERE id = $1", [id]);
        
            res.json("Deck was deleted");
    } catch (err) {
        console.error(err.message);
    }
})


app.listen(5000, () =>{
    console.log("server is running on port 5000")
});