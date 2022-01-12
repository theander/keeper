import React from "react";

import Note from "./Note";

const NotesList = (props) => {

    const notes = props.notes;

    const deleteNote = (id) => {
        props.deleteNote(id)
    }   

    return <div> {notes.map((noteItem, key) =>
        <Note 
        key={key} 
        id={key} 
        title={noteItem.title} 
        content={noteItem.content} 
        delete={deleteNote} />
    )}</div>




}
export default NotesList;