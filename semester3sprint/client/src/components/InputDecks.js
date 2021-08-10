import React, {Fragment, useState} from 'react';

const InputDecks = () => {

    const [deck_name, setDeckName] = useState("")

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {deck_name};
            const response = await fetch("http://localhost:5000/deck", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
        });

        window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    

    return (
        <Fragment>
         <h1 className="text-center mt-5">MTG Deck List</h1>
         <form className="d-flex mt-5" onSubmit={onSubmitForm}>
             <input 
                type="text" 
                className="form-control" 
                value={deck_name}
                onChange={e => setDeckName(e.target.value)} 
                />
             <button className="btn btn-success">Add Deck</button>
         </form>
         
        </Fragment>
    )
};

export default InputDecks;