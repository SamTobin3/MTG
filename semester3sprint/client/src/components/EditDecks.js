import React, {Fragment, useState} from 'react';

const EditDecks = ({decks}) => {
    const [deck_name , setDeckName] = useState(decks.deck_name);

    // edit deck name
    const updateDeckName = async (e) => {
        e.preventDefault();
        try {
            const body = {deck_name};
            const response = await fetch(`http://localhost:5000/deck/${decks.id}`, {
                method: "PUT",
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
            
            <button 
                type="button" 
                className="btn btn-primary" 
                data-toggle="modal" 
                data-target={`#id${decks.id}`}
                >
                    Edit
            </button>

            <div 
                className="modal" 
                id={`id${decks.id}`}
                onClick={() => setDeckName(decks.deck_name)}
                >
                    <div className="modal-dialog">
                    <div className="modal-content">
                    
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Deck</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal"
                                onClick={() => setDeckName(decks.deck_name)}
                                >&times;
                            </button>
                        </div>
                        
                        <div className="modal-body">
                            <input 
                                type="text" 
                                className="form-control" 
                                value={deck_name}
                                onChange={e => setDeckName(e.target.value)}
                            />
                        </div>
                        
                    
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-info" 
                                data-dismiss="modal"
                                onClick ={e => updateDeckName(e)}
                                >
                                    Edit
                            </button>

                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                data-dismiss="modal"
                                onClick={() => setDeckName(decks.deck_name)}
                                >
                                    Close
                            </button>
                        </div>
                        
                    </div>
                    </div>
            </div>
            
            

        </Fragment>
    )
};

export default EditDecks;