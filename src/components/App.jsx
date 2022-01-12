import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note"
import CreateArea from "./CreateArea";
import NotesList from "./NotesList"


const App = () => {

    const [note, setNote] = useState([]);

    const addNote = (newNote) => {
        setNote(previousValue => [...previousValue, newNote]);
    }

    const deleteNote = (id) => {
        setNote(previousValue => {
            return previousValue.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Heading />
            <CreateArea note={addNote} />
            <NotesList notes={note} deleteNote={deleteNote}/>
            <Footer />
        </div>
        );

}

export default App;

