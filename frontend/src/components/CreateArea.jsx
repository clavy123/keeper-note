import React, { useState } from "react";
import { Add } from "@material-ui/icons";
import { Fab } from "@material-ui/core";
import { Zoom } from "@material-ui/core";


function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);
    const [note,setNote] = useState({
        title : "",
        content : ""
    });
    function handleChange(event){
        const {name,value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            };
        });
    }
    function SubmitNote(event){
        props.onAdd(note);
        setNote({
            title : "",
            content : ""
        });
        event.preventDefault()
    }

    function expand(){
        setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
         <input 
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
         />
        )}
        <textarea 
            name="content"
            onClick={expand}
            value={note.content}
            onChange={handleChange}
            placeholder="Take a note..."
            row={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
        <Fab onClick={SubmitNote}><Add /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
