import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const Note = (props) => {
    
    const deleteAction=()=>{
      
        props.delete(props.id)
    }
    return(
     <div className="note">
     <h1>{props.title}</h1>
     <p>{props.content}</p>
   
     <button onClick={deleteAction}>
     <DeleteIcon />
     
     </button>
     </div>);
}
export default Note;