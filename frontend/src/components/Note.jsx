import React from "react";
import Delete from "@material-ui/icons/Delete";

function Note(props){
    function handleCLick(){
        props.onDelete(props.id);
    }
    return <div class = "note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleCLick}>
            <Delete />
        </button>
    </div>
}
export default Note; 