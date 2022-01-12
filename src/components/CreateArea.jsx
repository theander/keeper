import React, { useState,Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


const CreateArea = (props) => {

    const [inputText, setInputText] = useState([{ key: "", title: "", content: "" }]);
    const [isExpanded, setIsExpanded] = useState(false);
    

    const handleChange = (event) => {
        const { name, value } = event.target
        const id = uuidv4();
        setInputText(previousValue => {
            return { ...previousValue, [name]: value, key: id }
        })
    }

    const AddAction = (event) => {
        event.preventDefault();
        props.note(inputText)
        setInputText({ title: "", content: "" })
        expand();
    }

    const expand = () => {
        setIsExpanded(previousValue => { return !previousValue }) 
    }
    

    return (
        <div>
            <form className="create-note" action="" onSubmit={AddAction}>
                {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />}
                <textarea
                    onClick={expand}
                    onChange={handleChange}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? "3" : "1"}
                    value={inputText.content} />
                <Zoom in={isExpanded}>
                    <Fab
                        type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>

            </form>
        </div>
    );
}

export default CreateArea;
