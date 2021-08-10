import React, {Fragment, useEffect, useState} from 'react';
import EditDecks from "./EditDecks";


const ListDecks = () => {

    const [deck, setDeck] = useState([]);

    // delete deck

    const deleteDeck = async (id) => {
        try {
            const deleteDeck = await fetch(`http://localhost:5000/deck/${id}`, {
                method: "DELETE"
            });

            setDeck(deck.filter(decks => decks.id !== id))
        } catch (err) {
            console.error(err.message);
        }
    }

    const getDecks = async () => {
        try {
            
            const response = await fetch("http://localhost:5000/deck");
            const jsonData = await response.json();

            setDeck(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getDecks();
    }, []);

    console.log(deck);

    return (
       <Fragment>
           {" "}
           <table className="table mt-5 text-center text-warning">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {deck.map(decks => (
                <tr key={decks.id}>
                    <td>{decks.deck_name}</td>
                    <td><EditDecks decks={decks}/></td>
                    <td>
                        <button 
                            className="btn btn-danger" 
                            onClick={() => deleteDeck(decks.id)}
                            >
                                Delete
                        </button>
                        </td>
                </tr>
            ))}
            </tbody>
        </table>
       </Fragment>
    )
};

export default ListDecks;